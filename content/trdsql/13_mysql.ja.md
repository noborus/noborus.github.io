+++
author = "Noboru Saito"
title = "trdsql MySQLエンジンの使用"
date = "2019-12-13"
description = "trdsqlでMySQLを使用する方法を説明します。"
weight = 13
tags = [
    "trdsql",
    "mysql",
]
categories = [
    "trdsql",
]
+++

前回はPostgreSQL接続の話でしたが、今度はMySQLに接続して使用する方法を説明します。

## MySQLに接続

MySQLに接続するには動作しているMySQLサーバーが必要です。接続できテーブルが作成できる権限があるデータベースを作成しておきます。

オプションの -driver に **mysql** を指定し、-dsn にサーバーへの接続情報を指定します。

MySQLのdsnは以下のような形式です。

```dsn
ユーザー名:パスワード@プロトコル(ホスト名:ポート番号)/データベース名?param=value
```

param=valueのパラメーターは多くの種類がありますので、[go-sql-driver](https://github.com/go-sql-driver/mysql#dsn-data-source-name)を参照して下さい。

### UNIXドメインソケット

ローカルホストのデフォルトのUNIXドメインソケットを使用する場合は、ユーザー名、パスワード、データベース名を指定すれば接続できます。

```console
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" "SELECT 1"
```

UNIXドメインソケットのパスを指定するには、プロトコルにunixを指定して、`unix(パス)`で指定します。

```console
trdsql -driver mysql -dsn "noborus:noborus@unix(/var/run/mysqld/mysqld.sock)/trdsql_test" "SELECT 1"
```

### TCP接続

TCPはプロトコルにtcpを指定して、`tcp(ホスト名:ポート番号)`を指定します。

```console
trdsql -driver mysql -dsn "noborus:noborus@tcp(localhost:3306)/trdsql_test" "SELECT 1"
```

### 実テーブルの出力

接続できれば、これまでと同じようにSQLが実行できますが、実際に実行されるのはMySQL上なので、MySQLが実行できるSQLを書く必要があります。

前回のPostgreSQLと同様にMySQLのテーブルに対してSQLを実行し、オプションで指定したフォーマットで出力することが出来ます。

```console
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -oat -ih "SELECT * FROM actor LIMIT 10"
```
```
+----------+------------+--------------+---------------------+
| actor_id | first_name |  last_name   |     last_update     |
+----------+------------+--------------+---------------------+
|        1 | PENELOPE   | GUINESS      | 2006-02-15 04:34:33 |
|        2 | NICK       | WAHLBERG     | 2006-02-15 04:34:33 |
|        3 | ED         | CHASE        | 2006-02-15 04:34:33 |
|        4 | JENNIFER   | DAVIS        | 2006-02-15 04:34:33 |
|        5 | JOHNNY     | LOLLOBRIGIDA | 2006-02-15 04:34:33 |
|        6 | BETTE      | NICHOLSON    | 2006-02-15 04:34:33 |
|        7 | GRACE      | MOSTEL       | 2006-02-15 04:34:33 |
|        8 | MATTHEW    | JOHANSSON    | 2006-02-15 04:34:33 |
|        9 | JOE        | SWANK        | 2006-02-15 04:34:33 |
|       10 | CHRISTIAN  | GABLE        | 2006-02-15 04:34:33 |
+----------+------------+--------------+---------------------+
```
