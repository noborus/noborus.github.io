+++
author = "Noboru Saito"
title = "trdsql JSON解析"
date = "2019-12-21"
description = ""
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

これまでtrdsqlでは、JSONの入力が可能と書きましたが、例として書いたのは基本的にフラットな構造のJSONでした。
ただ、２階層以上の階層構造が含まれるJSONはエラーになる訳ではなく、そのまま文字列として扱われます。

以下のようなJSONがあるとします。

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

これをそのままtrdsqlを実行すると以下のようになります(見やすいように-oatを付けています。CSV出力にすると「"」が含まれる文字列のためエスケープされて出力されます。)

```console
trdsql -oat "SELECT color,category,code FROM sample.json"
```
```
+-------+----------+-----------------------------------+
| color | category |               code                |
+-------+----------+-----------------------------------+
| white | value    | {"hex":"#FFF","rgba":[0,0,0,1]}   |
| red   | hue      | {"hex":"#FF0","rgba":[255,0,0,1]} |
| blue  | hue      | {"hex":"#00F","rgba":[0,0,255,1]} |
+-------+----------+-----------------------------------+
```

このcodeは文字列の扱いですが、各データベースは既にJSONを扱える関数を備えているため、データベース側の関数を使って変更できます。

## SQLite3, MySQL

SQLite3とMySQLではjson_extract()により`$`をルートとして（コマンドラインでは`$`が意味を持つので「\」でエスケープしてください）、指定した値を取得出来ます。
codeの中の"hex"のみを表示するには以下のようにします。

```console
trdsql -ijson -oat "SELECT color,category,json_extract(code,'\$.hex') AS hex FROM sample.json"
```
```
+-------+----------+------+
| color | category | hex  |
+-------+----------+------+
| white | value    | #FFF |
| red   | hue      | #FF0 |
| blue  | hue      | #00F |
+-------+----------+------+
```

## PostgreSQL

PostgreSQLでは、json_extract_path_textを使用して、取得できます。
PostgreSQLで取得する場合は、jsonやjsonbにキャストしてから関数を使用してください。

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" "SELECT color,category,json_extract_path_text(code::json,'hex') AS hex FROM sample.json"
```
```
+-------+----------+------+
| color | category | hex  |
+-------+----------+------+
| white | value    | #FFF |
| red   | hue      | #FF0 |
| blue  | hue      | #00F |
+-------+----------+------+
```

また、PostgreSQLでは12からjsonb_path_query()でJSON_PATH指定で取得できます（返されるのは、textではなくJSONの値です）。

```console
trdsql -driver postgres -dsn "dbname=trdsql_test" "SELECT color,category,jsonb_path_query(code::jsonb,'\$.hex')::text AS hex FROM sample.json"
```
```
+-------+----------+--------+
| color | category |  hex   |
+-------+----------+--------+
| white | value    | "#FFF" |
| red   | hue      | "#FF0" |
| blue  | hue      | "#00F" |
+-------+----------+--------+
```

## まとめ

データベースのJSON関数はさらに多くの関数があり、JSON内のオブジェクトを編集できたりします。しかし、trdsqlでは、JSON出力時にJSONの列も文字列として扱うため、-ojsonでの出力とは相性がよくありません。

その場合は、データベース側のJSON出力を有効に活用した方が意図通り出力できます。
