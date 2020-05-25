+++
author = "Noboru Saito"
title = "trdsql JOIN"
date = "2019-12-16"
description = ""
tags = [
    "trdsql",
    "SQL",
	"JOIN",
]
categories = [
    "trdsql",
]
+++

これまで一つのファイルにSQLを実行してきましたが、複数のファイルをJOINするSQLも実行できます。

以下の2つのCSVファイルがあったとして、

abc.csv
```CSV
1,AAA
2,BBB
3,CCC
```

price.csv
```CSV
1,100
2,500
3,50
```

以下のように連結するのが、JOINです。

```CSV
1,AAA,100
2,BBB,500
3,CCC,50
```

trdsqlではテーブルの代わりにファイル名を使用すれば、そのままSQLのJOINが書けます。

```sh
trdsql "SELECT a.c1, a.c2, p.c2" \
         "FROM abc.csv AS a" \
    "LEFT JOIN price.csv AS p" \
               "USING (c1)"
```

同じ件数で対応する同じ列がある1対1のJOINのため、`INNER JOIN`と同じ結果になります。
LEFT JOINの場合は、先に指定したabc.csvの行はすべて表示され、price.csvは対応する行がある場合のみ表示されます。
今回はヘッダーがないCSVなので、列名はc1,c2...の共通になるため、一番左側(c1)が共通の列として`USING`を使用してます。これは `ON a.c1 = p.c1` と同じ意味になります。

複数のCSVをJOINするときには、ヘッダーの有無を統一しておく必要があります。

しかしながら、自動判別可能な拡張子になっていれば、CSVとLTSV等の混在は可能です。

unit.ltsv
```LTSV
id:1	unit:個
id:2	unit:箱
```

先程のCSVのJOINの結果に更にLTSVをJOINします。

```sh
 trdsql -oat \
       "SELECT a.c1, a.c2, p.c2, unit" \
        " FROM abc.csv AS a" \
    "LEFT JOIN price.csv AS p" \
               "USING (c1)" \
    "LEFT JOIN unit.ltsv AS u " \
               "ON (a.c1 = u.id)"
+----+-----+-----+------+
| c1 | c2  | c2  | unit |
+----+-----+-----+------+
|  1 | AAA | 100 | 個   |
|  2 | BBB | 500 | 箱   |
|  3 | CCC |  50 |      |
+----+-----+-----+------+
```
