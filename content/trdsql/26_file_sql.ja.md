+++
author = "Noboru Saito"
title = "trdsql SQLファイル指定"
date = "2019-12-26"
description = "trdsql SQLファイル指定"
weight = 26
tags = [
    "trdsql",
    "sql",
    "file",
]
categories = [
    "trdsql",
]
+++

## SQLファイル名指定オプション「-q」

trdsql "SQLコマンド"の形式だと、長いSQLを書くのが難しいですし、シェルに対してエスケープしなければならない文字があって見た目もわかりにくい場合があります。

trdsqlではファイルにSQLを書いておき、そのファイルのSQLを実行させるオプションがあります。

以下のように記述したSQLをtest.sqlで保存しておきます。

test.sql

```SQL
SELECT id, `name` FROM testsql.csv
```

（コマンドの引数で渡していたときは「\\\`」のように「\`」をエスケープする必要がありましたが、ファイルのSQLを実行する場合は必要ありません）。

testsql.csv は対象となるCSVファイルです。

```CSV
id,name
1,tarou
2,jirou
```

"SQLコマンド" の代わりに 「-q ファイル名.sql」で実行します。それ以外のオプションは代わりません。

```sh
trdsql -ih -oat -q test.sql
```

```
+----+-------+
| id | name  |
+----+-------+
|  1 | tarou |
|  2 | jirou |
+----+-------+
```
