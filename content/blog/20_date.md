+++
author = "Noboru Saito"
title = "trdsql 日付・時刻処理"
date = "2019-12-20"
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

ファイル内に入っている日付、時刻をそのまま扱う場合は良いですが、変換等の処理をしたい場合があります。

その場合は、一旦日付や時刻と解釈させてから扱う方が扱いやすくなります。

## SQLite3の日付、時刻処理

デフォルトの[SQLite3の日付、時刻処理](https://www.sqlite.org/lang_datefunc.html)では、以下のフォーマットであれば、日付、時刻として解釈することができます。
もしSQLite3のエンジンで処理したい場合は、このフォーマットにしておくと良いでしょう。

1. YYYY-MM-DD
1. YYYY-MM-DD HH:MM
1. YYYY-MM-DD HH:MM:SS
1. YYYY-MM-DD HH:MM:SS.SSS
1. YYYY-MM-DDTHH:MM
1. YYYY-MM-DDTHH:MM:SS
1. YYYY-MM-DDTHH:MM:SS.SSS
1. HH:MM
1. HH:MM:SS
1. HH:MM:SS.SSS
1. now
1. DDDDDDDDDD

以下のようなログファイルのtimeを処理したい場合、

```ltsv
time:2015-09-06T05:58:05+09:00	method:POST	...
time:2015-09-06T05:58:41+09:00	method:POST	...
time:2015-09-06T06:00:42+09:00	method:GET	...
```

datetime(time)で日時として、認識させれば、strftime()で再フォーマットがしやすくなります。

```sh
trdsql -iltsv \
"SELECT strftime('%Y年%m月%d日%H時%M分%S秒',datetime(time)) FROM log.ltsv"
2015年09月05日20時58分05秒
2015年09月05日20時58分41秒
2015年09月05日21時00分42秒
```

上記以外のフォーマットの場合は、SQLite3では文字列をまず書き換える必要があります。

## PostgreSQLの日付、時刻処理

[PostgreSQL](https://www.postgresql.jp/document/11/html/functions-formatting.html)の日付、時刻処理は、より豊富なフォーマットを処理できます。

多くの場合は、dateやtimestampにCASTするだけで、多くの有名なフォーマットは解釈されます。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" \
"SELECT to_char(CAST(time AS timestamp),'YYYY年MM月dd日HH24時MI分ss秒') FROM log.ltsv"
2015年09月06日05時58分05秒
2015年09月06日05時58分41秒
2015年09月06日06時00分42秒
```

日付、時刻型に変換されるので、そこから表示するフォーマットに変換するにはto_char()を使用します。指定の仕方は[マニュアル](https://www.postgresql.jp/document/11/html/functions-formatting.html)を参照して下さい。

さらに独特なフォーマットの場合は、 to_dateやto_timestampにより自分で定義したフォーマットで解釈させることが出来ます。

例えば上記で出力したフォーマットの場合、to_charと同じフォーマット指定でto_timestampを実行すれば逆にタイムスタンプとして扱われます。

```sh
trdsql -ih -oh  -driver postgres -dsn "dbname=trdsql_test" \
"SELECT to_timestamp(\"日時\",'YYYY年MM月dd日HH24時MI分ss秒') FROM d.csv"
2015-09-05T20:58:05+09:00
2015-09-05T20:58:41+09:00
2015-09-05T21:00:42+09:00
```

## MySQLの日付、時刻処理

[MySQL](https://dev.mysql.com/doc/refman/5.6/ja/date-and-time-functions.html#function_timestamp)でも多くのフォーマットをdate()やtimestamp()により変換させることができます。

```sh
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -oat \
"SELECT date(time),timestamp(time) FROM log.ltsv"
+------------+----------------------------+
| date(time) |      timestamp(time)       |
+------------+----------------------------+
| 2015-09-06 | 2015-09-06 05:58:05.000000 |
| 2015-09-06 | 2015-09-06 05:58:41.000000 |
| 2015-09-06 | 2015-09-06 06:00:42.000000 |
+------------+----------------------------+
```

独自のフォーマットを解釈させる場合は、STR_TO_DATE()を使用します。
上記の年月日時分秒を解釈させるには次のようにします。

```sh
trdsql -ih -driver mysql -dsn "noborus:noborus@/trdsql_test" \
"SELECT STR_TO_DATE(\`日時\`,'%Y年%m月%d日%H時%i分%s秒') FROM d.csv"
2015-09-05 20:58:05
2015-09-05 20:58:41
2015-09-05 21:00:42
```

日時から表示するフォーマットには、DATE_FORMAT()が使用できます。「/」で日付を表示してみます。

```sh
trdsql -ih -driver mysql -dsn "noborus:noborus@/trdsql_test" \
"SELECT DATE_FORMAT(STR_TO_DATE(\`日時\`,'%Y年%m月%d日%H時%i分%s秒'),'%Y/%m/%d') FROM d.csv"
2015/09/05
2015/09/05
2015/09/05
```

日付、時刻処理はフォーマットがそれぞれ違うので、各データベースのマニュアルを参照して下さい。