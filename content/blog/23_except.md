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

