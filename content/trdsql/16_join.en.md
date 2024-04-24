+++
author = "Noboru Saito"
title = "trdsql JOIN"
date = "2024-04-11"
description = "trdsql JOIN multiple files"
weight = 16
tags = [
    "trdsql",
    "SQL",
	"JOIN",
]
categories = [
    "trdsql",
]
+++

JOIN multiple files with trdsql

Suppose you have the following two CSV files:

abc.csv

```CSV
1,AAA
2,BBB
3,CCC
```

price.csv

```CSV
1,100
2,500
3,50
```

The following is the result of joining the two files:

```CSV
1,AAA,100
2,BBB,500
3,CCC,50
```

With trdsql, you can write SQL JOINs directly by using file names instead of tables.

```console
trdsql "SELECT a.c1, a.c2, p.c2" \
         "FROM abc.csv AS a" \
    "LEFT JOIN price.csv AS p" \
               "USING (c1)"
```

For a 1-to-1 JOIN with the same number of corresponding columns, the result is the same as `INNER JOIN`.
In the case of a LEFT JOIN, all rows of the specified abc.csv are displayed first, and price.csv is displayed only if there is a corresponding row.
This time, since there is no header in the CSV, the column names are common c1, c2, etc., so the leftmost column (c1) is used as the common column for `USING`. This is the same as `ON a.c1 = p.c1`.

When joining multiple CSV files, it is necessary to unify the presence or absence of headers.

However, if the extension is automatically identifiable, it is possible to mix CSV and LTSV.

unit.ltsv

```LTSV
id:1	unit:個
id:2	unit:箱
```

Join the result of the previous CSV JOIN with LTSV.

```console
$ trdsql -oat \
       "SELECT a.c1, a.c2, p.c2, unit" \
        " FROM abc.csv AS a" \
    "LEFT JOIN price.csv AS p" \
               "USING (c1)" \
    "LEFT JOIN unit.ltsv AS u " \
               "ON (a.c1 = u.id)"
+----+-----+-----+------+
| c1 | c2  | c2  | unit |
+----+-----+-----+------+
|  1 | AAA | 100 | 個   |
|  2 | BBB | 500 | 箱   |
|  3 | CCC |  50 |      |
+----+-----+-----+------+
```
