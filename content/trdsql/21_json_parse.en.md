+++
author = "Noboru Saito"
title = "trdsql JSON parsing"
date = "2024-04-18"
description = "trdsql JSON parsing"
weight = 21
tags = [
    "trdsql",
    "sql",
    "json",
]
categories = [
    "trdsql",
]
+++

trdsql is able to handle JSON input, but the examples we have shown so far have been based on flat JSON structures.
However, JSON structures with more than two levels are not treated as errors, but are handled as strings.

Let's say you have the following JSON:

sample.json

```json
[
  {
    "color": "white",
    "category": "value",
    "code": {
      "rgba": [0, 0, 0, 1],
      "hex": "#FFF"
    }
  },
  {
    "color": "red",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255, 0, 0, 1],
      "hex": "#FF0"
    }
  },
  {
    "color": "blue",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [0, 0, 255, 1],
      "hex": "#00F"
    }
  }
]
```

If you run trdsql as it is, it will look like this (we have added -oat to make it easier to read. If you output it as CSV, the strings containing `"` will be escaped and output).

```console
trdsql -oat "SELECT color,category,code FROM sample.json"
```

````ascii table
+-------+----------+-----------------------------------+
| color | category |               code                |
+-------+----------+-----------------------------------+
| white | value    | {"hex":"#FFF","rgba":[0,0,0,1]}   |
| red   | hue      | {"hex":"#FF0","rgba":[255,0,0,1]} |
| blue  | hue      | {"hex":"#00F","rgba":[0,0,255,1]} |
+-------+----------+-----------------------------------+
```

This `code` is treated as a string, but each database already has functions to handle JSON, so you can use database functions to modify it.

## SQLite3, MySQL

In SQLite3 and MySQL, you can use json_extract() to get the specified value with `$` as the root (since `$` has a special meaning on the command line, please escape it). To display only "hex" in code, do as follows.

```console
trdsql -ijson -oat "SELECT color,category,json_extract(code,'\$.hex') AS hex FROM sample.json"
```

```ascii table
+-------+----------+------+
| color | category | hex  |
+-------+----------+------+
| white | value    | #FFF |
| red   | hue      | #FF0 |
| blue  | hue      | #00F |
+-------+----------+------+
```

## PostgreSQL

In PostgreSQL, you can use json_extract_path_text to get it.
When retrieving it in PostgreSQL, cast it to json or jsonb and then use the function.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" "SELECT color,category,json_extract_path_text(code::json,'hex') AS hex FROM sample.json"
```

````ascii table
+-------+----------+------+
| color | category | hex  |
+-------+----------+------+
| white | value    | #FFF |
| red   | hue      | #FF0 |
| blue  | hue      | #00F |
+-------+----------+------+
```

Also, from PostgreSQL 12, you can get it with JSON_PATH specification using jsonb_path_query() (the returned value is JSON, not text).

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" "SELECT color,category,jsonb_path_query(code::jsonb,'\$.hex')::text AS hex FROM sample.json"
```

```at
+-------+----------+--------+
| color | category |  hex   |
+-------+----------+--------+
| white | value    | "#FFF" |
| red   | hue      | "#FF0" |
| blue  | hue      | "#00F" |
+-------+----------+--------+
```

## Summary

Database JSON functions have many more functions and can edit objects in JSON. However, trdsql treats JSON columns as strings when outputting JSON, so it is not well suited for output with -ojson.

In that case, it is better to make effective use of the JSON output on the database side to output as intended. 
