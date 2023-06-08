+++
author = "Noboru Saito"
title = "trdsql generate_series"
date = "2019-12-29"
description = ""
weight = 29
tags = [
    "trdsql",
    "generate_series",
    "PostgreSQL",
]
categories = [
    "trdsql",
]
+++

## generate_series

PostgreSQLには`generate_series()`という便利な関数があります。
これはUnixの`seq`コマンドと同じような働きをする関数です。また`generate_series()`は、タイムスタンプ型にも使用できる拡張があります。

使い方は簡単で「開始値」、「終了値」、「刻み値（省略可能）」を指定して実行します。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" "SELECT * FROM generate_series(1,10)"
1
2
3
4
5
6
7
8
9
10
```

`generate_series()`はテーブルを返す関数で、テーブルの代わりに使用できます。
（`SELECT generate_series(1,10)`と書くこともできます）。

もちろん、trdsqlでは、外部からの入力を簡単に取り入れられるので、`seq`コマンドで代用することもできます。

```sh
seq 1 10|trdsql "SELECT * FROM -"
1
2
3
4
5
6
7
8
9
10
```

`seq`コマンドは、引数の順序が「開始値」、「刻み値（省略可能）」「終了値」になります。
2つの値を渡すときには同じですが、刻み値を指定する場合は、順序が異なるので注意が必要です。

## タイムスタンプ

`generate_series()`では、タイムスタンプを扱えるので、2020年のカレンダーを日本語で出すと少々トリッキーですが、以下のようになります。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" \
"SET LC_TIME='ja_JP.UTF-8'; " \
"SELECT to_char(day,'YYYY年TMMonthDD日 (TMDay)') " \
"  FROM generate_series('2020-01-1'::timestamp,'2020-12-31','1 day') as day"
2020年1月01日 (水曜日)
2020年1月02日 (木曜日)
2020年1月03日 (金曜日)
2020年1月04日 (土曜日)
....
2020年12月29日 (火曜日)
2020年12月30日 (水曜日)
2020年12月31日 (木曜日)
```

## データを数倍にする

ある程度まとまった数のダミーデータが欲しい場合があります。完全に分散したランダムなデータが欲しい場合は専用のツールを使う必要がありますが、
単純に既にあるデータの件数を増やしたいだけであれば、`generate_series()`や `seq`コマンドとCROSS JOINすることで作成できます。

```sh
 trdsql  -driver postgres -dsn "dbname=trdsql_test" -ih -oh \
 "SELECT ROW_NUMBER() OVER() AS id, name " \
 "  FROM header.csv CROSS JOIN generate_series(1,3) AS s"
id,name
1,Orange
2,Melon
3,Apple
4,Orange
5,Melon
6,Apple
7,Orange
8,Melon
9,Apple
```

seqコマンドを利用すると以下になります。

（-ih でヘッダーがあるファイルを処理しているときには、`seq`の1行目もヘッダーと解釈されるので、
1行余分に出力されるように0から開始すると同様の動きになります）。

```sh
seq 0 3|trdsql -driver sqlite3 -ih -oh \
"SELECT ROW_NUMBER() OVER() AS id, name " \
 " FROM - CROSS JOIN header.csv"
id,name
1,Orange
2,Melon
3,Apple
4,Orange
5,Melon
6,Apple
7,Orange
8,Melon
9,Apple
```
