+++
author = "Noboru Saito"
title = "trdsql 差分、比較"
date = "2019-12-23"
description = ""
tags = [
    "trdsql",
    "sql",
    "except",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

CSV同士やCSVとテーブルなどで、値の比較をしたい場合があります。

同じ形式で一部が違うCSVファイルであれば、diffを取る方法もありますが、trdsqlのSQLを使用して比較すると形式が違う場合の比較にも使用できます。

SQLでの比較には、EXCEPTを使用します。EXCEPTは Aのテーブルから Bのテーブルを引いた残りのAの内容を出力します。

Bの方に多くの行があっても関係なく、AにあってBにない行を出力します。

以下のCSVファイルで比較してみます。new.csvで、3の更新と4の追加があるCSVファイルです。

old.csv

```CSV
1,AAA
2,BBB
3,CCC
```

new.csv

```CSV
1,AAA
2,BBB
3,CCB
4,DDD
```

単純に全列を比較すると1と2の行が同じであるため、消されて残った3と4が出力されます。
この場合old.csv側にnew.csvにない行があっても出力されません。これがdiffの比較とは違いますね。

```sh
trdsql  "SELECT * FROM new.csv EXCEPT SELECT * FROM old.csv"
3,CCB
4,DDD
```
