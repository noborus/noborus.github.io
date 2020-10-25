+++
author = "Noboru Saito"
title = "trdsql インストール"
date = "2019-12-01"
description = ""
tags = [
    "trdsql",
    "install",
    "docker",
]
categories = [
    "trdsql",
]
+++

## 概要

[trdsql](https://github.com/noborus/trdsql "GitHub/noborus/trdsql")はテーブル（表）形式のテキストに対してSQLを実行するCLIツールです。
テーブル形式とは、行と列で構成される以下のようなデータです。

|    | 1列 | 2列 |
|:---:|:----|:----|
| **1行** |  a1 |  a2   |
| **2行** |  b1  |  b2  |

結果をざまざまなフォーマットに出力できるので、テーブル形式データのフォーマット変換にも使用できます。

## インストール

Linux/Windows/macOSの場合は、[GitHubのリリースページ](https://github.com/noborus/trdsql/releases "github.com/noborus/trdsql/releases")からバイナリを[ダウンロード](https://github.com/noborus/trdsql/releases "github.com/noborus/trdsql/releases")できます。
Goで作られていて、他に依存ライブラリがない１バイナリなので、展開してすぐに実行できます。

### [Docker](https://www.docker.com/)

Dockerが使用できる環境であればDockerでも実行できます。[Docker Hub](https://hub.docker.com/)からdocker pullも使用できるので、以下のようにしてpullしてください。

{{< cmd >}}
docker pull noborus/trdsql
{{< /cmd >}}

入力ファイルの場所をマウントして使用して下さい。結果は標準出力に出るので、そのままリダイレクトで受け取れます。

カレントディレクトリにあるtest.csvに対して実行するときは以下のようになります。

{{< cmd >}}
docker run --rm -it -v $(pwd):$(pwd) --workdir $(pwd) noborus/trdsql "SELECT * FROM test.csv" > test_new.csv
{{< /cmd >}}

### Homebrew

macOSが無いので、実際には試していませんが、以下でインストールできるのではないかと思ってます。

{{< cmd >}}
brew tap noborus/trdsql
brew install trdsql
{{< /cmd >}}

### go get

go のビルド環境があれば自分でビルドすることもできます。

{{< cmd >}}
go get -u -d github.com/noborus/trdsql
cd trdsql
make
{{< /cmd >}}

自分の環境用にビルドするのは難しくないと思いますが、クロスコンパイルする場合は、依存している[go-sqlite3](https://github.com/mattn/go-sqlite3 "https://github.com/mattn/go-sqlite3")が cgo を使用しているので、注意が必要になります。

### 実行

実行はターミナル上から実行します。

{{< cmd >}}
trdsql [OPTIONS] [SQLコマンド]
{{< /cmd >}}

SQLコマンドでは、データベースのテーブルを指定しますが、テーブルの代わりにファイルをそのまま指定できます。
