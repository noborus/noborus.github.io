---
title: "trdsql v0.13.0"
date: 2023-11-12T09:00:00+09:00
tags: ["trdsql"]
categories: ["trdsql"]
---

# [trdsql v0.13.0をリリースしました。](https://github.com/noborus/trdsql/releases)

[リリース](https://github.com/noborus/trdsql/releases/tag/v0.13.0)のページから各バイナリがダウンロードできます。

## テーブル名の指定

`-t`オプションでテーブル名を指定できるようになりました。一番短い構文は以下のようになります。

```console
trdsql -t test.csv
```

単純にフォーマット変換したいときに便利です。

```console
trdsql -ojson -t test.csv 
```

これは`SELECT * FROM test.csv`と同じです。

## macOSのM1バイナリを修正

macOSのM1(Arm64)バイナリを修正しました。Linuxからのクロスビルドで作成していたため、macOSでのビルドが動作しませんでした。
macOS環境のクロスビルドにしたため、macOSでのビルドが動作するようになりました。

## zigビルドのサポート

ビルド環境の見直しによって、zigでのビルドが可能になりました。全体を置き換えようかと思いましたが、結局置き換えはしませんでした。
今回linux-old版のみzigでビルドしています。

## 出力フォーマットを外部から取得可能に変更

trdsqlはパッケージとしても利用できますが、出力フォーマットが増えてきたので、出力フォーマットを外部から取得できるように変更しました。
これにより、パッケージを使用したソフトの出力フォーマットを増やすのが簡単になります。

実際にこれを使用してxlsxファイルに対してSQLを実行できる[xlsxsql](https://github.com/noborus/xlsxsql)で利用しています。