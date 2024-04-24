+++
author = "Noboru Saito"
title = "Editing Columns with trdsql"
date = "2024-04-15"
description = "Perform column editing with trdsql."
weight = 18
tags = [
    "trdsql",
    "sql",
]
categories = [
    "trdsql",
]
+++

So far, we have rearranged the columns, but the content of the columns has remained the same.
Although SQL is not known for its ability to rewrite strings, it does have a decent set of features that can be used by using SQL functions.

## Concatenating Columns

By using '||', if you connect the column names, two or more columns will be concatenated into one column.

```console
trdsql -ih -oh \
"SELECT id,name||id AS name_id FROM header.csv"
id,name_id
1,Orange1
2,Melon2
3,Apple3
```

### PostgreSQL and MySQL

In PostgreSQL and MySQL, you can use concat(column name or string, column name or string, ...) when you want to concatenate multiple columns.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oh \
"SELECT concat(id,name,' items') FROM header.csv"
concat
1Orange items
2Melon items
3Apple items
```

If you want to concatenate with a connection character, you can use the `concat_ws` function. The `concat_ws` function is a function that concatenates columns with a connection character.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oh \
"SELECT concat_ws(' ',id,name,'items') FROM header.csv"
concat_ws
1 Orange items
2 Melon items
3 Apple items
```

### SQLite3

SQLite3 does not have a `concat` function like PostgreSQL and MySQL. However, you can concatenate columns using the '||' operator, as shown in the first example.

If you want to concatenate with a connection character, you can use the `printf` function. The `printf` function is a function that formats strings in the same way as the C language's `printf` function.

```console
trdsql -driver sqlite3 -ih -oh \
"SELECT printf('%s %s items',id,name) FROM header.csv"
printf
1 Orange items
2 Melon items
3 Apple items
```

## Substring

Use only a part of the column string. Use the substr(column name or string, start position, length of characters) function.

```console
$ trdsql -ih -oh \
"SELECT id,substr(name,1,2) AS short FROM header.csv"
id,short
1,Or
2,Me
3,Ap
```

## Replace Characters

For example, replace 'e' in the name column with 'x'.

```console
$ trdsql -ih -oh \
"SELECT id,replace(name,'e','x') AS name FROM header.csv"
id,name
1,Orangx
2,Mxlon
3,Applx
```

The number of characters before and after replacement does not have to be the same.

There are also functions for converting to uppercase and lowercase.

All to lowercase

```console
$ trdsql -ih -oh \
"SELECT id,lower(name) FROM header.csv"
id,lower(name)
1,orange
2,melon
3,apple
```

All to uppercase

```console
$ trdsql -ih -oh \
"SELECT id,upper(name) FROM header.csv"
id,upper(name)
1,ORANGE
2,MELON
3,APPLE
```

If you can get by with this level of rewriting, it's fine, but in scripting languages, it's common to use regular expressions for rewriting, so it looks inferior.
PostgreSQL and MySQL engines have a few more useful functions.

## regexp_replace

Use PostgreSQL's regexp_replace(column name or string, regular expression pattern, replacement string) to replace the second to fourth characters with x.

Patterns enclosed in () can be used as reference characters \1, \2, etc.

```console
$ trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oh \
"SELECT id,regexp_replace(name, '(.)...','\1xxx') FROM header.csv"
id,regexp_replace
1,Oxxxge
2,Mxxxn
3,Axxxe
```

MySQL seems to be able to use regexp_replace() from 8.0. However, the reference characters are $1, $2, etc. And if you use $1 in the command arguments, it will be interpreted by the shell, so you need to escape it with \.

```console
$ trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih -oh \
"SELECT id,regexp_replace(name, '(.)...','\$1xxx') FROM header.csv"
id,"regexp_replace(name, '(.)...','$1xxx')"
1,Oxxxge
2,Mxxxn
3,Axxxe
```
