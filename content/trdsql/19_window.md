+++
author = "Noboru Saito"
title = "trdsql Window関数"
date = "2019-12-19"
description = "trdsqlでWindow関数を使用する方法を紹介します。"
weight = 19
tags = [
    "trdsql",
    "sql",
    "window関数",
]
categories = [
    "trdsql",
]
+++

これまで[グループ集計](/trdsql/07_group)による集計を紹介していますが、グループ集計は元の行とはまったく別にグループ毎の行を出力していました。
つまり、元のファイルとは別に集計の結果を出力していた訳です。

そうではなくて、元のファイルの情報にプラスして集計結果を出して欲しい場合があります。
例えば、点数の列では、点数の平均との差を出力したり、柔軟な計算が出来るようになります。これまでの方法では、一旦集計してからJOINするしかありませんでしたが、SQLのWindow関数を使うとそういった集計も出すことが出来ます。

古いバージョンではSQLite3では、Window関数を使用できませんでしたが、現在のtrdsqlに含まれているSQLite3では、Window関数を使用できます。

PostgreSQLやMySQLでもWindow関数が使用できますが、MySQLは8.0からなので、注意が必要です。

## 合計の表示

合計の計算は[集計計算](/trdsql/06_calculation)で出しましたが、最後の結果のみを出力していました。
Window関数では、行毎に結果を表示できます。

例えば、以下のような点数のCSVについて結果を表示してみます。

```score.csv
id,class,name,score
1,A,bob,174
2,A,alice,248
3,A,carol,163
4,B,dave,289
5,B,eve,157
6,B,flank,272
```

Window関数は集約関数の関数に`OVER ()`句を付けることにより範囲や、順序を指定することにより計算をおこないます。
`OVER ()`句があることで、他の列とは独立して対象の行以外を計算できます。

`OVER()`句を空で指定すると全行が対象となります。

```sh
trdsql -ih -omd \
"SELECT id,name,score, SUM(CAST(score AS int)) OVER () FROM score.csv"
| id | name  | score | sum  |
|----|-------|-------|------|
|  1 | bob   |   174 | 1303 |
|  2 | alice |   248 | 1303 |
|  3 | carol |   163 | 1303 |
|  4 | dave  |   289 | 1303 |
|  5 | eve   |   157 | 1303 |
|  6 | flank |   272 | 1303 |
```

`SUM()`で合計が求められるので、`AVG()`で平均も求められます。

## 平均との差

Window関数を使用した平均と対象の行との計算が可能です。
差を表示させると以下のようになります。

```sh
trdsql -ih -omd \
"SELECT id,name,score," \
        "score - round(AVG(score) OVER()) AS 平均との差"\
 " FROM score.csv"
| id | name  | score | 平均との差 |
|----|-------|-------|------------|
|  1 | bob   |   174 |        -43 |
|  2 | alice |   248 |         31 |
|  3 | carol |   163 |        -54 |
|  4 | dave  |   289 |         72 |
|  5 | eve   |   157 |        -60 |
|  6 | flank |   272 |         55 |
```

round()は小数点以下を丸める関数です。

これまでのSQLでは、1行づつの処理か、グループ化しての処理どちらかだけだったのが、Window関数では行の範囲を決めて、その処理を各行ごとに求められます。

行の範囲の指定は「PARTITION BY」の後に「GROUP BY」で指定するような列が指定できます。

全体ではなく、class毎に変更して出力してみます。

```sh
trdsql -ih -omd \
"SELECT id,class,name,score," \
 "score - ROUND(avg(score) OVER(PARTITION BY class)) "\
  "AS 平均との差" \
  "FROM score.csv"
| id | class | name  | score | 平均との差 |
|----|-------|-------|-------|------------|
|  1 | A     | bob   |   174 |        -21 |
|  2 | A     | alice |   248 |         53 |
|  3 | A     | carol |   163 |        -32 |
|  4 | B     | dave  |   289 |         50 |
|  5 | B     | eve   |   157 |        -82 |
|  6 | B     | flank |   272 |         33 |
```

class Aでは平均195との差を表示していて、class Bでは平均239との差を表示しています。

ここに先程の全体の平均との差を表示するのも並べるだけでできます。

```sh
trdsql -ih -omd \
"SELECT id,class,name,score," \
  "score - ROUND(avg(score) OVER(PARTITION BY class)) "\
  "AS class平均との差, " \
  "score - round(AVG(score) OVER()) AS 全体平均との差"\
  "FROM score.csv"
```

## 行番号の付与

Window関数を使うと行番号を付けることもできます。

fruits.ltsv

```ltsv
name:grape	num:10
name:apple	num:3
name:banana	num:5
name:orange	num:2
```

上記のLTSVファイルに、ROW_NUMBER() は集約関数にはないWindow関数特有の関数です。OVER()により範囲全体、順番の指定なしで使用すると以下のようになります。

```sh
trdsql "SELECT ROW_NUMBER() OVER(), name,num " \
       "FROM fruits.ltsv"
1,grape,10
2,apple,3
3,banana,5
4,orange,2
```

順番を指定するには「ORDER BY」を指定します。

```sh
trdsql "SELECT ROW_NUMBER() OVER(ORDER BY CAST(num AS int))," \
       " name,num FROM fruits.ltsv"
1,orange,2
2,apple,3
3,banana,5
4,grape,10
```

Window関数には、まだまだ多くの種類の関数があります。各データベースのマニュアルを参照して下さい。
