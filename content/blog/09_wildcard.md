+++
author = "Noboru Saito"
title = "trdsql ワイルドカード、圧縮ファイル"
date = "2019-12-09"
description = ""
tags = [
    "trdsql",
    "wildcard",
    "圧縮",
    "gz",
    "bz2",
    "zstd",
    "lz4",
    "xz",
]
categories = [
    "trdsql",
]
+++

## Wildcard

ここまでは一つのファイルを対象としてきましたが、ログファイル等はローテートされて複数のファイルになっている場合があります。

同じ列で構成されている対象ファイルであれば、ワイルドカードを使用して、複数のファイルを一つのテーブルとして扱うことができます。

```console
ls test*.csv
```
```
test1.csv  test2.csv  test3.csv
```

```console
trdsql -icsv "SELECT COUNT(*) FROM test*.csv"
```
```
15
```

## 圧縮ファイル

また古いログファイルは圧縮されている場合があります。[gzip, bzip2, zstd, lz4, xz]圧縮であれば自動で伸長して実行します。

```console
trdsql -iltsv "SELECT * FROM access.log.2.gz"
```

圧縮ファイルとワイルドカードを組み合わせて実行することもできます。

```console
ls
```
```
access.log    access.log.1    access.log.2.gz
```

```console
trdsql -iltsv "SELECT * FROM access.log.*"
```
