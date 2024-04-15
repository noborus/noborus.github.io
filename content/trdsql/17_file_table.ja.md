+++
author = "Noboru Saito"
title = "trdsql ファイルとテーブルのJOIN"
date = "2019-12-17"
description = "既にテーブルが存在するデータベースに接続することにより、ファイルとテーブルをJOINすることもできます。"
weight = 17
tags = [
    "trdsql",
    "SQL",
	"JOIN",
]
categories = [
    "trdsql",
]
+++

既にテーブルが存在するデータベースに接続することにより、ファイルとテーブルをJOINすることもできます。

例えば、データベース内にfruitsというテーブルがあった場合に、前回のabc.csvとJOINできます。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" \
     "SELECT a.c1, a.c2, f.name FROM abc.csv AS a "\
  "LEFT JOIN fruits AS f ON (CAST(a.c1 AS int) = f.id)"
1,AAA,Orange
2,BBB,Melon
3,CCC,Apple
```

例えば、データベース上にusersテーブルがあり、抽出したいリストがCSVファイルであった場合に、リストを`WHERE user IN (...)`で並べる等を検討するところですが、trdsqlではダイレクトにJOINして抽出できます。

list.csv

```CSV
tarou
jirou
noborus
```

usersテーブル

```
id,name
1,taizou
2,momo
3,tarou
```

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" \
     "SELECT u.id, u.name FROM users AS u "\
 "INNER JOIN list.csv AS l ON (u.name = l.c1)"
3,tarou
```

逆にCSVファイルにデータベースのテーブルから情報を足すといったことも考えられます。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" \
     "SELECT u.id, u.name FROM list.csv AS l "\
  "LEFT JOIN users AS u ON (l.c1 = u.name)" \
       "ORDER BY u.id"
3,tarou
52,jirou
98,noborus
```
