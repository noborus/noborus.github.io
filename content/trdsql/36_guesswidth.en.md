+++
author = "Noboru Saito"
title = "trdsql For fixed width"
date = "2023-06-13T07:00:00+09:00"
tags = [
    "trdsql",
    "guesswidth",
]
categories = [
    "trdsql",
]
+++

trdsql can receive data from [Standard input](/trdsql/10_stdin/index.html), but the output such as `PS` interpreted a format that is not originally a space separation, so the column.The interpretation was not accurate.

[trdsql 0.11.1](/blog/trdsql_0111/) uses the `-iwidth` option to handle a row of a fixed length as a table.
With this option, you can interpret output like `ps` more accurately.

```console
ps | trdsql -omd -iwidth "SELECT * FROM - "
```

```
|  PID   |  TTY  |   TIME   |  CMD   |
|--------|-------|----------|--------|
| 237958 | pts/2 | 00:00:02 | zsh    |
| 369132 | pts/2 | 00:00:00 | ps     |
| 369133 | pts/2 | 00:00:00 | trdsql |
```

You can interpret it when there is a row name header and the header is output according to the width of the value later.

Outputs such as `ps`, `docker ps`, `docker images`, `df`, `dpkg -l`, etc. are confirmed.

```console
docker ps -a|trdsql -ojson -iwidth "SELECT * FROM -"
```

```json
[
  {
    "CONTAINER ID": "52b096a5473b",
    "IMAGE": "69b11229fb45",
    "COMMAND": "\"/bin/sh -c 'set -ex…\"",
    "CREATED": "17 months ago",
    "STATUS": "Exited (2) 17 months ago",
    "PORTS": "",
    "NAMES": "admiring_mahavira"
  },
  {
    "CONTAINER ID": "5aa93ac03306",
    "IMAGE": "chentex/random-logger:latest",
    "COMMAND": "\"/entrypoint.sh 100 …\"",
    "CREATED": "3 months ago",
    "STATUS": "Exited (137) 3 months ago",
    "PORTS": "",
    "NAMES": "admiring_poitras"
  },
  {
    "CONTAINER ID": "ac978c968bd3",
    "IMAGE": "chentex/random-logger:latest",
    "COMMAND": "\"/entrypoint.sh 100 …\"",
    "CREATED": "14 months ago",
    "STATUS": "Exited (130) 14 months ago",
    "PORTS": "",
    "NAMES": "adoring_euler"
  }
]
```
