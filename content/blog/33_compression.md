+++
author = "Noboru Saito"
title = "trdsql 圧縮ファイル"
date = "2020-03-02T17:52:00+09:00"
description = ""
tags = [
    "trdsql",
    "圧縮ファイル",
]
categories = [
    "trdsql",
]
+++

## 圧縮ファイルに実行

0.7.4までは gzip(.gz)の圧縮形式のみの対応でしたが、最新のmaster(0.7.5以降の予定)では、gzip(gz)、bzip2(bz2)、zstd(zst)、lz4、xzの圧縮形式に対応しました。

従来は`.gz`の拡張子をみて判断していましたが、今回から圧縮形式のファイルの先頭のマジックナンバー（signatureの値）を見て判断するようになりました。そのため、拡張子が何であっても上記の圧縮形式はそのまま読み取ることが出来ます。

圧縮率にもよりますが、デフォルトレベルのzstdでの圧縮されたファイルをtrdsqlで処理すると、手元のマシンでの処理時間はほぼ変わらないか、少しzstdで圧縮されているファイルのほうが早いくらいです。

例えば以下のような145MBのファイルに対してzstdで圧縮すると44MBになりました。

```console
 145M  worldcitiespop.csv
  44M  worldcitiespop.csv.zst
```

timeを付けての結果は以下のようになりました。

```console
/usr/bin/time -p trdsql -ih "SELECT count(*) FROM worldcitiespop.csv"
real 11.47
user 11.76
sys 0.70
```

zstd圧縮

```console
/usr/bin/time -p trdsql -ih "SELECT count(*) FROM worldcitiespop.csv.zst"
real 9.76
user 11.00
sys 0.37
```

LTSVファイルでは、同じ内容のCSVファイルよりもファイルサイズが大きくなりますが、圧縮効率は良いので圧縮したときのファイルサイズの差は小さくなります。

```console
 330M  worldcitiespop.ltsv
  54M  worldcitiespop.ltsv.zst
```

145MBをLTSVにすると330MBのファイルになっていたのが、圧縮するとCSV:44MB、LTSV:54MBになります。

処理時間は以下のようになりました。

```console
/usr/bin/time -p trdsql "SELECT count(*) FROM worldcitiespop.ltsv
real 16.72
user 17.41
sys 1.05
```

```console
/usr/bin/time -p trdsql "SELECT count(*) FROM worldcitiespop.ltsv.zst"
3173958
real 13.93
user 16.02
sys 0.55
```

大きなLTSVファイルはzstdで圧縮しておくのが、サイズ的にも速度的にもおすすめです。

## 圧縮して出力

また、圧縮しての出力にも対応しました。 `-oz 圧縮形式[gz,bz2,zst,lz4,xz]`を指定すると圧縮して出力されます。

```console
trdsql -oz gz "SELECT * FROM testdata/test.csv" > test.csv.gz
```

```console
trdsql -oz zst "SELECT * FROM testdata/test.csv" > test.csv.zst
```

また`-out ファイル名`ではファイル名から推測して出力する機能があります。

詳細は[ファイル名を指定しての出力](/blog/34_output)を参照して下さい。
