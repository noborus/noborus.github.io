+++
author = "Noboru Saito"
title = "trdsql GROUP集計"
date = "2019-12-07"
description = ""
tags = [
    "trdsql",
    "group by",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

## GROUP集計

全体の合計を計算することもありますが、グループ毎の合計をまとめて出力したい場合もあります。
そこで使うのが`GROUP BY`です。

前回の例をもう一度使用します。

```sample.csv
name,price
apple,100
orange,50
melon,500
apple,90
apple,90
orange,40
orange,40
```

ここでappleやorange毎の合計を出したい場合は、以下のように検索条件で絞れば計算できますが、nameの種類の数だけ実行するとなると大変な作業になります。

```sh
trdsql -ih \
"SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv WHERE name='apple'"
apple,280
```

```sh
trdsql -ih \
"SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv WHERE name='orange'"
orange,130
```

そこで`GROUP BY`を使ってnameをグループとして扱うことで、それぞれの集計結果を求めることができます。

```sh
trdsql -ih \
"SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv GROUP BY name"
apple,280
melon,500
orange,130
```

前回の集計を少し変えてname毎に出すように出力してみます。
出力は-oat(Ascii Table)を使うと見やすく表示できます。

```sh
trdsql -ih -oat \
"SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min, " \
"       MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, " \
"       AVG(CAST(price AS INT)) as avg " \
"  FROM sample.csv GROUP BY name"
+--------+-------+-----+-----+-----+--------------------+
|  name  | count | min | max | sum |        avg         |
+--------+-------+-----+-----+-----+--------------------+
| apple  |     3 |  90 | 100 | 280 |  93.33333333333333 |
| melon  |     1 | 500 | 500 | 500 |                500 |
| orange |     3 |  40 |  50 | 130 | 43.333333333333336 |
+--------+-------+-----+-----+-----+--------------------+
```

GROUP集計した結果をORDER BYで並べ替えることもできます。

```sh
trdsql -ih -oat \
"SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min," \
      " MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, " \
      " AVG(CAST(price AS INT)) as avg " \
 " FROM sample.csv GROUP BY name " \
" ORDER BY sum DESC"
+--------+-------+-----+-----+-----+--------------------+
|  name  | count | min | max | sum |        avg         |
+--------+-------+-----+-----+-----+--------------------+
| melon  |     1 | 500 | 500 | 500 |                500 |
| apple  |     3 |  90 | 100 | 280 |  93.33333333333333 |
| orange |     3 |  40 |  50 | 130 | 43.333333333333336 |
+--------+-------+-----+-----+-----+--------------------+
```

GROUP集計した結果についてWHEREで条件を指定することはできません。そこからさらに絞るにはHAVINGを使用します。

```sh
trdsql -ih -oat \
"SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min, " \
      " MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, " \
      " AVG(CAST(price AS INT)) as avg " \
 " FROM sample.csv" \
" GROUP BY name " \
      " HAVING COUNT(name) > 1 ORDER BY sum DESC"
+--------+-------+-----+-----+-----+--------------------+
|  name  | count | min | max | sum |        avg         |
+--------+-------+-----+-----+-----+--------------------+
| apple  |     3 |  90 | 100 | 280 |  93.33333333333333 |
| orange |     3 |  40 |  50 | 130 | 43.333333333333336 |
+--------+-------+-----+-----+-----+--------------------+
```
