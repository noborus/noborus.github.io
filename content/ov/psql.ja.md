---
author: "Noboru Saito"
title: "psql"
date: 2025-06-05T11:42:00+09:00
description: "PostgreSQLクライアントツールpsqlをovページャーで設定および使用するためのガイド"
tags: ["ov", "psql"]
categories: ["ov"]
weight: 1
---
PostgreSQLのクライアントツールである`psql`は、クエリ結果が画面に収まらない場合に自動的に「ページャー」と呼ばれるツールを使って結果をスクロール表示します。
多くの方は意識せずに使っていますが、ページャーは通常「1画面分だけを表示し、スクロールできる」だけのシンプルな機能しかありません。  
しかし`ov`は、**ヘッダーや列を自動認識し、列ごとの色分けや固定表示、検索やフィルタ、列の縮小・整列など、データを扱うのに便利な多彩な機能**を備えています。
これにより、psqlの出力結果をより見やすく、効率的に確認できるようになります。

[PSQLのPAGERを設定する](/ja/blog/psql-pager/index.html)も参照してください。

## psql

`psql`は、結果を表示するときに最初の行にヘッダーとして列名が表示され、その下に列が`|`で区切られて表示されます。
`ov`を利用すると、ヘッダーと列を指定することで、より見やすく表示できます。

`PSQL_PAGER`は、psqlの出力結果を表示するためのページャーを指定する環境変数です。以下は、`PSQL_PAGER` の推奨設定例です。これらの設定により、結果が見やすくなり、効率的にデータを確認できます。
ヘッダー1を指定（`-H1`）、列の区切りに"|"を指定（`-d "|"`）、カラムモード）`-C`）を設定します。
画面に収まる場合は、ページャーを終了します（`-F`）。
列の色を変える（`--column-rainbow`）のもオススメです。

また、v0.37.0から追加された列の整列をする`--align`オプションを利用すると、列の縮小もできます。

```console
PSQL_PAGER='ov -F -C -d "|" -H1 --column-rainbow --align'
```

`psql`の表示をカスタマイズするために、`ov`の設定ファイル`config.yaml`を使用します。`config.yaml`はホームディレクトリの`.config/ov/`に配置し、以下のように設定します。

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

PostgreSQL 15からは`watch`が利用できます。`watch`は、指定したコマンドを定期的に実行し、その結果を表示するツールです。これにより、データベースの状態をリアルタイムで監視できます。
`PSQL_WATCH_PAGER` には以下の設定を推奨します。
これにより空行で区切られた最後のセクションを表示し続けます。

```env
PSQL_WATCH_PAGER='ov --follow-section --section-delimiter "^$"'
```

![watch](/ov/ov-psql-watch.gif)

## expanded output (\x)

拡張出力（\x）で表示のときには、レコード区切りをセクション区切りとして扱うと、レコード区切りでスクロールするため、見やすくなります。以下のコマンドで拡張出力モードを有効にできます。

```env
PAGER='ov -F --section-delimiter "^-"'
```

![\x](/ov/ov-psql-vf.gif)

 (\x)と`\watch`を組み合わせることもできます。

![watch2](/ov/ov-psql-watch2.gif)

## unaligned (\a)

psql側で`\a`を指定して、アラインメントなし（列を揃えない）表示にしても`ov`の`--align`オプションを指定することで列を揃えることができます。以下のように、`psql`でアラインメントなしモードを有効にします。

```env
PSQL_PAGER='ov -F -C -d "|" -H1 --column-rainbow --align'
```

![unalign](/ov/ov-psql-alignment.gif)

## 列の縮小と固定表示

`--align`オプションを利用すると、列の縮小や固定表示が可能です。

alignモードにした状態で、列カーソルが指定されている列を`s`（デフォルトキー）で縮小できます。
さらに、`F`（デフォルトキー）を押すと、指定した列より左側のすべての列が固定され、横スクロールしても常に表示されます。

```env
PSQL_PAGER='ov -F -C -d "|" -H1 --column-rainbow --align'
```

![shrink](/ov/ov-psql-shrink.gif)
