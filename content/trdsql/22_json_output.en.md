+++
author = "Noboru Saito"
title = "trdsql JSON output"
date = "2024-04-18"
description = "This article explains how to output JSON with trdsql."
weight = 22
tags = [
    "trdsql",
    "sql",
    "json",
]
categories = [
    "trdsql",
]
+++

Flat data formats such as CSV and LTSV can be output as JSON by using the -ojson option, but JSON is a format that can express deeper hierarchies.

Such JSON can be created by using JSON functions of the database.

Let's output JSON from the following CSV using JSON functions.

```CSV
id,name
1,Orange
2,Melon
3,Apple
```

When outputting with JSON functions, you can output it as a valid JSON by using -oraw, which does not escape characters such as `"`.

## SQLite3、MySQL

SQLite3 and MySQL can generate JSON using json_array() and json_object().
Here, we use json_object to output in the "name: value" format. Specify two pairs of arguments.

```console
trdsql -ih -oraw "SELECT json_object('id',id,'name',name) FROM header.csv"
```

```json
{"id":"1","name":"Orange"}
{"id":"2","name":"Melon"}
{"id":"3","name":"Apple"}
```

To make the hierarchy deeper, use json_object() internally.
SQLite3 does not have a json_pretty() function, so it is made easier to read with jq.

```console
trdsql -ih -oraw "SELECT json_object('fruits', json_object('id',id,'name',name)) FROM header.csv"|jq .
```

```json
{
  "fruits": {
    "id": "1",
    "name": "Orange"
  }
}
{
  "fruits": {
    "id": "2",
    "name": "Melon"
  }
}
{
  "fruits": {
    "id": "3",
    "name": "Apple"
  }
}
```

The above result is output as one JSON per line. To further group them into an array and output them as one JSON, use json_group_array() in SQLite3 and json_arrayagg() in MySQL.

## SQLite3

```console
trdsql -ih -oraw "SELECT json_group_array(json_object('fruits', json_object('id',id,'name',name))) FROM header.csv"|jq .
```

```json
 [
  {
    "fruits": {
      "id": "1",
      "name": "Orange"
    }
  },
  {
    "fruits": {
      "id": "2",
      "name": "Melon"
    }
  },
  {
    "fruits": {
      "id": "3",
      "name": "Apple"
    }
  }
]
```

## MySQL

```console
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih -oraw "SELECT json_pretty(json_arrayagg(json_object('fruits', json_object('id',id,'name',name)))) "\
  "FROM header.csv"
```

```json
[
  {
    "fruits": {
      "id": "1",
      "name": "Orange"
    }
  },
  {
    "fruits": {
      "id": "2",
      "name": "Melon"
    }
  },
  {
    "fruits": {
      "id": "3",
      "name": "Apple"
    }
  }
]
```

MySQL can display the same indentation by processing the result with json_pretty().

## PostgreSQL

In PostgreSQL, there are two types of json and jsonb for handling JSON, and there are functions for each.

When JSON is stored in a column, jsonb is checked for validity as JSON in binary format, etc. There are differences. Also, there may be functions that exist only in one of them, so consider using them.

This time, we use jsonb functions because jsonb_pretty() is only available for jsonb. You can generate JSON by using jsonb_build_object(), which works almost the same as json_object() in SQLite3 and MySQL.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oraw "SELECT jsonb_pretty(jsonb_build_object('fruits', jsonb_build_object('id',id,'name',name))) "\
  "FROM header.csv"
```

```json
{
    "fruits": {
        "id": "1",
        "name": "Orange"
    }
}
{
    "fruits": {
        "id": "2",
        "name": "Melon"
    }
}
{
    "fruits": {
        "id": "3",
        "name": "Apple"
    }
}
```

To further group them into an array and output them as one JSON, use json_agg() in SQLite3 and jsonb_agg() in PostgreSQL.

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oraw "SELECT jsonb_pretty(jsonb_agg(jsonb_build_object('fruits', jsonb_build_object('id',id,'name',name))))  FROM header.csv"
```

```json
[
    {
        "fruits": {
            "id": "1",
            "name": "Orange"
        }
    },
    {
        "fruits": {
            "id": "2",
            "name": "Melon"
        }
    },
    {
        "fruits": {
            "id": "3",
            "name": "Apple"
        }
    }
]
```
