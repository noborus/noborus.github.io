+++
author = "Noboru Saito"
title = "trdsql 差分、比較"
date = "2019-12-23"
description = "trdsqlでCSV同士やCSVとテーブルなどで、値の比較をしたい場合があります。"
weight = 23
tags = [
    "trdsql",
    "sql",
    "except",
]
categories = [
    "trdsql",
]
+++

CSV同士やCSVとテーブルなどで、値の比較をしたい場合があります。

同じ形式で一部が違うCSVファイルであれば、diffを取る方法もありますが、trdsqlのSQLを使用して比較すると形式が違う場合の比較にも使用できます。

## 差分の出力

SQLで比較して、差分を出すには、`EXCEPT`を使用します。EXCEPTは Aのテーブルから Bのテーブルを引いた残りのAの内容を出力します。

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
この場合old.csv側にnew.csvにない行があっても出力されません。diffの比較とは違いますね。

```sh
trdsql "SELECT * FROM new.csv EXCEPT SELECT * FROM old.csv "
3,CCB
4,DDD
```

### テーブルとファイルの差分出力

既存のデータベースに接続すれば、テーブルとの比較もできます。

例えば、[trdsql DBインポート](../15_import)でインポートしたテーブルと更新されたCSVとの比較をしたいときには、以下のようにすると良いでしょう。

CSVファイル側をキャストして型を合わせています。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oh \
"SELECT id::int,name FROM fruits.csv " \
"EXCEPT " \
"SELECT id,name FROM fruits "
id,name
4,Grape
```

データベース側のテーブルが更新されて新しい場合は、逆にテーブル EXCEPT CSVファイルとすれば、良いでしょう。

## 共通の行の出力

また、EXCEPTとは逆に共通の行を出力させたいときには、`INTERSECT` を使用します。

```sh
"SELECT id::int,name FROM fruits.csv " \
"INTERSECT " \
"SELECT id,name FROM fruits"
id,name
1,Orange
2,Melon
3,Apple
```
