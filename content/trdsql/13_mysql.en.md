+++
author = "Noboru Saito"
title = "trdsql MySQL Engine"
date = "2024-04-09"
description = "This article explains how to use MySQL with trdsql."
weight = 13
tags = [
    "trdsql",
    "mysql",
]
categories = [
    "trdsql",
]
+++

This article explains how to use MySQL with trdsql.

## Connect to MySQL

MySQLに接続するには動作しているMySQLサーバーが必要です。接続できテーブルが作成できる権限があるデータベースを作成しておきます。
en: Unlike SQLite3, PostgreSQL requires a running PostgreSQL server. Create a database to which you have permission to connect and create tables.

オプションの -driver に **mysql** を指定し、-dsn にサーバーへの接続情報を指定します。
en: Specify **mysql** for the -driver option and the connection information to the server for -dsn.

MySQLのdsnは以下のような形式です。
en: The MySQL dsn is in the following format.

```dsn
en: user:password@protocol(host:port)/dbname?param=value
```

param=valueのパラメーターは多くの種類がありますので、[go-sql-driver](https://github.com/go-sql-driver/mysql#dsn-data-source-name)を参照して下さい。

en: There are many types of param=value parameters, so please refer to [go-sql-driver](https://github.com/go-sql-driver/mysql#dsn-data-source-name).

### UNIX domain socket

If you want to use the default UNIX domain socket on the local host, you can connect by specifying the user name, password, and database name.

```console
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" "SELECT 1"
```

To specify the path of the UNIX domain socket, specify unix for the protocol and specify `unix(path)`.

```console
trdsql -driver mysql -dsn "noborus:noborus@unix(/var/run/mysqld/mysqld.sock)/trdsql_test" "SELECT 1"
```

### TCP socket

For TCP, specify tcp for the protocol and specify `tcp(hostname:port number)`.

```console
trdsql -driver mysql -dsn "noborus:noborus@tcp(localhost:3306)/trdsql_test" "SELECT 1"
```

### Output of actual table

If you can connect, you can execute SQL as before, but since it is actually executed on MySQL, you need to write SQL that MySQL can execute.

As with the previous PostgreSQL, you can execute SQL on MySQL tables and output them in the format specified by the option.

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
