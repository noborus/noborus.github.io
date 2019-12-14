+++
author = "Noboru Saito"
title = "trdsql SQLite3エンジンの使用"
date = "2019-12-13"
description = ""
tags = [
    "trdsql",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

SQLite3への接続方法を説明します。

## SQLite3に接続

そもそもtrdsqlのデフォルトはSQLite3のメモリデータベースに接続していますが、メモリデータベース以外にも接続できます。
