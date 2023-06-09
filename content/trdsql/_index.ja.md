+++
author = "Noboru Saito"
title = "trdsql"
date = "2019-12-01"
weight = 2
+++

CSV,LTSV,JSON,TBLNファイルにSQLを実行できるツールの[trdsql](https://github.com/noborus/trdsql)のドキュメントです。

最初は、[trdsql Advent Calendar 2019](https://qiita.com/advent-calendar/2019/trdsql)として書かれました。その後追記しています。

## 概要

[trdsql](https://github.com/noborus/trdsql "GitHub/noborus/trdsql")はテーブル（表）形式のテキストに対してSQLを実行するCLIツールです。
テーブル形式とは、行と列で構成される以下のようなデータです。

|    | 1列 | 2列 |
|:---:|:----|:----|
| **1行** |  a1 |  a2   |
| **2行** |  b1  |  b2  |

結果をざまざまなフォーマットに出力できるので、テーブル形式データのフォーマット変換にも使用できます。

## 目次

{{% children sort="weight" %}}
