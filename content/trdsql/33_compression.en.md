+++
author = "Noboru Saito"
title = "trdsql compress file"
date = "2024-04-19T09:00:00+09:00"
description = "trdsql compress file"
weight = 33
tags = [
    "trdsql",
    "compression",
]
categories = [
    "trdsql",
]
+++

## Execute on compressed files

Until 0.7.4, only gzip (.gz) compression format was supported, but in the latest master (scheduled for 0.7.5 or later), gzip (gz), bzip2 (bz2), zstd (zst), lz4, and xz compression formats are supported.

Until now, it was judged by looking at the extension `.gz`, but from this time, it is judged by looking at the magic number (value of signature) at the beginning of the compressed file. Therefore, regardless of the extension, the above compression format can be read as it is.

Depending on the compression rate, when a file compressed with zstd at the default level is processed by trdsql, the processing time on your machine is almost the same, or the file compressed with zstd is a little faster.

For example, when compressed with zstd for a file of 145MB as follows, it became 44MB.

```console
 145M  worldcitiespop.csv
  44M  worldcitiespop.csv.zst
```

The result with time is as follows.

```console
$ /usr/bin/time -p trdsql -ih "SELECT count(*) FROM worldcitiespop.csv"
real 11.47
user 11.76
sys 0.70
```

zstd compression

```console
$ /usr/bin/time -p trdsql -ih "SELECT count(*) FROM worldcitiespop.csv.zst"
real 9.76
user 11.00
sys 0.37
```

In the case of LTSV files, the file size is larger than that of CSV files with the same content, but the compression efficiency is good, so the difference in file size when compressed is small.

```console
 330M  worldcitiespop.ltsv
  54M  worldcitiespop.ltsv.zst
```

When 145MB is converted to LTSV, it becomes a 330MB file, but when compressed, CSV: 44MB, LTSV: 54MB.

The processing time is as follows.

```console
$ /usr/bin/time -p trdsql "SELECT count(*) FROM worldcitiespop.ltsv
real 16.72
user 17.41
sys 1.05
```

```console
$ /usr/bin/time -p trdsql "SELECT count(*) FROM worldcitiespop.ltsv.zst"
3173958
real 13.93
user 16.02
sys 0.55
```

It is recommended to compress large LTSV files with zstd for both size and speed.

## Compress and output

In addition, it now supports outputting compressed files. If you specify `-oz compression format [gz, bz2, zst, lz4, xz]`, it will be compressed and output.

```console
trdsql -oz gz "SELECT * FROM testdata/test.csv" > test.csv.gz
```

```console
trdsql -oz zst "SELECT * FROM testdata/test.csv" > test.csv.zst
```

In addition, there is a function to output by guessing from the file name with `-out file name`.

For details, see [Output by specifying the file name](/trdsql/34_output).
