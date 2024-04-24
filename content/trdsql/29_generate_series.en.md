+++
author = "Noboru Saito"
title = "trdsql generate_series"
date = "2024-04-18"
description = "trdsql generate_series"
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

PostgreSQL has a convenient function called `generate_series()`.
This function works similarly to the Unix `seq` command. `generate_series()` also has an extension that can be used with timestamp types.

The usage is simple. Specify the "start value", "end value", and "increment value (optional)" and execute.

```console
$ trdsql -driver postgres -dsn "dbname=trdsql_test" "SELECT * FROM generate_series(1,10)"
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

`generate_series()` is a function that returns a table and can be used instead of a table.
(en: You can also write `SELECT generate_series(1,10)`).

Of course, trdsql can easily incorporate input from external sources, so you can also use the `seq` command as a substitute.

```console
$ seq 1 10|trdsql "SELECT * FROM -"
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

The order of arguments for the `seq` command is "start value", "increment value (optional)", "end value".

## Timestamp

`generate_series()` can handle timestamps, so it's a bit tricky to output the 2020 calendar in Japanese, but it looks like this.

```console
$ trdsql -driver postgres -dsn "dbname=trdsql_test" \
"SET LC_TIME='C'; " \
"SELECT day " \
"  FROM generate_series('2024-01-1'::timestamp,'2024-12-31','1 day') as day"
2024-01-01T00:00:00Z
2024-01-02T00:00:00Z
2024-01-03T00:00:00Z
2024-01-04T00:00:00Z
....
2024-12-29T00:00:00Z
2024-12-30T00:00:00Z
2024-12-31T00:00:00Z
```

## Increase the amount of data

There are times when you want a certain amount of dummy data. If you want completely distributed random data, you need to use a dedicated tool.
However, if you just want to increase the number of existing data, you can create it by CROSS JOINing `generate_series()` or the `seq` command.

```console
$ trdsql  -driver postgres -dsn "dbname=trdsql_test" -ih -oh \
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

Using the seq command, it looks like this.

(When processing a file with a header with -ih, the first line of `seq` is interpreted as a header, so starting from 0 will result in an extra line being output).

```console
$ seq 0 3|trdsql -driver sqlite3 -ih -oh \
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
