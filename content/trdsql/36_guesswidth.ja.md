+++
author = "Noboru Saito"
title = "trdsql 固定幅を対象"
date = "2023-06-13T07:00:00+09:00"
tags = [
    "trdsql",
    "guesswidth",
]
categories = [
    "trdsql",
]
+++

trdsqlは[標準入力](/trdsql/10_stdin/index.html)からデータを受け取ることができますが、`ps`等の出力は本来スペース区切りとは言えないフォーマットを解釈していたので、列の解釈は正確ではありませんでした。

[trdsql 0.11.1](/blog/trdsql_0111/)からは`-iwidth`オプションを使用して、幅が固定長の列をテーブルとして扱えるようになりました。
このオプションを使用すると`ps`のような出力をより正確に解釈できます。

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

解釈できるのは、列名のヘッダーががあり、そのヘッダーが下の値の幅に合わせて出力している場合です。

`ps`や`docker ps`、`docker images`、`df`、`dpkg -l`等の出力を確認しています。

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