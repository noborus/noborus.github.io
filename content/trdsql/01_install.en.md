+++
author = "Noboru Saito"
title = "trdsql install"
date = "2023-6-10"
description = "How to install trdsql"
weight = 1
tags = [
    "trdsql",
    "install",
    "docker",
]
categories = [
    "trdsql",
]
+++


## Install

For Linux/Windows/macOS, [Download](https://github.com/noborus/trdsql/releases "github.com/noborus/trdsql/releases").
It is made in `Go` and has no other dependent libraries, so it can be deployed and executed immediately.

### Docker

If [Docker](https://www.docker.com/) is available, you can also run it with Docker. You can also use docker pull from [Docker Hub](https://hub.docker.com/), so please pull as follows.

```console
docker pull noborus/trdsql
```

Mount and use the input file location. Since the result is output to the standard output, it can be received by redirection as it is.

When executing for test.csv in the current directory, it will be as follows.

```console
docker run --rm -it -v $(pwd):$(pwd) --workdir $(pwd) noborus/trdsql "SELECT * FROM test.csv" > test_new.csv
```

### Homebrew

You can install it with:

```console
brew tap noborus/trdsql
brew install trdsql
```

### go get

If you have a go build environment, you can build it yourself.

```console
go get -u -d github.com/noborus/trdsql
cd trdsql
make
```

I don't think it would be difficult to build for your own environment, but if you want to cross-compile, you should check the dependent [go-sqlite3](https://github.com/mattn/go-sqlite3 "https://github.com/mattn/go-sqlite3") uses `cgo` so you have to be careful.

### Execution

Execute from the terminal.

```console
trdsql [OPTIONS] [SQL command]
```

The SQL command specifies a database table, but you can simply specify a file instead of a table.