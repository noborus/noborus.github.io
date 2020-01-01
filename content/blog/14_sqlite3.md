+++
author = "Noboru Saito"
title = "trdsql SQLite3エンジンの使用"
date = "2019-12-14"
description = ""
tags = [
    "trdsql",
    "sqlite3",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

SQLite3への接続方法を説明します。

## SQLite3に接続

そもそもtrdsqlのデフォルトはSQLite3のメモリデータベースに接続していますが、メモリデータベース以外にも接続できます。

オプションの -driver に **sqlite3** を指定し、-dsn にサーバーへの接続情報を指定します。

dsnはsqlite3のデータファイル名を指定すれば、そのファイルをデータベースとして使用します。
（ファイル名の指定の仕方はfile: や file:// 等も可能です）。

あらかじめファイルが無い場合もエラーにはなりません。

```sh
trdsql -driver sqlite3 -dsn "test.sqlite" -oat "SELECT * FROM test"
+----+--------+-------+
| id |  name  | price |
+----+--------+-------+
|  1 | Orange |    50 |
|  2 | Melon  |   500 |
|  3 | Apple  |   100 |
+----+--------+-------+
```

さらに「?」で続けて、オプションを渡すこともできます。
メモリデータベースでオプションを渡すときには 「:memory:?」の後にオプションを続けて下さい。

例えば、LIKEで大文字小文字を区別するように変更するには以下のようにします。

デフォルトではLIKEは大文字小文字が区別されない。

```sh
trdsql -driver sqlite3 -dsn ":memory:" -ih \
"SELECT * FROM header.csv WHERE name LIKE '%a%'"
1,Orange
3,Apple
```

_cslike=trueにすると大文字小文字が区別されます。

```sh
trdsql -driver sqlite3 -dsn ":memory:?_cslike=true" -ih \
"SELECT * FROM header.csv WHERE name LIKE '%a%'"
1,Orange
```

DSNのオプションの詳細は [go-sqlite3](https://github.com/mattn/go-sqlite3#dsn-examples)のページを参照して下さい。