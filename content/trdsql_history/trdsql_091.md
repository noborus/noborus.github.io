+++
author = "Noboru Saito"
title = "trdsql v0.9.1"
date = "2022-01-07T00:00:00+09:00"
description = ""
tags = [
    "trdsql",
]
categories = [
    "trdsql",
]
+++

# [trdsql v0.9.1をリリースしました。](https://github.com/noborus/trdsql/releases)

[リリース](https://github.com/noborus/trdsql/releases/tag/v0.9.1)のページから各バイナリがダウンロードできます。

## 読み込み行数を指定できるオプションを追加しました

`-ilr num` で行数を指定します。SQLでは結果を制限する`LIMIT`がありますが、これは入力の行数を制限します。
大きなファイルでは、読み込むのに時間がかかるためSQLを試行するときや、全部の結果が必要ないとき等に使用できます。

## JSON出力時にオブジェクトの順番を固定しました

JSON出力ではSQLで`SELECT a,b FROM csv`としてもaとbの順番が不定で出力されていました。

```SQL
SELECT a,b FROM ab.csv
```

```json
[
  {
    "b": "2",
    "a": "1"
  },
  {
    "b": "4",
    "a": "3"
  },
  {
    "b": "6",
    "a": "5"
  }
]
```

SQLの出力結果をgoのmapにしてからJSONを出力するので、オブジェクト順は不定になっていました。
これを[orderedmap](https://github.com/iancoleman/orderedmap)を使用して、結果を指定順になるようにしました。

## GOの対象バージョンを変更

goの対象バージョンを1.16以上にしました。リリースのバイナリは1.17でビルドするようになっています。