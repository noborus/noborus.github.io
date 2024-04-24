+++
author = "Noboru Saito"
title = "trdsql PostgreSQL Engine"
date = "2024-04-09"
description = "trdsql uses the embedded SQLite3 to execute SQL, but you can change the database processing to another database."
weight = 12
tags = [
    "trdsql",
    "postgresql",
]
categories = [
    "trdsql",
]
+++

trdsql uses the embedded SQLite3 to execute SQL, but you can change the database processing to another database.

Here, we will explain how to use PostgreSQL with trdsql.

## Connect to PostgreSQL

Unlike SQLite3, PostgreSQL requires a running PostgreSQL server. Create a database to which you have permission to connect and create tables.

Specify **postgres** for the -driver option and the connection information to the server for -dsn.

The following items can be specified in dsn. They can be omitted if the default values are used.

|             Item          | Description |
|:---------------------------|:-----|
| dbname                     | Database Name(default: login user name) |
| fallback_application_name  | Application name (default: none) |
| connect_timeout            | Maximum wait time for connection |
| sslcert                    | Location of the certificate file |
| sslkey                     | Location of the private key file |
| sslrootcert                | Location of the root certificate file |

Specify the item=value separated by spaces.

### DSN specification

For example, to connect to the local host with port 5433 and the database name trdsql_test, do the following.

```console
trdsql -driver postgres -dsn "host=localhost port=5433 dbname=trdsql_test" "SELECT 1"
```

### UNIX domain socket

UNIX domain sockets can also be connected.

When PostgreSQL is installed with a package, a UNIX domain socket file is created in a location like the following.

```file
/var/run/postgresql/.s.PGSQL.5432
```

If there is a file like this, you can connect as follows.

```console
trdsql -driver postgres -dsn "host=/var/run/postgresql/ port=5432 dbname=trdsql_test" "SELECT VERSION()"
```

If you installed from source, the default is to create a Unix domain socket in /tmp/.

```file
/tmp/.s.PGSQL.5120
```

If you have a file like this, you can connect as follows.

```console
trdsql -driver postgres -dsn "host=/tmp/ port=5120 dbname=postgres" "SELECT VERSION()"
```

### The difference from other drivers

If you can connect, you can execute SQL as before, but since it is actually executed on PostgreSQL, you need to write SQL that PostgreSQL can execute.

First, note that the character "\`" used for escaping column names becomes `"`.

When specifying the PostgreSQL driver and performing analysis with the -a option, the SQL examples are also changed.

```console
$ trdsql -driver postgres -dsn "host=localhost dbname=trdsql_test" -ih  -a sample.csv
The table name is sample.csv.
The file type is CSV.

Data types:
+-------------+------+
| column name | type |
+-------------+------+
| \"name\"    | text |
| price       | text |
+-------------+------+

Data samples:
+----------+-------+
| \"name\" | price |
+----------+-------+
| apple    |   100 |
+----------+-------+

Examples:
trdsql -driver postgres -dsn "host=localhost dbname=trdsql_test" -ih "SELECT \"name\", price FROM sample.csv"
trdsql -driver postgres -dsn "host=localhost dbname=trdsql_test" -ih "SELECT \"name\", price FROM sample.csv WHERE \"name\" = 'apple'"
trdsql -driver postgres -dsn "host=localhost dbname=trdsql_test" -ih "SELECT \"name\", count(\"name\") FROM sample.csv GROUP BY \"name\""
trdsql -driver postgres -dsn "host=localhost dbname=trdsql_test" -ih "SELECT \"name\", price FROM sample.csv ORDER BY \"name\" LIMIT 10"
```

Also, PostgreSQL has a narrow range of implicit CASTs, so you need to explicitly CAST.
(Instead, PostgreSQL allows you to use the CAST syntax :: type name).

Those who use PostgreSQL on a daily basis can write in familiar syntax, but the benefits of connecting to PostgreSQL are not limited to this.

### Output of actual tables

trdsql allows you to execute SQL on actual tables even if the target file does not exist. And since the output format specification is still valid, it can be used as a database client that can output to various formats.

For example, it is easy to output an actual table in MarkDown.

```console
trdsql -driver postgres -dsn "host=localhost dbname=noborus" -omd -ih "SELECT * FROM city LIMIT 10"
```

```md
| city_id |        city        | country_id |     last_update      |
|---------|--------------------|------------|----------------------|
|       1 | A Corua (La Corua) |         87 | 2006-02-15T09:45:25Z |
|       2 | Abha               |         82 | 2006-02-15T09:45:25Z |
|       3 | Abu Dhabi          |        101 | 2006-02-15T09:45:25Z |
|       4 | Acua               |         60 | 2006-02-15T09:45:25Z |
|       5 | Adana              |         97 | 2006-02-15T09:45:25Z |
|       6 | Addis Abeba        |         31 | 2006-02-15T09:45:25Z |
|       7 | Aden               |        107 | 2006-02-15T09:45:25Z |
|       8 | Adoni              |         44 | 2006-02-15T09:45:25Z |
|       9 | Ahmadnagar         |         44 | 2006-02-15T09:45:25Z |
|      10 | Akishima           |         50 | 2006-02-15T09:45:25Z |
```

In terms of operation, if there is a file with the same name, it will import that file (the original table will not be deleted) and execute it. If there is no file, SQL will be executed on the original table as it is.
