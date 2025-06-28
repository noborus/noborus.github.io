+++
author = "Noboru Saito"
title = "SQL ORDER BY Column Numbers and Expressions"
date = "2025-06-29T07:33:00+09:00"
description = ""
tags = [
    "sql",
    "order by",
    "english",
]
categories = [
    "sql",
]
+++

## Background

An issue with specifying column numbers in `ORDER BY` gained attention through tom__bo's article about [behavioral changes in prepared statements in 8.0.22](https://tombo2.hatenablog.com/entry/2020/10/29/135053).

In the article, the following was mentioned:

{{% notice %}}
For a prepared statement of the form SELECT expr1, expr2, ... FROM table ORDER BY ?, passing an integer value N for the parameter no longer causes ordering of the results by the Nth expression in the select list; the results are no longer ordered, as is expected with ORDER BY constant.
{{% /notice %}}

The phrase "the results are no longer ordered, as is expected with ORDER BY constant" left me confused, so I decided to investigate.

## SQL ORDER BY

In SQL, it's common to specify column names in `ORDER BY` to sort the output.

```SQL
SELECT * FROM test_table ORDER BY c1;
1,Orange
2,Melon
3,Apple
```

You can specify column names even if they're not included in the SELECT list.

```SQL
SELECT c2 FROM test_table ORDER BY c1;
Orange
Melon
Apple
```

Furthermore, you can use not just column names but also "expressions".

```SQL
SELECT c1%2, c1, c2 FROM test_table ORDER BY c1%2;
0,2,Melon
1,1,Orange
1,3,Apple
```

## Column Number Specification in ORDER BY

And here's where it gets tricky. Many implementations allow the use of column numbers in `ORDER BY`.
This was once included in the SQL-92 standard (though it was later removed), so most implementations support it.

```SQL
SELECT c1,c2 FROM test_table ORDER BY 1;
// Sorted by c1
1,Orange
2,Melon
3,Apple
```

While it works, it's generally deprecated. It causes confusion and seems implementation-wise problematic.
To support both column numbers and "expressions", the "result of expressions" and column numbers must be handled separately.

This means:

```SQL
SELECT c2 FROM test_table ORDER BY 2;
```

and

```SQL
SELECT c2 FROM test_table ORDER BY 1+1;
```

are different things. The latter sorts by the result of 1+1 (all rows have the same result, so no sorting occurs), which makes sense.

```SQL
SELECT 1+1, c2 FROM test_table ORDER BY 1+1;
2,Orange
2,Melon
2,Apple
```

I've only tested with PostgreSQL, MySQL, and SQLite3, but I believe most implementations behave similarly.

When you specify a non-existent column number, you get an error, but when interpreted as an expression, no error occurs.

```SQL
SELECT c2 FROM test_table ORDER BY 4;
Error 1054: Unknown column '4' in 'order clause'
```

```SQL
SELECT c2 FROM test_table ORDER BY 4+0;
Orange
Melon
Apple
```

However, PostgreSQL, MySQL, and SQLite3 behave slightly differently in some cases.
When you include non-integer constants (like strings), PostgreSQL gives a "non-integer constant" error, while MySQL and SQLite3 treat it as an expression.

```SQL
SELECT c2 FROM test_table ORDER BY '1';
ERROR:  42601: non-integer constant in ORDER BY
```

If you make it interpretable as an expression, PostgreSQL behaves the same way.

```SQL
SELECT c2 FROM test_table ORDER BY '1'||'';
Orange
Melon
Apple
```

Based on the behavior, it seems that ORDER BY first determines whether it's a column number, and if not, it moves to regular expression evaluation (usable elsewhere).

In this case, PostgreSQL probably had users accidentally entering `ORDER BY '1'` or `ORDER BY 'name'` and wondering "Why isn't it sorting??"
Someone likely complained, "Nobody would enter this intentionally, so make it an error!" ← Pure speculation

## Summary

So, the [behavioral change in prepared statements in 8.0.22](https://tombo2.hatenablog.com/entry/2020/10/29/135053) makes sense if we consider that "prepared statements" changed from interpreting it as a column number to expression evaluation.

However, I think "the results are no longer ordered, as is expected with ORDER BY constant" is somewhat misleading.
I was actually misled by it.

In other words, this isn't about "column numbers" but rather "fixed values that aren't interpreted as column numbers" (though directly specifying integers would be interpreted as column numbers).
