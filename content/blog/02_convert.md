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
]
+++

trdsqlはCSV等のファイルをSQLで処理するツールとして説明していますが、単純にファイル形式を変換するツールとしても使用できます。

その場合、SQLは以下の定型句さえ覚えておけば、十分です。
ファイル内のすべての行と列を出力します。

```SQL
SELECT * FROM ファイル名
```

後は、オプションとして入力形式(-i...)と出力形式(-o...)を指定してあげればファイル形式の変換が可能です。
CSV、LTSV、JSON等の相互変換ができます。

CSV(-icsv)からLTSV(-oltsv)への変換は以下のようにします。

```console
trdsql -icsv -oltsv "SELECT * FROM ファイル名"
```


### CSV header

CSVファイルはヘッダーに列名がついている場合 -ih でヘッダーを解釈して列名として使用できます。

header.csv

```CSV
id,name
1,Orange
2,Melon
3,Apple
```

```console
trdsql -icsv -ih -oltsv "SELECT * FROM header.csv" > test.ltsv
```

test.ltsv

```LTSV
id:1	name:Orange
id:2	name:Melon
id:3	name:Apple
```

ヘッダーが無い場合は、列名はc1,c2,c3...の連番になります。

### LTSV入力

上記で出力されたLTSVを入力に使用すれば、CSVに戻ります。

```console
trdsql -iltsv -ocsv -oh "SELECT * FROM test.ltsv"
```

```CSV
id,name
1,Orange
2,Melon
3,Apple
```

### 区切り文字の変更（TSV）

また、CSVはComma-Separated Valuesではなく、Character-separated valuesとも呼ばれたりすることがあるように、区切り文字として「,」以外を使用できます。

-id オプションの後に文字を指定することにより変更ができます。
タブ区切りの場合（TSVとも呼ばれます）は、"\t"を使用します。

以下はTSVからCSVの変更になります。

```console
trdsql -icsv -id "\t" -ih "SELECT * FROM test.tsv"
```

### JSON出力

JSON出力では、全体を配列としてのJSONが出力されます。

```console
trdsql -icsv -ih -ojson "SELECT * FROM header.csv"
```

```JSON
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

### JSON入力

trdsqlではJSONは、行と列で構成されているフォーマットを想定しています。
一つは、上記で出力したような、トップが配列になっていて、名前と値が含まれているフォーマットです。

もう一つは、下記のように１行が１つのJSONになっているNDJSON、LDJSON、JSONLとも呼ばれるフォーマットです。

```JSON
{"id":"1","name":"Orange"}
{"id":"2","name":"Melon"}
{"id":"3","name":"Apple"}
```

このような列が同じで揃っていれば、CSVやLTSVと同様に入力が可能です。

```console
trdsql -ijson -ocsv "SELECT * FROM test.json"
```

(JSONのオブジェクトは順序が不定のため、列の順番はname,idのように前後することがあります。)

### その他の出力

また出力だけならば、更に多くのフォーマットに対応しているため、マークダウンのテーブル(CSV2MDとかJSON2MDとかLTSV2MDとか呼ばれるツールに相当)として出力できます。

```console
trdsql -icsv -ih -ovf "SELECT * FROM header.csv"
```
```
| id |  name  |
|----|--------|
|  1 | Orange |
|  2 | Melon  |
|  3 | Apple  |
```

列が多いCSVファイル等で横に長くなってしまって見づらいファイルをVerticalフォーマットで縦に表示したり出来ます。

```console
trdsql -icsv -ih -ovf "SELECT * FROM header.csv"
```
```
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

### 使用できるフォーマット

| フォーマット | 入力 | 出力 | 注釈 |
|:-----|:----:|:---:|:-------|
| CSV  | ○ | ○ | TSV等もオプションにより対応 |
| LTSV | ○ | ○ |[ltsv.org](http://ltsv.org) |
| JSON | ○ | ○ |[www.json.org](www.json.org)|
| JSONL | ○ | ○ |入力はJSONで可能|
| TBLN | ○ | ○ |[tbln.dev](https://tbln.dev)|
| RAW | × | ○ | そのまま出力（エスケープ処理をしない）|
| MD | × | ○ | MarkDownテーブル |
| AT | × | ○ | ASCIIテーブル |
| VF | × | ○ | Verticalフォーマット |

#### CSV

```CSV
id,name
1,Orange
2,Melon
3,Apple
```

#### LTSV

```LTSV
id:1	name:Orange
id:2	name:Melon
id:3	name:Apple
```

#### JSON

```JSON
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

#### JSONL

```JSON
{"id":"1","name":"Orange"}
{"id":"2","name":"Melon"}
{"id":"3","name":"Apple"}
```

#### TBLN

```TBLN
; name: | id | name |
; type: | text | text |
| 1 | Orange |
| 2 | Melon |
| 3 | Apple |
```

#### RAW

```CSV
id,name
1,Orange
2,Melon
3,Apple
```

#### MD

```Markdown
| id |  name  |
|----|--------|
|  1 | Orange |
|  2 | Melon  |
|  3 | Apple  |
```

#### AT

```AsciiTable
+----+--------+
| id |  name  |
+----+--------+
|  1 | Orange |
|  2 | Melon  |
|  3 | Apple  |
+----+--------+
```

#### VF

```VerticalFormat
---[ 1]-------------------------------------------------------------------
    id | 1
  name | Orange
---[ 2]-------------------------------------------------------------------
    id | 2
  name | Melon
---[ 3]-------------------------------------------------------------------
    id | 3
  name | Apple
```
