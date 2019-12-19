+++
author = "Noboru Saito"
title = "trdsql window関数"
date = "2019-12-19"
description = ""
tags = [
    "trdsql",
    "sql",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

これまで[グループ集計](../07_group)による集計を紹介していますが、グループ集計は元の行とはまったく別にグループ毎の行を出力していました。
つまり、元のファイルとは別に集計の結果を出力していた訳です。

そうではなくて、元のファイルの情報にプラスして集計結果を出して欲しい場合があります。
例えば、点数の列では、点数の平均との差を出力したり、柔軟な計算が出来るようになります。これまでの方法では、一旦集計してからJOINするしかありませんでしたが、SQLのWindow関数を使うとそういった集計も出すことが出来ます。

古いバージョンではSQLite3では、Window関数を使用できませんでしたが、現在のtrdsqlに含まれているSQLite3では、Window関数を使用できます。

PostgreSQLやMySQLでもWindow関数が使用できますが、MySQLは8.0からなので、注意が必要です。

## 平均との差

例えば、以下のような点数のCSVについて

```score.csv
id,class,name,score
1,A,bob,174
2,A,alice,248
3,A,carol,163
4,B,dave,289
5,B,eve,157
6,B,flank,272
```

平均はavg(score)で求められますが、集約関数だと1行のみの出力になりまが、Window関数を使用して平均との差を表示させると以下のようになります。

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

集約関数と違うのは、 「AVG(score) OVER()」のOVER()の部分で、範囲や順序を指定出来ます。今回は()で全体を範囲としています。
これにより指定された範囲（今回は全体）の平均（今回は217)を求めて新しい列として使用できます。それをさらに scoreから引くことで平均との差を表示しています。

これまでのSQLでは、1行づつの処理か、グループ化しての処理どちらかだけだったのが、Window関数では行の範囲を決めて、その処理を各行ごとに求めることができます。

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
