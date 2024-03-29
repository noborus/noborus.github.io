+++
author = "Noboru Saito"
title = "trdsql 0.7.5"
date = "2020-03-07T10:00:00+09:00"
description = ""
tags = [
    "trdsql",
]
categories = [
    "trdsql",
]
+++

# [trdsql 0.7.5をリリースしました。](https://github.com/noborus/trdsql/releases)

[リリース](https://github.com/noborus/trdsql/releases/tag/v0.7.5)のページから各バイナリがダウンロードできます。

## 圧縮ファイルへの対応を強化

[trdsql 圧縮ファイル](/blog/33_compression)に書いたように圧縮ファイルのサポートを増やしました。

また、圧縮しての出力をできるようにしました。

## ファイルへの出力

[trdsql output](/blog/34_output)に書いたように出力ファイルを指定して出力できるようになりました。

出力ファイル名から出力フォーマットと圧縮フォーマットを推測するのがデフォルトの動作になっています。

オプションが増加したため、`-help`メッセージの出力を見直しました。
以下のようになります。

```console
trdsql - Execute SQL queries on CSV, LTSV, JSON and TBLN.

Usage:
	trdsql [OPTIONS] [SQL(SELECT...)]

Options:
  -A string           analyze the file but only suggest SQL.
  -a string           analyze the file and suggest SQL.
  -config string      configuration file location.
  -db string          specify db name of the setting.
  -dblist             display db information.
  -debug              debug print.
  -driver string      database driver.  [ mysql | postgres | sqlite3 ]
  -dsn string         database driver specific data source name.
  -help               display usage information.
  -q string           read query from the specified file.
  -version            display version information.
Input options:
  -icsv               CSV format for input.
  -id string          field delimiter for input. (default ",")
  -ig                 guess format from extension. (default "true")
  -ih                 the first line is interpreted as column names(CSV only).
  -ijson              JSON format for input.
  -iltsv              LTSV format for input.
  -ir int             number of row preread for column determination. (default 1)
  -is int             skip header row. (default 0)
  -itbln              TBLN format for input.
Output options:
  -oaq                enclose all fields in quotes for output.
  -oat                ASCII Table format for output.
  -ocrlf              use CRLF for output. End each output line with '\r\n' instead of '\n'.
  -ocsv               CSV format for output.
  -od string          field delimiter for output. (default ",")
  -oh                 output column name as header.
  -ojson              JSON format for output.
  -ojsonl             JSON Lines format for output.
  -oltsv              LTSV format for output.
  -omd                Markdown format for output.
  -oq string          quote character for output. (default "\"")
  -oraw               Raw format for output.
  -otbln              TBLN format for output.
  -out string         output file name.
  -out-without-guess  output without guessing (when using -out).
  -ovf                Vertical format for output.
  -oz string          output compression format. [ gz | bz2 | zstd | lz4 | xz ]
```

## 今回のリリース

前回の[リリース](/blog/trdsql_074)は、要望により出力形式を追加する形でしたが、今回は、まだあまり使用していないであろう圧縮形式のサポートを追加しました。
今回は、「これからこれで使ってみて欲しい」という提案的なリリースです。
出力ファイル名による推測を使用すると煩わしさがないので、「圧縮しておいても良いかな」と思ってもらえるのではないかと思います。
