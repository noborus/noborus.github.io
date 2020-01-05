+++
author = "Noboru Saito"
title = "trdsql 集計計算"
date = "2019-12-06"
description = ""
tags = [
    "trdsql",
    "sum",
    "min",
    "max",
    "avg",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

## 集計計算

集計には、COUNT()だけでなく集計計算することも当然できます。SQLには数値に対して計算をおこなう集計関数があらかじめ揃っています。

ここでは以下のようなCSVファイルを例に説明します。

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

## SUM

合計を計算します。price列をすべて足します。

```sh
trdsql -ih "SELECT SUM(price) FROM sample.csv"
910
```

前にも書いたようにtrdsqlは列をテキスト型として扱いますので、本来はCASTして数値型にしてから計算する必要があります。ただ、集計の関数を使用する場合は、暗黙のCASTがされて省略できる場合があります（使用するデータベースによります）。

明示的にCASTする場合は以下のようにします。

```sh
trdsql -ih "SELECT SUM(CAST(price AS int)) FROM sample.csv"
910
```

## AVG

平均を計算します。合計/件数で計算できますが、関数が用意されているので、使用したほうがわかりやすく書けます。この例では、平均の意味はそれほどないかもしれませんが。

```sh
trdsql -ih "SELECT AVG(CAST(price AS int)) FROM sample.csv"
130
```

## MIN,MAX

最小値や最大値を出力します。

```sh
trdsql -ih -oh "SELECT MIN(CAST(price AS INT)),MAX(CAST(price AS INT)) FROM sample.csv"
MIN(CAST(price AS INT)),MAX(CAST(price AS INT))
40,500
```

MINやMAXはテキスト型でも使用できるため、明示的にCASTする必要があります。

（MINやMAXのnameを知りたくなるところですが、SQLだとちょっと複雑になるので後に回します）。

前回書いたように、集計関数は一度に実行できます。

```sh
trdsql -ih -oat \
"SELECT COUNT(name) as count, " \
      " COUNT(DISTINCT name) as uniq, " \
      " MIN(CAST(price AS INT)) AS min, " \
      " MAX(CAST(price AS INT)) as max, " \
      " SUM(CAST(price AS INT)) as sum, " \
      " AVG(CAST(price AS INT)) as avg " \
  "FROM sample.csv"
+-------+------+-----+-----+-----+-----+
| count | uniq | min | max | sum | avg |
+-------+------+-----+-----+-----+-----+
|     7 |    3 |  40 | 500 | 910 | 130 |
+-------+------+-----+-----+-----+-----+
```
