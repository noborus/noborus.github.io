+++
author = "Noboru Saito"
title = "trdsql+PostgreSQL 14でJSONを処理する"
date = "2021-12-18T15:40:00+09:00"
description = "trdsqlとPostgreSQL 14を使用してjqに対抗します。"
tags = [
    "trdsql",
    "jq",
    "PostgreSQL",
]
categories = [
    "trdsql",
]
+++

trdsql はCSVやLTSVと共にJSONに対してもSQLを実行できるツールですが、SQLを使用するため得意な対象はフラットなJSONです。
ただし、v0.9.0からjqの構文が使え、SQL内でもSQLの関数が使えるため、内容によっては簡単に書くことができる場合があります。

デフォルトのsqlite3にもJSON関数がありますが、ここではよりJSON関数が充実しているPostgreSQL 14を使用します。

## 基本的な使用法

SQLを実行する対象として複数の列のリストの形になっているものが対象です。
以下のように`{``}`で囲まれた複数の`名前:` `値`が`,`で並べられたJSONが基本的な形です。
改行で区切られた（実際には）複数のJSONが並べられたLDJSONやJSONLと呼ばれるものは一番SQLで実行しやすい形です。

```example0.json
{ "name": "Tanaka", "age": 26 }
{ "name": "Suzuki", "age": 32 }
```

一つのJSONの場合は上記を配列化します。

```example0.json
[
  {
    "age": "26",
    "name": "Tanaka"
  },
  {
    "age": "32",
    "name": "Suzuki"
  }
]
```

どちらもそのまま`SELECT name, age FROM example0.json`のようにtrdsqlのSQLとして実行できます。

JSONはオブジェクトや配列で入れ子に出来るため、ルートが対象とならない場合があります。以下の場合は、そのまま実行すると menu 列が一つに中身がすべて入っていることになります。

```example1.json
{
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                {
                    "value": "New",
                    "onclick": "CreateDoc()"
                },
                {
                    "value": "Open",
                    "onclick": "OpenDoc()"
                },
                {
                    "value": "Save",
                    "onclick": "SaveDoc()"
                }
            ]
        }
    }
}
```

SQLのJSON関数を使用することで内部のオブジェクトにアクセスできますが、ほとんどがJSON関数の記述になってしまうのでSQLで実行するメリットが感じられません。

trdsqlではjq構文を使用して、JSONから必要な箇所を取り出せます。menuitemに対してSQLを実行するには、以下のようにできます。

```console
trdsql -oat "SELECT * FROM example.json::\".menu.popup.menuitem\""
```

```asciitable
+-------+-------------+
| value |   onclick   |
+-------+-------------+
| New   | CreateDoc() |
| Open  | OpenDoc()   |
| Save  | SaveDoc()   |
+-------+-------------+
```

jq構文はファイル名の後に`::`でつないだ後や `-ijq`オプションに書くことができます（一行で書く場合、シェルに解釈されるためエスケープが必要な場合があります。ダブルクォーテーションは必要なければ省略できます)。

## JSONをCSVに変換する

jqでやる方法がよく紹介されていますが、trdsqlではデフォルトの動作です。

### [jq コマンドで JSON を CSV に変換する](https://medium.com/veltra-engineering/jq-supports-json-to-csv-fb5c951a9575) の内容をtrdsqlでやってみます。


```sample1.json
[
    {"key1": "value11", "key2": "value12", "key3": "value13"},
    {"key1": "value21", "key2": "value22", "key3": "value23"},
    {"key1": "value31", "key2": "value32", "key3": "value33"},
    {"key1": "value41", "key2": "value42", "key3": "value43"}
]
```

CSV出力はデフォルトなので、一番シンプルです。

```console
trdsql "SELECT * FROM sample1.json"
```

列名をヘッダーとして出力するには `-oh`オプションをつけます。

```console
trdsql -oh "SELECT * FROM sample1.json"
```

ダブルクォーテーションで括るのを強制するなら`-oaq`オプションも追加します。

```console
trdsql -oh -oaq "SELECT * FROM sample1.json" 
```

```csv
"key2","key3","key1"
"value12","value13","value11"
"value22","value23","value21"
"value32","value33","value31"
"value42","value43","value41"
```

LTSVやJSONLにもオプションのみです。つまりJSON<->JSONLの相互変換が可能です。

```console
trdsql -oltsv "SELECT * FROM sample1.json"
```

```ltsv
key1:value11	key2:value12	key3:value13
key1:value21	key2:value22	key3:value23
key1:value31	key2:value32	key3:value33
key1:value41	key2:value42	key3:value43
```

```console
trdsql -ojsonl "SELECT * FROM sample1.json"
```

```json
{"key1":"value11","key2":"value12","key3":"value13"}
{"key1":"value21","key2":"value22","key3":"value23"}
{"key1":"value31","key2":"value32","key3":"value33"}
{"key1":"value41","key2":"value42","key3":"value43"}
```

sample2.jsonの例はjqでもSQLのJSON関数でも複雑です。

```sample2.json
[
    {
        "id" : 1,
        "created_at" : "2018-05-27",
        "attrs" : [
            { "key": "firstname",   "value": "John" },
            { "key": "lastname",    "value": "Smith" },
            { "key": "middlename",  "value": "W" }
        ]
    },
    {
        "id" : 2,
        "created_at" : "2018-05-26",
        "attrs" : [
            { "key": "firstname",   "value": "太郎" },
            { "key": "lastname",    "value": "山田" }
        ]
    }
]
```

idとcreated_atはそのまま列名になりますが、まずattrsはtextとして扱われます。middlenameを取り出すのはJSONやJSONBにキャストしてSQLのJSON関数で取り出す方法でやってみます。

```console
trdsql \
"SELECT \
  id, \
  jsonb_path_query_array(attrs::jsonb, '$ ? (@.key == \"middlename\").value')->>0 as middle, \
  created_at \
FROM sample2.json"
```

```csv
1,W,2018-05-27
2,,2018-05-26
```

jq では要素がない場合にif文を使用していましたが、`jsonb_path_query` だと同様にidが1しか該当しないので`jsonb_path_query_array`を使用することで配列化しています。返ってくるのはjsonオブジェクトなので`"`で括られた文字列からSQLの文字列を取り出すために`->>0`を使用しています。

### [jqの代わりにperlを使ったり、mysqlを使ったり(できなかった)](https://yoku0825.blogspot.com/2021/12/jqperlmysql.html) の例

[JSON Generator – Tool for generating random data](https://json-generator.com/)で生成されたJSONは、フラットで一部配列を使用しているのでtrdsql向けです。

```console
trdsql -oat "SELECT _id,tags FROM generated.json"
```

```
+--------------------------+-------------------------------------------------------------------------------+
|           _id            |                                     tags                                      |
+--------------------------+-------------------------------------------------------------------------------+
| 61b88031bd73e2425c51b44f | ["enim","id","minim","anim","occaecat","cupidatat","excepteur"]               |
| 61b880314dce359ba9f6a963 | ["dolore","adipisicing","fugiat","anim","nostrud","est","culpa"]              |
| 61b880316ca649ff358b5978 | ["exercitation","fugiat","esse","irure","elit","irure","magna"]               |
| 61b8803159cfcb4349795b06 | ["pariatur","nisi","consectetur","aute","veniam","incididunt","ad"]           |
| 61b88031ee810a0f624f0b55 | ["excepteur","officia","magna","aliquip","consectetur","cupidatat","aliquip"] |
+--------------------------+-------------------------------------------------------------------------------+
```

### [jq で IP アドレスを sort_by しようと思ったがうまくいかなかったので大人しく sort -V を使った](https://dev.classmethod.jp/articles/jq-ip-address-sort/) の例

jqのsort_by関数ではIPアドレスに対応していませんが、PostgreSQLにはネットワークアドレス型があるため、IPアドレスのソートが簡単におこなえます。

ip-ranges.jsonは以下のような、大きなJSONファイルです。

```ip-ranges.json
{
  "syncToken": "1632282194",
  "createDate": "2021-09-22-03-43-14",
  "prefixes": [
    {
      "ip_prefix": "3.5.140.0/22",
      "region": "ap-northeast-2",
      "service": "AMAZON",
      "network_border_group": "ap-northeast-2"
    },
    {
      "ip_prefix": "13.34.37.64/27",
      "region": "ap-southeast-4",
      "service": "AMAZON",
      "network_border_group": "ap-southeast-4"
    },
....
```

IPアドレスが入っているリストは`prefixes`項目に入っているため、JSONファイルそのままをSQLの対象とするとJSON関数でprefixesを取り出して処理することになります。可能は可能ですが、この場合はjq構文で`.prefixes`
を指定し、そのリストに対してSQLを実行します。

PostgreSQLでは`cidr型`にキャストすればIPアドレスとしてソートできます。

```console
trdsql "SELECT ip_prefix FROM ip-ranges.json::.prefixes ORDER BY ip_prefix::cidr"
```

```csv
3.0.0.0/15
3.0.0.0/15
3.0.5.32/29
3.0.5.224/27
3.2.0.0/24
3.2.0.0/24
3.2.2.0/24
3.2.2.0/24
3.2.3.0/24
3.2.3.0/24
...
```
