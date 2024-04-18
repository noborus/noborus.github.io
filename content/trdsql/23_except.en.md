+++
author = "Noboru Saito"
title = "trdsql difference, comparison"
date = "2024-04-18"
description = "You may want to compare values in trdsql between CSVs, or CSVs and tables, etc."
weight = 23
tags = [
    "trdsql",
    "sql",
    "except",
]
categories = [
    "trdsql",
]
+++

Sometimes you want to compare values between CSVs, or CSVs and tables, etc.

If the CSV files have the same format and some parts are different, you can take a diff, but you can also use trdsql SQL to compare them if the formats are different.

## Output differences

To compare in SQL and get the difference, use `EXCEPT`. EXCEPT outputs the contents of table A minus the contents of table B, which is the remainder of table A.

It does not matter if there are more rows in table B, it will output rows that are in table A but not in table B.

Compare with the following CSV file: new.csv, with 3 updates and 4 additions

old.csv

```CSV
1,AAA
2,BBB
3,CCC
```

new.csv

```CSV
1,AAA
2,BBB
3,CCB
4,DDD
```

Simply comparing all columns will output rows 3 and 4, since rows 1 and 2 are the same, and the remaining rows will be deleted.

This is not the same as a diff comparison.

```console
trdsql "SELECT * FROM new.csv EXCEPT SELECT * FROM old.csv "
3,CCB
4,DDD
```

### Diff output for tables and files

If you connect to an existing database, you can also compare against tables.

For example, if you want to compare a table imported by [trdsql DB import] (/trdsql/15_import ) with an updated CSV, you can do the following.

The CSV file side is cast to match the type.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oh \
"SELECT id::int,name FROM fruits.csv " \
"EXCEPT " \
"SELECT id,name FROM fruits "
id,name
4,Grape
```

If the tables on the database side are updated and new, it would be better to do the opposite: table EXCEPT CSV file.

## Output common rows

If you want to output common rows as opposed to EXCEPT, use ``INTERSECT``.

```console
"SELECT id::int,name FROM fruits.csv " \
"INTERSECT " \
"SELECT id,name FROM fruits"
id,name
1,Orange
2,Melon
3,Apple
```
