+++
author = "Noboru Saito"
title = "trdsql output"
date = "2020-03-02T18:45:00+09:00"
description = ""
tags = [
    "trdsql",
    "output",
]
categories = [
    "trdsql",
]
+++

今までは標準出力にのみ出力していましたが、`-out ファイル名`により、出力ファイルを指定できるようにしました。

`-out ファイル名`では出力ファイル名からファイル形式、圧縮形式を推測するモードをデフォルトで有効にしてあります。

出力ファイル名の拡張子が`[.csv,.ltsv,json,jsonl,tbln,md,at,vf,raw]`等の出力ファイル形式の拡張子だった場合は自動でその出力形式で出力します。

以下はLTSV形式で出力します。

```console
trdsql -out test.ltsv "SELECT * FROM testdata/test.csv"
```

出力フォーマットを指定した場合は、出力フォーマットが優先されます。以下はjsonl形式で出力されます。

```console
trdsql -ojsonl -out test.txt "SELECT * FROM testdata/test.csv"
```

圧縮形式も推測するので、`test.csv.gz`のようにした場合はCSV形式のgzip圧縮で出力されます。基本的ファイルの拡張子はファイル形式.圧縮形式の順です。

以下はLTSV形式でzstd圧縮で出力されます。

```console
trdsql -out test.ltsv.zst "SELECT * FROM testdata/test.csv"
```

圧縮フォーマットも`-oz 圧縮形式`で指定した場合はそちらが優先されます。

例えば、`.zst`の拡張子を付けたいが圧縮してほしくない（理由はわかりませんが...)の場合は、`-out-without-guess`を付けて実行して下さい。
