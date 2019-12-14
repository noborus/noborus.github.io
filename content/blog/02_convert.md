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
ファイル内のすべての行と列を出力します。

```
SELECT * FROM ファイル名
```

後は、オプションとして入力形式(-i...)と出力形式(-o...)を指定してあげればファイル形式の変換が可能です。
CSV、LTSV、JSON等の相互変換ができます。

```sh
trdsql -icsv -oltsv "SELECT * FROM ファイル名"
```

### CSV header

CSVファイルはヘッダーに列名がついている場合 -ih でヘッダーを解釈して列名として使用できます。

```header.csv
id,name
1,Orange
2,Melon
3,Apple
```

```sh
trdsql -icsv -ih -oltsv "SELECT * FROM header.csv" > test.ltsv
```

```test.ltsv
id:1	name:Orange
id:2	name:Melon
id:3	name:Apple
```

### LTSV入力

上記で出力されたLTSVを入力に使用すれば、CSVに戻ります。

```sh
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

```sh
trdsql -icsv -id "\t" -ih "SELECT * FROM test.tsv"
```

### JSON出力

JSON出力では、最初に配列があるJSONとして出力されます。

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

### JSON入力

trdsqlではJSONは、行と列で構成されているフォーマットを想定しています。
一つは、上記で出力したような、トップが配列になっていて、名前と値が含まれているフォーマットです。

もう一つは、下記のように１行が１つのJSONになっているNDJSON、LDJSON、JSONLとも呼ばれるフォーマットです。

```json
{"id":"1","name":"Orange"}
{"id":"2","name":"Melon"}
{"id":"3","name":"Apple"}
```

このような列が同じで揃っていれば、CSVやLTSVと同様に入力が可能です。

```sh
trdsql -ijson -ocsv "SELECT * FROM test.json"
```

### その他の出力

また出力だけならば、更に多くのフォーマットに対応しているため、マークダウンのテーブル(CSV2MDとかJSON2MDとかLTSV2MDとか呼ばれるツールに相当)として出力できます。

```sh
trdsql -icsv -ih -ovf "SELECT * FROM header.csv"
| id |  name  |
|----|--------|
|  1 | Orange |
|  2 | Melon  |
|  3 | Apple  |
```

列が多いCSVファイル等で横に長くなってしまって見づらいファイルをVerticalフォーマットで縦に表示したり出来ます。

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

使用できるフォーマットには以下があります。

| フォーマット | 入力 | 出力 | 注釈 |
|:-----|:----:|:---:|:-------|
| CSV  | ○ | ○ | TSV等もオプションにより対応 |
| LTSV | ○ | ○ |http://ltsv.org/|
| JSON | ○ | ○ |https://www.json.org/|
| TBLN | ○ | ○ |https://tbln.dev/|
| RAW | × | ○ | そのまま出力（エスケープ処理をしない）|
| MD | × | ○ | MarkDownテーブル |
| AT | × | ○ | ASCIIテーブル |
| VF | × | ○ | Verticalフォーマット |