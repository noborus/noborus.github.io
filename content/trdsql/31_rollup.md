+++
author = "Noboru Saito"
title = "trdsql 合計を行に追加する"
date = "2020-01-04T13:38:00+09:00"
description = "trdsqlでROLLUPを使ってみます。"
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

[Window関数](/blob/19_window)により元のファイルの内容に列を追加して、集計結果を出せました。
ただ、人が確認する場合は、集計の結果行が最後に出るほうが確認しやすくなります。

通常のSQLでも元の内容と集計結果を別々に出して`UNION`を使うことで、一つの結果として出すことが出来ますが、一回で済むならばそれに越したことはありません。

SQLite3ではサポートされていませんが、PostgreSQLとMySQLならばサポートされている文があります。

## ROLLUP

[Window関数](/blob/19_window)でも使用した以下のCSVファイルを使用します。

```score.csv
id,class,name,score
1,A,bob,174
2,A,alice,248
3,A,carol,163
4,B,dave,289
5,B,eve,157
6,B,flank,272
```

通常の`GROUP BY`で全体の合計又は、class毎の合計が出せました。
ただし、class毎の合計と全体の合計を出すにはWindow関数を使用して別の列に出していました。

`GROUP BY`に `ROLLUP`を指定することで、両方を出力できます。

### PostgreSQL

PostgreSQLでは、`GROUP BY 列名`の代わりに`GROUP BY ROLLUP(列名)`を使用することで、通常のGROUP BYに加えて、全体の集計結果を出力します。

```sh
trdsql -driver "postgres" -dsn "dbname=trdsql_test" -oat -ih \
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

```sh
trdsql -driver mysql -oat -ih \
"SELECT class, SUM(CAST(score AS SIGNED)) AS score FROM score.csv GROUP BY class WITH ROLLUP "
+-------+-------+
| class | score |
+-------+-------+
| A     |   585 |
| B     |   718 |
|       |  1303 |
+-------+-------+
```

## GROUPING SETS

PostgreSQLでは、さらに柔軟に出力することができます。

通常のCSVの内容に追加して、classの小計と全体の合計を出したい場合は、更にグループ化を制御する必要があります。
`GROUPING SETS`は柔軟なグループ化が可能です。

`GROUPING SETS`で id,name,class（つまりid別ですが、nameとclassも出力対象に含めるため、指定します）、class別、総合計（指定なし）の３つのグループ化をして出力すると以下のように、小計、合計が出力できます。

```sh
trdsql -driver "postgres" -dsn "dbname=trdsql_test" -oat -ih \
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

上記の GROUPING SETSは、`ROLLUP(class,(id,name))`で簡略化できます。

```sh
trdsql -driver "postgres" -dsn "dbname=trdsql_test" -oat -ih \
"SELECT id,name,class, SUM(score::int) AS score " \
 " FROM score.csv GROUP BY ROLLUP(class,(id,name)) " \
 " ORDER BY class"
```

`ROLLUP(class,id,name)` とするとidとnameそれぞれで、グループ化してしまうので、同じscoreの行が2行づつ出てしまいます。
idとnameは１つにしつつ、class,(id,name)のそれぞれでグループ化するとGROUPING SETSと同じ意味になります。

### MySQL

MySQLでは、`GROUPING SETS`がないので、class,id毎で`WITH ROLLUP`にり結果は出せますが、nameを出力することは出来ません。

```sh
trdsql -driver mysql -oat -ih \
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

nameの方を集約させてしまうという手もありかもしれません。
`GROUP_CONCAT()`により文字列を接続することで、集約できます。

```sh
trdsql -driver mysql -oat -ih \
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
