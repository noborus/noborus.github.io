+++
author = "Noboru Saito"
title = "trdsql Aggregation"
date = "2019-12-05"
description = "Aggregation of trdsql"
weight = 5
tags = [
    "trdsql",
    "sql",
    "count",
]
categories = [
    "trdsql",
]
+++

## COUNT(*)

First is COUNT(*). You can count the total number of cases.

When using aggregate functions, the original row and column data is not output, and the aggregated result is output from there.

The following example does not look like a CSV because the result is one line, but it is output as a one-line, one-column CSV with a header.

{{% notice %}}
Although it simply counts the number of cases, care must be taken not to include the number in the interpretation of the header.
{{% /notice %}}

```console
trdsql -icsv -ih -oh "SELECT COUNT(*) FROM header.csv"
```

```
count(*)
3
```

You can specify a search condition. This is used when you want to know the number of cases that match the search condition.

```console
trdsql -icsv -ih -oh "SELECT COUNT(*) FROM header.csv WHERE id<'1'"
```

```
count(*)
2
```

## COUNT(column name)

COUNT(column name) is also often used. In RDBMS, NULL is excluded, so it is used to distinguish it from COUNT(*).

Also, when COUNT and DISTINCT are combined, the number of cases excluding duplicates can be output.

Let's run it with the following CSV file.

```abc.csv
id,name
1,aaa
2,bbb
3,ccc
4,aaa
```

```console
trdsql -icsv -ih -oh "SELECT COUNT(name) FROM abc.csv"
```

```
count(name)
4
```

```console
trdsql -ih -oh "SELECT COUNT(DISTINCT name) FROM abc.csv"
```

```
COUNT(DISTINCT name)
3
```

Aggregate functions can also be executed at once.

```console
trdsql -ih -oh "SELECT COUNT(name), COUNT(DISTINCT name) FROM abc.csv"
```

```
COUNT(name),COUNT(DISTINCT name)
4,3
```
