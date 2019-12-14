+++
author = "Noboru Saito"
title = "trdsql ワイルドカード、圧縮ファイル"
date = "2019-12-09"
description = ""
tags = [
    "trdsql",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

ここまでは一つのファイルを対象としてきましたが、ログファイル等はローテートされて複数のファイルになっている場合があります。

同じ列で構成されている対象ファイルであれば、ワイルドカードを使用して、一つのテーブルとして扱うことができます。

```sh
ls test*.csv
test1.csv  test2.csv  test3.csv
```

```sh
trdsql -icsv "SELECT COUNT(*) FROM test*.csv"
15
```

また古いログファイルは圧縮されている場合があります。gzip圧縮であれば自動で伸長して実行します。

```sh
trdsql -iltsv "SELECT * FROM access.log.2.gz"
```

圧縮ファイルとワイルドカードを組み合わせて実行することもできます。

```sh
ls
access.log    access.log.1    access.log.2.gz
```

```sh
trdsql -iltsv "SELECT * FROM access.log.*"
```

後述しますが、gzip圧縮以外の場合等、単純なワイルドカード指定では対応できない場合は、標準入力を使用して下さい。

```sh
zstdcat test.csv.zst|trdsql -icsv "SELECT * FROM -"
apple,100
orange,50
potato,30
```
