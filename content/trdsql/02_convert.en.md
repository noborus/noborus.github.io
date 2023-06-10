+++
author = "Noboru Saito"
title = "trdsql File format conversion"
date = "2023-06-11"
description = "trdsql file format conversion"
weight = 2
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

TRDSQL describes files such as CSV as a tool for processing SQL, but can also be used as a tool for simply converting file formats.

In that case, SQL is enough to remember the following fixed phrases.
Output all rows and columns in the file.

```SQL
SELECT * FROM fileName
```

After that, if you specify the input format (-i ...) and the output format (-o ...) as the option, you can convert the file format.
CSV, LTSV, JSON, etc. can be converted.

The conversion from CSV (-icsv) to LTSV (-oltsv) is as follows.

```console
trdsql -icsv -oltsv "SELECT * FROM fileName"
```

### CSV header

If the CSV file has a column name on the header, the header can be interpreted with `-ih` and used as a column name.

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

If there is no header, the column name will be c1, c2, c3 ...

### LTSV input

If you use the LTSV output above for input, you will return to CSV.

```console
trdsql -iltsv -ocsv -oh "SELECT * FROM test.ltsv"
```

```CSV
id,name
1,Orange
2,Melon
3,Apple
```

### Change of separation characters（TSV）

Also, as CSV is sometimes called Character-separated values instead of Comma-Separated Values, you can use anything other than "," as a delimiter.

You can change it by specifying the text after the -ID option.
For tab delimited (also known as TSV) use "\t".

The following will be changed from TSV to CSV.

```console
trdsql -icsv -id "\t" -ih "SELECT * FROM test.tsv"
```

### JSON出力

JSON output prints the entire JSON as an array.

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

### JSON input

JSON in trdsql expects a format consisting of rows and columns.
One is a format with an array at the top and containing a name and a value, as in the output above.

The other is a format called `NDJSON`,`LDJSON` or `JSONL`, where one line is one line as shown below.

```JSON
{"id":"1","name":"Orange"}
{"id":"2","name":"Melon"}
{"id":"3","name":"Apple"}
```

If such a column is the same, it can be entered like CSV or LTSV.

```console
trdsql -ijson -ocsv "SELECT * FROM test.json"
```

(Because JSON's objects are unprecedented, the order of columns may be different as Name, ID.)

### Other output

If it is only output, it can be output as a mark -down table (equivalent to a tool called CSV2MD, JSON2MD, or LTSV2MD) because it supports more formats.

```console
trdsql -icsv -ih -ovf "SELECT * FROM header.csv"
```

```markdown
| id |  name  |
|----|--------|
|  1 | Orange |
|  2 | Melon  |
|  3 | Apple  |
```

You can display files that are long and hard to see with CSV files with many columns and display them vertically in Vertical format.

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

### Used format

| Format | input | Output | Note |
|: ----- |: ----: |: ---: |: ------- |
| CSV | ○ | ○ | TSV etc. correspond to options |
| LTSV | ○ | ○ | [Ltsv.org] (http://ltsv.org) |
| JSON | ○ | ○ | [www.json.org] (www.json.org) |
| JSONL | ○ | ○ | Input is possible with JSON |
| Tbln | ○ | ○ | [tbln.dev] (https://tbln.dev) |
| RAW | × | ○ | Output as it is (do not process escape) |
| MD | × | ○ | Markdown table |
| At | × | ○ | ASCII table |
| VF | × | ○ | Vertical format |

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
