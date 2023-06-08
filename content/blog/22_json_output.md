+++
author = "Noboru Saito"
title = "trdsql JSON出力"
date = "2019-12-22"
description = ""
tags = [
    "trdsql",
    "sql",
    "json",
]
categories = [
    "trdsql",
]
+++

CSVやLTSVなどのフラットな形式のデータは、JSONにしたいときには（-ojsonによる）JSON出力をすれば良いですが、JSONは本来より深い階層も表現できるフォーマットです。

そのようなJSONは、データベースのJSON関数を使用することにより作成できます。

以下のCSVからJSON関数でJSON出力をしてみます。

```CSV
id,name
1,Orange
2,Melon
3,Apple
```

JSON関数で出力する場合は、「”」等がエスケープされない-orawを使用して出力すると、有効なJSONとして出力できます。

## SQLite3、MySQL

SQLite3、MySQLでは、json_array()やjson_object()を使用することによりJSONを生成できます。
ここでは「名前:値」の形式で出力するためjson_objectを使用します。2つペアの引数で、指定していきます。

```console
trdsql -ih -oraw "SELECT json_object('id',id,'name',name) FROM header.csv"
```

```json
{"id":"1","name":"Orange"}
{"id":"2","name":"Melon"}
{"id":"3","name":"Apple"}
```

階層を深くするには、json_object()を内部でさらに使います。
SQLite3にはjson_pretty()関数が無いので、jqで見やすくしています。

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

上記の結果は1行1JSONで出力されています。これをさらに配列にして、一つのJSONにするには、SQLite3では json_group_array()、MySQLではjson_arrayagg()でグループ化して出力できます。

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

MySQLでは、結果をjson_pretty()で処理すれば、同じようなインデントで表示できます。

## PostgreSQL

PostgreSQLでは、JSONを扱うのにjsonとjsonbの２つの型があり、関数もそれぞれあります。

格納されるときには、jsonbはバイナリ形式でJSONとして有効かチェックされるなど違いがあります。また、関数が一方にしかない場合があるので、考慮して使用してください。

今回は jsonb_pretty()がjsonbにしかないので、jsonb関数を使用します。SQLite3やMySQLのjson_object()とほぼ同じ動作をする関数jsonb_build_object()を使用するとJSONを生成できます。

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

これをさらに配列にして一つのJSONにするには、json_agg()又はjsonb_agg()を使用します。

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
