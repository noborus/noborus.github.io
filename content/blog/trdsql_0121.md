---
title: "trdsql v0.12.1"
date: 2023-10-18T12:00:00+09:00
tags: ["trdsql"]
categories: ["trdsql"]
---

# [trdsql v0.12.1をリリースしました。](https://github.com/noborus/trdsql/releases)

[リリース](https://github.com/noborus/trdsql/releases/tag/v0.12.1)のページから各バイナリがダウンロードできます。

## CGOを使わないビルドに対応

CGOを使わないビルドに対応しました。trdsqlは[go-sqlite3](https://github.com/mattn/go-sqlite3)がデフォルトで使用しているため、ビルドにCGOが必要でした。[sqlite](https://gitlab.com/cznic/sqlite)を使用することでCGOを使わないビルドを実現しています。

CGOを使わないビルドは以下のようにビルドします。

```console
CGO_ENABLED=0 make
```

CGOを使わないビルドにした場合はdriver名は`sqlite`に変更になります。また、`sqlite`がデフォルトになります。

CGOを使わないビルドの場合は以下がエラーになります。

```console
trdsql -driver sqlite3 "SELECT 1;"
```

trdsqlのreleaseページにあるバイナリはCGOを使用するようにビルドされています。これは速度面でCGOを使用したほうが有利だからです。

## trdsqlのパッケージ利用ソフト

trdsqlのパッケージを利用したソフトである、[psutilsql](https://github.com/noborus/psutilsql)、[mdtsql](https://github.com/noborus/mdtsql)はCGOを使わないビルドにして、バイナリをリリースしています。

クロスビルドが簡単になったため、各OSのバイナリも用意しています。