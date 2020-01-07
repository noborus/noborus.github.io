+++
author = "Noboru Saito"
title = "trdsql CASE式"
date = "2020-01-07T10:18:00+09:00"
description = ""
tags = [
    "trdsql",
    "CASE",
]
categories = [
    "trdsql",
]
+++

`CASE`式は、プログラム言語のif文やswitch文のような条件に分岐した処理をおこないます。単純な1を'A'に変換するような場合は、一時的なテーブルとJOINさせたり文字列の書き換えで可能ですが、
範囲を指定してグループ化したい場合はCASE式を使うと便利です。

CASE式には以下の2つのパターンどちらも使用できます。

* `CASE`は `CASE 式（列) WHEN 値 THEN 結果`とCASEの後に式を書いて、WHENが値だけのパターンと
* `CASE WHEN 式 THEN 結果` とCASEの式を省略してWHENに式を書くパターン

必要であれば、`ELSE 結果`で当てはまらない場合を書き、`END`で式の終わりを示します。

case.csv のようなCSVを使用して、scoreが80以上の場合は'A'、30以上の場合は、'B'、30より下の場合は、'F'と表示させてみます。

```CSV
id,name,score
1,bob,89
2,alice,75
3,dave,23
```

```sh
trdsql -ih -oat \
"SELECT id,name,score, " \
"  CASE WHEN CAST(score AS int) >= 80 THEN 'A' " \
"       WHEN CAST(score AS int) >= 30 THEN 'B' " \
"       ELSE 'F' " \
"   END AS evaluation " \
"  FROM case.csv"
+----+-------+-------+------------+
| id | name  | score | evaluation |
+----+-------+-------+------------+
|  1 | bob   |    89 | A          |
|  2 | alice |    75 | B          |
|  3 | dave  |    23 | F          |
+----+-------+-------+------------+
```

CASE式は書いた先から評価されます。

また式は1つの列をである必要が無いので、`WHEN name = 'dave' THEN 'D'` という条件を追加することも可能です。
