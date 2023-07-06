+++
author = "Noboru Saito"
title = "trdsql 簡単なSQL"
date = "2019-12-03"
description = "trdsqlの簡単なSQLの使用方法"
weight = 3
tags = [
    "trdsql",
    "sql",
    "cut",
    "sort",
]
categories = [
    "trdsql",
]
+++

trdsqlと簡単なSQLを使用することで、他のUNIXツールを組み合わせて出来るようなことが一発で出来るようになります。

## ファイル解析

`SELECT * FROM`から進んで簡単なSQLを実行する場合、あらかじめ列名を把握しておく必要があります。
trdsql に `-a`オプションにファイル名を付けて実行するとファイルを解析して情報を出力してくれます。

（CSVファイルの拡張子が.csvの様な場合は、`-icsv`を省略することが出来ます。`-ih` ヘッダを解釈、 `-is` スキップ数の指定等のオプションを必要に応じて付けないと意図しない解析結果になることがあります）。

```console
$ trdsql -ih -a header.csv

The table name is header.csv.
The file type is CSV.

Data types:
+-------------+------+
| column name | type |
+-------------+------+
| id          | text |
| \`name\`    | text |
+-------------+------+

Data samples:
+----+----------+
| id | \`name\` |
+----+----------+
|  1 | Orange   |
+----+----------+

Examples:
trdsql -ih "SELECT id, \`name\` FROM header.csv"
trdsql -ih "SELECT id, \`name\` FROM header.csv WHERE id = '1'"
trdsql -ih "SELECT id, count(id) FROM header.csv GROUP BY id"
trdsql -ih "SELECT id, \`name\` FROM header.csv ORDER BY id LIMIT 10"
```

### Examplesの使用

Examplesに実際に実行できるSQLが出力されています。

SQLには予約語があり、予約語を列名に使用する場合や小文字以外の列名を使用している場合等エスケープする必要がある列名は上記のようにエスケープされて（データベースにより「\`」か「"」）います。
コマンドラインから使用する場合は、更にシェルからエスケープするために「\」を追加して、「\\'」で囲んで実行します。

（SQLの実装やバージョンによって予約語は変更されますが、予約語以外をエスケープしても問題ないので、実際には必要のない語もエスケープされています）。

ここでExamplesの一つを実行してみます。

```console
trdsql -ih "SELECT id, \`name\` FROM header.csv"
```

```csv
1,Orange
2,Melon
3,Apple
```

`SELECT * FROM header.csv`と同じ結果になりました。

このSQLをひな型として変更していきます。

## 列の並べ替え、列の抽出

今度は、id,nameの順番を入れ替えて、name,idの順で出力してみます。

```console
trdsql -ih "SELECT \`name\`,id FROM header.csv"
```
```
Orange,1
Melon,2
Apple,3
```

そのまんまですね。ではidは必要ないのでnameのみを出力する場合はnameだけ残せば良いことになります。

```console
trdsql -ih "SELECT \`name\` FROM header.csv"
```
```
Orange
Melon
Apple
```

簡単すぎて怒られそうな内容ですが、UNIXツールを使用するならawkやcutで、そこそこ説明が内容になります。

## 行の並べ替え

もう一つ、並べ替えることがあるとしたら行です。行の並べ替えは`ORDER BY 列名｀で出来ます。
昇順（小さい→大きい）はASC（デフォルトなので省略可能）、降順（大きい→小さい）はDESCを付けます。

```console
trdsql -ih "SELECT id, \`name\` FROM header.csv ORDER BY \`name\`"
```
```
3,Apple
2,Melon
1,Orange
```

```console
trdsql -ih "SELECT id, \`name\` FROM header.csv ORDER BY id DESC"
```
```
3,Apple
2,Melon
1,Orange
```

実は、これでは意図した通りに並べ替えられない可能性があります。
trdsqlではCSV、LTSV、JSON等の入力データはtext型として動作します。ここでのidのような場合は、idを数値として扱わないとふた桁以上のときに意図しない結果になります。

数値として扱うには、以下のようにSQLの`CAST(列名 AS 型名)`を使用します。

```console
trdsql -ih "SELECT id,\`name\` FROM  header.csv  ORDER BY CAST(id AS int) DESC"
```

さらに ORDER BY と組み合わせて、よく使用するのが`LIMIT`です。
`LIMIT`は指定した件数のみ出力するように制限できます。一つだけ出力したいとか上位10件のみ出力したいときに使用します。

```console
trdsql -ih "SELECT id,\`name\` FROM  header.csv  ORDER BY CAST(id AS int) DESC LIMIT 1"
```
```
3,Apple
```
