+++
author = "Noboru Saito"
title = "trdsql ファイルフォーマット変換"
date = "2019-12-02"
description = ""
tags = [
    "trdsql",
    "csv2ltsv",
    "ltsv2csv",
    "csv2json",
    "json2csv",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

trdsqlはCSV等のファイルをSQLで処理するツールとして説明していますが、単純にファイル形式を変換するツールとしても使用できます。
その場合、SQLは以下の定型句さえ覚えておけば、十分です。

```
SELECT * FROM ファイル名
```

後は入力形式(-i...)と出力形式(-o...)を指定してあげればファイル形式の変換が可能です。
CSV、LTSV、JSON等の相互変換ができます。

```sh
trdsql -icsv -oltsv "SELECT * FROM ファイル名"
```

CSVファイルはヘッダーに列名がついている場合 -ih でヘッダーを解釈して列名として使用できます。

```header.csv
id,name
1,Orange
2,Melon
3,Apple
```

```sh
trdsql -icsv -ih -oltsv "SELECT * FROM header.csv"
```

```ltsv
id:1	name:Orange
id:2	name:Melon
id:3	name:Apple
```

```sh
trdsql -icsv -ih -ojson "SELECT * FROM header.csv"
```

```json
[
  {
    "id": "1",
    "name": "Orange"
  },
  {
    "id": "2",
    "name": "Melon"
  },
  {
    "id": "3",
    "name": "Apple"
  }
]
```

trdsqlではJSONは、行と列で構成されているフォーマットを想定しています。
上記で出力したような、トップが配列になっていて、名前と値が含まれているフォーマットか、下記のように１行が１つのJSONになっているNDJSON、LDJSON、JSONLとも呼ばれるフォーマットです。

```json
{"id":"1","name":"Orange"}
{"id":"2","name":"Melon"}
{"id":"3","name":"Apple"}
```

また出力だけならば、更に多くのフォーマットに対応しているため、マークダウンのテーブル(CSV2MDとかJSON2MDとかLTSV2MDとか呼ばれるツールに相当)として出力したり、

```sh
trdsql -icsv -ih -ovf "SELECT * FROM header.csv"
| id |  name  |
|----|--------|
|  1 | Orange |
|  2 | Melon  |
|  3 | Apple  |
```

列が多いCSVファイル等で横に長くなってしまって見づらいファイルをVertical formatで縦に表示したり出来ます。

```sh
trdsql -icsv -ih -ovf "SELECT * FROM header.csv"
---[ 1]-----------------------------------------------------
    id | 1
  name | Orange
---[ 2]-----------------------------------------------------
    id | 2
  name | Melon
---[ 3]-----------------------------------------------------
    id | 3
  name | Apple
```

また、CSVはComma-Separated Valuesではなく、Character-separated valuesとも呼ばれたりすることがあるように、区切り文字として「,」以外を使用できます。

タブ区切り(TSVとも呼ばれます)で出力するには以下のようにします。

```sh
trdsql -icsv -ih -ocsv -od "\t"  "SELECT * FROM header.csv"
1	Orange
2	Melon
3	Apple
```

もちろんタブ区切りのファイルを入力に使用することもできます。

使用できるフォーマットは`trdsql -help`等で確認してください。
