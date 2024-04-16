+++
author = "Noboru Saito"
title = "trdsql Date and Time Processing"
date = "2024-04-16"
description = "How to process dates and times with trdsql."
weight = 20
tags = [
    "trdsql",
    "sql",
]
categories = [
    "trdsql",
]
+++

If you want to process dates and times, it is better to interpret them as dates and times first.
In that case, it is easier to handle them if you first interpret them as dates and times.

## SQLite3 Date and Time Processing

By default, [SQLite3's date and time processing](https://www.sqlite.org/lang_datefunc.html) can interpret the following formats as dates and times.
If you want to process it with the SQLite3 engine, it is a good idea to use this format.

1. YYYY-MM-DD
2. YYYY-MM-DD HH:MM
3. YYYY-MM-DD HH:MM:SS
4. YYYY-MM-DD HH:MM:SS.SSS
5. YYYY-MM-DDTHH:MM
6. YYYY-MM-DDTHH:MM:SS
7. YYYY-MM-DDTHH:MM:SS.SSS
8. HH:MM
9. HH:MM:SS
10. HH:MM:SS.SSS
11. now
12. DDDDDDDDDD

If you want to process the time in a log file like the following,

```ltsv
time:2015-09-06T05:58:05+09:00	method:POST	...
time:2015-09-06T05:58:41+09:00	method:POST	...
time:2015-09-06T06:00:42+09:00	method:GET	...
```

If you want to process the time in a log file like the following,

```console
trdsql -iltsv "SELECT strftime('%Y-%m-%d %H:%M:%S', datetime(time)) FROM log.ltsv"
```

```
2015-09-05 20:58:05
2015-09-05 20:58:41
2015-09-05 21:00:42
```

If the format is different from the above, you need to rewrite the string first in SQLite3.

## PostgreSQL Date and Time Processing

[PostgreSQL](https://www.postgresql.org/docs/current/functions-formatting.html) can process a wider range of formats for date and time processing.

```console

In many cases, simply casting to date or timestamp will interpret many well-known formats.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" "SELECT to_char(CAST(time AS timestamp),'%Y-%m-%d %H:%M:%S') FROM log.ltsv"
```

```
2015-09-05 20:58:05
2015-09-05 20:58:41
2015-09-05 21:00:42
```

Since it is converted to a date and time type, to_char() is used to convert it to the desired format. Please refer to the [manual](https://www.postgresql.org/docs/current/functions-formatting.html) for the specified method.

If you have a more unique format, you can interpret it with your own defined format using to_date or to_timestamp.

For example, if you output the format above, executing to_timestamp with the same format specification as to_char will treat it as a timestamp.

```console
trdsql -ih -oh  -driver postgres -dsn "dbname=trdsql_test" "SELECT to_timestamp(time,'%Y-%m-%d %H:%M:%S') FROM d.csv"
```

```
2015-09-05T20:58:05+09:00
2015-09-05T20:58:41+09:00
2015-09-05T21:00:42+09:00
```

## MySQL Date and Time Processing

[MySQL](https://dev.mysql.com/doc/refman/5.6/en/date-and-time-functions.html#function_timestamp) can also convert many formats using date() and timestamp().

```console
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -oat "SELECT date(time),timestamp(time) FROM log.ltsv"
```

```
+------------+----------------------------+
| date(time) |      timestamp(time)       |
+------------+----------------------------+
| 2015-09-06 | 2015-09-06 05:58:05.000000 |
| 2015-09-06 | 2015-09-06 05:58:41.000000 |
| 2015-09-06 | 2015-09-06 06:00:42.000000 |
+------------+----------------------------+
```

If you want to interpret your own format, use STR_TO_DATE().
To interpret the above year, month, day, hour, minute, and second, do the following.

```console
trdsql -ih -driver mysql -dsn "noborus:noborus@/trdsql_test" "SELECT STR_TO_DATE(time,'%Y-%m-%d %H:%M:%S') FROM d.csv"
```

```console
2015-09-05 20:58:05
2015-09-05 20:58:41
2015-09-05 21:00:42
```

The DATE_FORMAT() function can be used to display the format from the date and time. Let's try displaying the date with "/".

```console
trdsql -ih -driver mysql -dsn "noborus:noborus@/trdsql_test" "SELECT DATE_FORMAT(STR_TO_DATE(time,'%Y-%m-%d %H:%M:%S'),'%Y/%m/%d') FROM d.csv"
```

```console
2015/09/05
2015/09/05
2015/09/05
```

Date and time processing has different formats for each database, so please refer to the manual for each database.
