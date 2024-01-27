+++
author = "Noboru Saito"
title = "trdsql wildcard, compressed file"
date = "2019-12-09"
description = "trdsql wildcard, compressed file"
weight = 9
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

Up to this point, we have targeted one file, but log files, etc. may be rotated and become multiple files.

If the target file is composed of the same columns, you can use wildcards to treat multiple files as one table.

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

## Compressed file

Old log files may be compressed. [gzip, bzip2, zstd, lz4, xz] If it is compressed, it will be automatically extended and executed.

```console
trdsql -iltsv "SELECT * FROM access.log.2.gz"
```

You can also combine compressed files and wildcards to execute.

```console
ls test*.csv
```

```
access.log    access.log.1    access.log.2.gz
```

```console
trdsql -iltsv "SELECT * FROM access.log.*"
```
