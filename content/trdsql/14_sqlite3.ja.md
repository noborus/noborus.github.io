+++
author = "Noboru Saito"
title = "trdsql SQLite3エンジンの使用"
date = "2019-12-14"
description = "trdsql SQLite3エンジンの使用方法を説明します。"
weight = 14
tags = [
    "trdsql",
    "sqlite3",
]
categories = [
    "trdsql",
]
+++

SQLite3への接続方法を説明します。

## SQLite3に接続

そもそもtrdsqlのデフォルトはSQLite3のメモリデータベースに接続していますが、メモリデータベース以外にも接続できます。

オプションの -driver に **sqlite3** を指定し、-dsn にサーバーへの接続情報を指定します。

dsnはsqlite3のデータファイル名を指定すれば、そのファイルをデータベースとして使用します。
（ファイル名の指定の仕方はfile: や file:// 等も可能です）。

あらかじめファイルが無い場合もエラーにはなりません。

```console
trdsql -driver sqlite3 -dsn "test.sqlite" -oat "SELECT * FROM test"
```

```
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

```console
trdsql -driver sqlite3 -dsn ":memory:" -ih "SELECT * FROM header.csv WHERE name LIKE '%a%'"
```

```
1,Orange
3,Apple
```

_cslike=trueにすると大文字小文字が区別されます。

```console
trdsql -driver sqlite3 -dsn ":memory:?_cslike=true" -ih "SELECT * FROM header.csv WHERE name LIKE '%a%'"
```

```
1,Orange
```

データベースファイルに対してmodeを指定する場合は、`file:ファイル名?mode=`で指定します。

`mode=rwc`では書き込みが成功します。

```console
trdsql -ih -driver sqlite3 -dsn "file:trdsql_test.db?mode=rwc" "CREATE TABLE users AS SELECT CAST(id as int), CAST(name AS varchar(20)) FROM user.csv "
```

`mode=ro`では書き込みが禁止されエラーになります。

```console
trdsql -ih -driver sqlite3 -dsn "file:trdsql_testro.db?mode=ro" "CREATE TABLE users AS SELECT CAST(id as int), CAST(name AS varchar(20)) FROM user.csv "
```

```
2020/01/08 14:02:54 ERROR(BEGIN):unable to open database file: no such file or directory
```

DSNのオプションの詳細は [go-sqlite3](https://github.com/mattn/go-sqlite3#connection-string)のページを参照して下さい。
