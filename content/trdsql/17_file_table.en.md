+++
author = "Noboru Saito"
title = "Joining Files and Tables with trdsql"
date = "2024-04-15"
description = "By connecting to a database where a table already exists, you can also join files and tables."
weight = 17
tags = [
    "trdsql",
    "SQL",
    "JOIN",
]
categories = [
    "trdsql",
]
+++

By connecting to a database where a table already exists, you can also join files and tables.

For example, if there is a table called fruits in the database, you can join it with the previous abc.csv.

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" \
     "SELECT a.c1, a.c2, f.name FROM abc.csv AS a "\
  "LEFT JOIN fruits AS f ON (CAST(a.c1 AS int) = f.id)"
1,AAA,Orange
2,BBB,Melon
3,CCC,Apple
```
For example, if there is a users table on the database and the list you want to extract is a CSV file, you would consider listing it with WHERE user IN (...), but with trdsql, you can directly join and extract it.

list.csv

```CSV
tarou
jirou
noborus
```

users table

```CSV
id,name
1,taizou
2,momo
3,tarou
```

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" \
     "SELECT u.id, u.name FROM users AS u "\
 "INNER JOIN list.csv AS l ON (u.name = l.c1)"
3,tarou
```

Conversely, it is also possible to add information from a database table to a CSV file.

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" \
     "SELECT u.id, u.name FROM list.csv AS l "\
  "LEFT JOIN users AS u ON (l.c1 = u.name)" \
       "ORDER BY u.id"
3,tarou
52,jirou
98,noborus
```
