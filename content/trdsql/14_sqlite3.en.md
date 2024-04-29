+++
author = "Noboru Saito"
title = "trdsql SQLite3 Engine"
date = "2024-04-09"
description = "How to connect to SQLite3"
weight = 14
tags = [
    "trdsql",
    "sqlite3",
]
categories = [
    "trdsql",
]
+++

SQLite3 engine connection method is described.

## connect to SQLite3

By default, trdsql connects to an SQLite3 in-memory database, but you can connect to other databases as well.

Specify **sqlite3** for the -driver option and specify the connection information to the server in -dsn.

If you specify the SQLite3 data file name in dsn, the file will be used as the database.
(You can also specify file: or file://, etc., for the file name).

Even if the file does not exist in advance, it will not cause an error.

```console
trdsql -driver sqlite3 -dsn "test.sqlite" -oat "SELECT * FROM test"
```

```at
+----+--------+-------+
| id |  name  | price |
+----+--------+-------+
|  1 | Orange |    50 |
|  2 | Melon  |   500 |
|  3 | Apple  |   100 |
+----+--------+-------+
```

You can also pass options by following "?".
When passing options to a memory database, please continue the options after ":memory:?".

For example, to change to distinguish between uppercase and lowercase with LIKE, do the following.

By default, LIKE is not case sensitive.

```console
trdsql -driver sqlite3 -dsn ":memory:" -ih "SELECT * FROM header.csv WHERE name LIKE '%a%'"
```

```csv
1,Orange
3,Apple
```

If you set _cslike=true, it is case sensitive.

```console
trdsql -driver sqlite3 -dsn ":memory:?_cslike=true" -ih "SELECT * FROM header.csv WHERE name LIKE '%a%'"
```

```csv
1,Orange
```

If you want to specify the mode for the database file, specify it with `file:filename?mode=`.
`mode=rwc`では書き込みが成功します。
en: Writing is successful with `mode=rwc`.

```console
trdsql -ih -driver sqlite3 -dsn "file:trdsql_test.db?mode=rwc" "CREATE TABLE users AS SELECT CAST(id as int), CAST(name AS varchar(20)) FROM user.csv "
```

Writing is prohibited and an error occurs with `mode=ro`.

```console
$ trdsql -ih -driver sqlite3 -dsn "file:trdsql_testro.db?mode=ro" "CREATE TABLE users AS SELECT CAST(id as int), CAST(name AS varchar(20)) FROM user.csv "
2020/01/08 14:02:54 ERROR(BEGIN):unable to open database file: no such file or directory
```

For details of DSN options, please refer to the [go-sqlite3](https://github.com/mattn/go-sqlite3#connection-string).
