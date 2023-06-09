+++
author = "Noboru Saito"
title = "trdsql インストール"
date = "2019-12-01"
description = "trdsqlのインストール方法"
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


## インストール

Linux/Windows/macOSの場合は、[GitHubのリリースページ](https://github.com/noborus/trdsql/releases "github.com/noborus/trdsql/releases")からバイナリを[ダウンロード](https://github.com/noborus/trdsql/releases "github.com/noborus/trdsql/releases")できます。
Goで作られていて、他に依存ライブラリがない１バイナリなので、展開してすぐに実行できます。

### Docker

[Docker](https://www.docker.com/)が使用できる環境であればDockerでも実行できます。[Docker Hub](https://hub.docker.com/)からdocker pullも使用できるので、以下のようにしてpullしてください。

```console
docker pull noborus/trdsql
```

入力ファイルの場所をマウントして使用して下さい。結果は標準出力に出るので、そのままリダイレクトで受け取れます。

カレントディレクトリにあるtest.csvに対して実行するときは以下のようになります。

```console
docker run --rm -it -v $(pwd):$(pwd) --workdir $(pwd) noborus/trdsql "SELECT * FROM test.csv" > test_new.csv
```

### Homebrew

macOSが無いので、実際には試していませんが、以下でインストールできるのではないかと思ってます。

```console
brew tap noborus/trdsql
brew install trdsql
```

### go get

go のビルド環境があれば自分でビルドすることもできます。

```console
go get -u -d github.com/noborus/trdsql
cd trdsql
make
```

自分の環境用にビルドするのは難しくないと思いますが、クロスコンパイルする場合は、依存している[go-sqlite3](https://github.com/mattn/go-sqlite3 "https://github.com/mattn/go-sqlite3")が cgo を使用しているので、注意が必要になります。

### 実行

実行はターミナル上から実行します。

```console
trdsql [OPTIONS] [SQLコマンド]
```

SQLコマンドでは、データベースのテーブルを指定しますが、テーブルの代わりにファイルをそのまま指定できます。
