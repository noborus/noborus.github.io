+++
author = "Noboru Saito"
title = "trdsql DB import"
date = "2024-04-11"
description = "trdsql allows you to import data into a database."
weight = 15
tags = [
    "trdsql",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "SQLite3",
]
categories = [
    "trdsql",
]
+++

trdsql does not have an option to import data into a database.
However, since it can execute SQL other than SELECT, it is possible to import data by SQL.

The following example imports data into a memory database, which will disappear when it is closed, so it is recommended to connect to a non-memory database.

## CREATE TABLE AS

To create a table and import data, use `CREATE TABLE AS`.

### PostgreSQL CREATE TABLE AS

First, let's try importing data into PostgreSQL.
If you add `CREATE TABLE table_name AS` to the content you have been executing with SELECT so far, a table will be created and the data will be imported.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
 "CREATE TABLE test AS SELECT * FROM header.csv"
```

If successful, it will exit without displaying anything. If it fails, an error will be displayed.

Since the result of SELECT is imported, you can change the column name, specify the column type, and specify the data to be imported on the SELECT side.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
 "CREATE TABLE fruits AS SELECT id::int AS num, name::VARCHAR(20) FROM header.csv"
```

```console
$ trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oh\
 "SELECT * FROM fruits"
 num,name
1,Orange
2,Melon
3,Apple
```

If you want to create a table first and then insert data later, add `WITH NO DATA`.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
"CREATE TABLE test AS SELECT id::int, name FROM header.csv WITH NO DATA"
```

### MySQL CREATE TABLE AS

Just like PostgreSQL, if you add `CREATE TABLE table_name AS` in front of it, the data will be imported.

There are limitations to the CAST of the result of SELECT, so it may not be sufficient.
Since the syntax CREATE TABLE table_name (column_name type_name) can be used, it is better to specify the type name according to the result of SELECT.

```console
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih \
"CREATE TABLE fruits (num int, name varchar(20)) AS SELECT id AS num,name FROM header.csv"
```

In MySQL, if you only want to create a table, set the number of SELECTs to 0 with `LIMIT 0` or `WHERE 1=2`.

```console
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih \
"CREATE TABLE fruits (num int, name varchar(20)) AS SELECT id AS num,name FROM header.csv WHERE 1=2"
```

### SQLite3 CREATE TABLE AS

In SQLite3, if you add `CREATE TABLE table_name AS` in front of it, the data will be imported.

In SQLite3, the actual data type will be one of the basic types (INTEGER, REAL, TEXT, BLOB), so CAST is only necessary when it is one of these types.

Otherwise, it is better to add it as a constraint later.

```console
trdsql -driver sqlite3 -dsn "trdsql_test" -ih \
"CREATE TABLE fruits AS SELECT CAST(id AS int) AS num, name FROM header.csv"
```

If you only want to create a table in SQLite3, set the number of SELECTs to 0 with `LIMIT 0` or `WHERE 1=2`.

```console

```console
trdsql -driver sqlite3 -dsn "trdsql_test" -ih \
"CREATE TABLE fruits AS SELECT CAST(id AS int) AS num,name FROM header.csv WHERE 1=2"
```

SQLite3 does not allow you to add a primary key later.

## INSERT

If you already have a table and want to import the contents of a file, add `INSERT INTO table_name` before SELECT and execute it.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv"
```

If you have not added a primary key, it will be inserted as it is if you execute it repeatedly.

 If you have not added a primary key, it will be inserted as it is if you execute it repeatedly.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
 "ALTER TABLE fruits  ADD CONSTRAINT table_key PRIMARY KEY(id);"
```

If you want to insert only the difference, you can use the INSERT ON CONFLICT syntax.

If there is already a row with the same id, do nothing.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv ON CONFLICT DO NOTHING"
```

If there is already a row with the same id, update it.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv "\
"ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name"
```

MySQL allows you to avoid duplicate errors with `INSERT IGNORE`.

```console
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih \
"INSERT IGNORE INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv"
```

To update a row with the same id, use `ON DUPLICATE KEY UPDATE` as follows.

```console
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih \
"INSERT INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv AS h "\
"ON DUPLICATE KEY UPDATE name = h.name"
```

Or you can use the REPLACE INTO statement.

```console
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih \
"REPLACE INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv AS h "
```

If a table with a primary key has already been created, you can also use the REPLACE INTO statement in SQLite3.

```console
trdsql -driver sqlite3 -dsn "trdsql_test.db" -ih \
"REPLACE INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv AS h "
```
