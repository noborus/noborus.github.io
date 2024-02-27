---
author: "Noboru Saito"
title: "psql"
date: 2023-07-21T09:00:00+09:00
description: PostgreSQLクライアントpsqlでovを使用する
tags: ["ov", "psql"]
categories: ["ov"]
weight: 1
---

PostgreSQLのクライアントツールである`psql`は結果を表示するときに`PAGER`を利用できます。
[PSQLのPAGERを設定する](/ja/blog/psql-pager/index.html)も参照してください。

## psql

`psql`は、結果を表示するときに最初の行にヘッダーとして列名が表示され、その下に列が`|`で区切られて表示されます。
`ov`を利用すると、ヘッダーと列を指定することで、より見やすく表示できます。

以下は`PSQL_PAGER` の推奨設定例です。
ヘッダー1を指定(`-H1`)、列の区切りに"|"を指定(`-d "|"`)、カラムモード(`-C`)を設定します。
画面に収まる場合は、ページャーを終了します(`-F`)。
列の色を変える(`--column-rainbow`)のもおすすめです。

```env
PSQL_PAGER 'ov -F -C -d "|" -H1 --column-rainbow'
```

画面ではデフォルトから色を変えて`config.yaml`で以下の設定をしています。

```yaml
StyleHeader:
  Background: "#23274f"
  Bold: true
StyleColumnHighlight:
  Foreground: "lightcyan"
  Reverse: true
StyleAlternate:
  Background: "#2a2a2a"
```

![psql](/ov/ov-psql-01.gif)

## watch(PostgreSQL 15)

PostgreSQL 15からは`watch`が利用できます。
`PSQL_WATCH_PAGER` には以下の設定を推奨します。
これにより空行で区切られた最後のセクションを表示し続けます。

```env
PSQL_WATCH_PAGER='ov --follow-section --section-delimiter "^$"'
```

![watch](/ov/ov-psql-watch.gif)

## expanded output (\x)

拡張出力(\x)で表示のときには、レコード区切りをセクション区切りとして扱うと、レコード区切りでスクロールするため、見やすくなります。

```env
PAGER 'ov -F --section-delimiter "^-"'
```

![\x](/ov/ov-psql-vf.gif)

 (\x)と`\watch`を組み合わせることもできます。

![watch2](/ov/ov-psql-watch2.gif)

## unaligned (\a)

アラインメントなし（列を揃えない）表示でも、列ハイライトを利用することで、快適に表示されます。
以下のように、PAGERの指定は変更しません。

```env
PSQL_PAGER='ov -F -C -d "|" -H1'.
```

![\a](/ov/ov-psql-alignment.gif)
