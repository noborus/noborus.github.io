+++
author = "Noboru Saito"
title = "trdsql Add total to the row"
date = "2024-04-19T09:00:00+09:00"
description = "trdsql ROLLUP"
weight = 31
tags = [
    "trdsql",
    "MySQL",
    "PostgreSQL",
    "ROLLUP",
]
categories = [
    "trdsql",
]
+++

When using [window functions](/trdsql/19_window), you can add columns to the original file content and output the aggregation results.
However, it is easier for people to confirm if the aggregation result line is output last.

Even with normal SQL, you can output the original content and the aggregation result separately and use `UNION` to output them as one result.

It is not supported in SQLite3, but there are statements supported in PostgreSQL and MySQL.

## ROLLUP

[window functions](/trdsql/19_window) also used the following CSV file.

```score.csv
id,class,name,score
1,A,bob,174
2,A,alice,248
3,A,carol,163
4,B,dave,289
5,B,eve,157
6,B,flank,272
```

With the normal `GROUP BY`, you could output the total for the entire file or the total for each class.
However, to output the total for each class and the total for the entire file, you had to use a window function to output them in separate columns.

`GROUP BY`に `ROLLUP`を指定することで、両方を出力できます。
en: By specifying `ROLLUP` in `GROUP BY`, you can output both.

### PostgreSQL

In PostgreSQL, by using `GROUP BY ROLLUP(column name)` instead of `GROUP BY column name`, you can output the total aggregation results in addition to the normal GROUP BY.

```console
$ trdsql -driver "postgres" -dsn "dbname=trdsql_test" -oat -ih \
"SELECT class, SUM(score::int) AS score FROM score.csv GROUP BY ROLLUP(class) ORDER BY class"
+-------+------+
| class | sum  |
+-------+------+
| A     |  585 |
| B     |  718 |
|       | 1303 |
+-------+------+
```

### MySQL

MySQLでは、`GROUP BY 列名`の後に `WITH ROLLUP`を付けると、通常のGROUP BYに加えて、全体の集計結果を出力します。
en: In MySQL, by adding `WITH ROLLUP` after `GROUP BY column name`, you can output the total aggregation results in addition to the normal GROUP BY.

```console
$ trdsql -driver mysql -oat -ih \
"SELECT class, SUM(CAST(score AS SIGNED)) AS score FROM score.csv GROUP BY class WITH ROLLUP "
+-------+-------+
| class | score |
+-------+-------+
| A     |   585 |
| B     |   718 |
|       |  1303 |
+-------+-------+
```

## PostgreSQL GROUPING SETS

In PostgreSQL, you can output more flexibly.

If you want to add subtotals for class and the total for the entire file to the content of a normal CSV file, you need to control the grouping further.
`GROUPING SETS` allows flexible grouping.

By grouping with `GROUPING SETS` for id, name, and class (i.e., grouped by id, but also including name and class in the output), by class, and by total (no specification), you can output subtotals and totals as shown below.

```console
$ trdsql -driver "postgres" -dsn "dbname=trdsql_test" -oat -ih \
"SELECT id, name,class, SUM(score::int) AS score " \
 " FROM score.csv GROUP BY GROUPING SETS((class,id,name),(class),()) "\
 " ORDER BY class"
 +----+-------+-------+-------+
| id | name  | class | score |
+----+-------+-------+-------+
|  1 | bob   | A     |   174 |
|  2 | alice | A     |   248 |
|  3 | carol | A     |   163 |
|    |       | A     |   585 |
|  4 | dave  | B     |   289 |
|  5 | eve   | B     |   157 |
|  6 | flank | B     |   272 |
|    |       | B     |   718 |
|    |       |       |  1303 |
+----+-------+-------+-------+
```

The above GROUPING SETS can be simplified with `ROLLUP(class,(id,name))`.

```console
$ trdsql -driver "postgres" -dsn "dbname=trdsql_test" -oat -ih \
"SELECT id,name,class, SUM(score::int) AS score " \
 " FROM score.csv GROUP BY ROLLUP(class,(id,name)) " \
 " ORDER BY class"
```

If you use `ROLLUP(class,id,name)`, it groups by id and name separately, so the same score line is output twice.
If you group by id and name together, it has the same meaning as GROUPING SETS.

### MySQL WITH ROLLUP

In MySQL, there is no `GROUPING SETS`, so you can output the results with `WITH ROLLUP` for each class and id, but you cannot output the name.

```console
$ trdsql -driver mysql -oat -ih \
"SELECT id,class, SUM(CAST(score AS SIGNED)) AS score " \
 " FROM score.csv GROUP BY class,id WITH ROLLUP"
+----+-------+-------+
| id | class | score |
+----+-------+-------+
|  1 | A     |   174 |
|  2 | A     |   248 |
|  3 | A     |   163 |
|    | A     |   585 |
|  4 | B     |   289 |
|  5 | B     |   157 |
|  6 | B     |   272 |
|    | B     |   718 |
|    |       |  1303 |
+----+-------+-------+
```

There may be a way to aggregate the name.
You can aggregate by concatenating strings with `GROUP_CONCAT()`.

```console
$ trdsql -driver mysql -oat -ih \
"SELECT id,GROUP_CONCAT(name) as name,class, SUM(CAST(score AS SIGNED)) AS score " \
" FROM score.csv GROUP BY class,id WITH ROLLUP"
+----+--------------------------------+-------+-------+
| id |              name              | class | score |
+----+--------------------------------+-------+-------+
|  1 | bob                            | A     |   174 |
|  2 | alice                          | A     |   248 |
|  3 | carol                          | A     |   163 |
|    | bob,alice,carol                | A     |   585 |
|  4 | dave                           | B     |   289 |
|  5 | eve                            | B     |   157 |
|  6 | flank                          | B     |   272 |
|    | dave,eve,flank                 | B     |   718 |
|    | bob,alice,carol,dave,eve,flank |       |  1303 |
+----+--------------------------------+-------+-------+
```
