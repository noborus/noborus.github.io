+++
author = "Noboru Saito"
title = "trdsql Easy SQL "
date = "2023-06-12"
description = "How to use a simple SQL of trdsql"
weight = 3
tags = [
    "trdsql",
    "sql",
    "cut",
    "sort",
]
categories = [
    "trdsql",
]
+++

By using `trdsql` and simple SQL, you can do something that can be done by combining other UNIX tools.

## File analysis

If you want to run a simple SQL from `SELECT * FROM`, you need to know the column name in advance.
If you execute the file name to the `-a` option to the `-a` option, it will analyze the file and output information.
(If the extension of the CSV file is like .csv, `-icsv` can be omitted. Interpreting the`-ih` header, specifying the number of skips `-is`, etc. If necessary.If you do not attach it, it may be an unintended analysis result).

```console
trdsql -ih -a header.csv
```

```
The table name is header.csv.
The file type is CSV.

Data types:
+-------------+------+
| column name | type |
+-------------+------+
| id          | text |
| \`name\`    | text |
+-------------+------+

Data samples:
+----+----------+
| id | \`name\` |
+----+----------+
|  1 | Orange   |
+----+----------+

Examples:
trdsql -ih "SELECT id, \`name\` FROM header.csv"
trdsql -ih "SELECT id, \`name\` FROM header.csv WHERE id = '1'"
trdsql -ih "SELECT id, count(id) FROM header.csv GROUP BY id"
trdsql -ih "SELECT id, \`name\` FROM header.csv ORDER BY id LIMIT 10"
```

### Use of Examples

The SQL that can be actually executed is output to Examples.

SQL has a reservation word, and the column name that must be escaped, such as using a reservation word in the column name or using a column name other than lowercase letters, is escaped as described above (\ by the database).`" Or "").
When using from the command line, add "\" to escape from the shell, and surround it with "\\ '".

(The reserved word is changed depending on the implementation and version of SQL, but there is no problem to escape other than the reservation word, so the unnecessary words are escaped.)

Here we will execute one of Examples.

```console
trdsql -ih "SELECT id, \`name\` FROM header.csv"
```

```csv
1,Orange
2,Melon
3,Apple
```

The same result as `select * from header.csv`.

We will change this SQL as a dedicated type.

## Sort of columns, column extractions

This time, change the order of id, name, and output in the order of name, id.

```console
trdsql -ih "SELECT \`name\`,id FROM header.csv"
```

```csv
Orange,1
Melon,2
Apple,3
```

That's right.So you don't need an id, so if you want to output only name, you need to leave only the name.

```console
trdsql -ih "SELECT \`name\` FROM header.csv"
```

```csv
Orange
Melon
Apple
```

It's too easy to get angry, but if you use the UNIX tool, AWK or CUT will be the content of the explanation.

## Sorting line

If you have something else to sort, it's a line. 
You can sort lines with `ORDER BY column name`. Ascending order (small → large) is ASC (default so can be omitted),
descending order (large → small) is DESC.

```console
trdsql -ih "SELECT id, \`name\` FROM header.csv ORDER BY \`name\`"
```

```csv
3,Apple
2,Melon
1,Orange
```

```console
trdsql -ih "SELECT id, \`name\` FROM header.csv ORDER BY id DESC"
```

```csv
3,Apple
2,Melon
1,Orange
```

Actually, this may not be sorted as intended.
In trdsql, input data such as CSV, LTSV, JSON, etc. works as a text type. In the case of id here, if id is not treated as a number, the result will be unintended when it is more than two digits.

To treat as a number, use `CAST (column name AS type name)` in SQL as follows.

```console
trdsql -ih "SELECT id,\`name\` FROM  header.csv  ORDER BY CAST(id AS int) DESC"
```

Furthermore, when combined with ORDER BY, `LIMIT` is often used.
`LIMIT` can be used to limit the output to the specified number of cases.
It is used when you want to output only one or only the top 10.

```console
trdsql -ih "SELECT id,\`name\` FROM  header.csv  ORDER BY CAST(id AS int) DESC LIMIT 1"
```

```csv
3,Apple
```
