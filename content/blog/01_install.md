+++
author = "Noboru Saito"
title = "trdsql インストール"
date = "2019-12-01"
description = ""
tags = [
    "trdsql",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

## 概要

[trdsql](https://github.com/noborus/trdsql)はテーブル（表）形式のテキストに対してSQLを実行するツールです。
テーブル形式とは、行と列で構成される以下のようなデータです。

|    | 1列 | 2列 |
|:---:|:----|:----|
| **1行** |  a1 |  a2   |
| **2行** |  b1  |  b2  |

## インストール

Linux/Windows/macOSの場合は、[GitHubのリリースページ](https://github.com/noborus/trdsql/releases)からバイナリをダウンロードできます。
Goで作られていて、他に依存ライブラリがない１バイナリなので、展開してすぐに実行することができます。

### Docker

Dockerが使用できる環境であればDockerでも実行できます。docker pullも使用できるので、以下のようにしてpullしてください。

```sh
docker pull noborus/trdsql
```

入力ファイルの場所をマウントして使用して下さい。結果は標準出力に出るので、そのままリダイレクトで受け取れます。

カレントディレクトリにあるtest.csvに対して実行するときは以下のようになります。

```sh
docker run --rm -it -v $(pwd):$(pwd) --workdir $(pwd) noborus/trdsql "SELECT * FROM test.csv" > test_new.csv
```

### Homebrew

macOSが無いので、実際には試していませんが、以下でインストールできるのではないかと思ってます。

```sh
brew tap noborus/trdsql
brew install trdsql
```

### go get

go のビルド環境があれば自分でビルドすることもできます。

```sh
go get -u github.com/noborus/trdsql
```

自分の環境用にビルドするのは難しくないと思いますが、クロスコンパイルする場合は、依存している[go-sqlite3](https://github.com/mattn/go-sqlite3)が cgo を使用しているので、注意が必要になります。
