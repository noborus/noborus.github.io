+++
author = "Noboru Saito"
title = "trdsql output"
date = "2024-04-18T09:00:00+09:00"
description = "trdsql output"
weight = 34
tags = [
    "trdsql",
    "output",
]
categories = [
    "trdsql",
]
+++

Until now, the output was only to standard output, but with `-out file name`, you can specify the output file.

`-out file name` enables the mode to guess the file format and compression format from the output file name by default.

If the extension of the output file name is `[.csv,.ltsv,json,jsonl,tbln,md,at,vf,raw]`, etc., it will be automatically output in that output format.

The following outputs in LTSV format.

```console
trdsql -out test.ltsv "SELECT * FROM testdata/test.csv"
```

If you specify the output format, the output format takes precedence. The following is output in jsonl format.

```console
trdsql -ojsonl -out test.txt "SELECT * FROM testdata/test.csv"
```

Compression format is also guessed, so if you name it like `test.csv.gz`, it will be output in CSV format with gzip compression. Basically, the order of the file extension is file format.compression format.

The following is output in LTSV format with zstd compression.

```console
trdsql -out test.ltsv.zst "SELECT * FROM testdata/test.csv"
```

If you specify the compression format with `-oz compression format`, that takes precedence.

For example, if you want to add the extension `.zst` but do not want to compress it (I don't know why...), execute it with `-out-without-guess`.
