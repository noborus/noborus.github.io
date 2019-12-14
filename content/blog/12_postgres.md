+++
author = "Noboru Saito"
title = "trdsql PostgreSQLエンジンの使用"
date = "2019-12-12"
description = ""
tags = [
    "trdsql",
    "postgresql",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

これまでSQLは使用していましたが、データベースについてはそれほど言及してきませんでした。

trdsqlは組込みのSQLite3を利用してSQLを実行していますが、データベースの処理を別のデータベースに変更出来ます。

ここではPostgreSQLを使用する方法を説明します。

## PostgreSQLに接続

SQLite3と違いPostgreSQLは動作しているPostgreSQLサーバーが必要です。接続できテーブルが作成できる権限があるデータベースを作成しておきます。

オプションの -driver に **postgres** を指定し、-dsn にサーバーへの接続情報を指定します。

dsnの項目には以下が指定できます。デフォルトの場合は省略可能です。

|             項目名          | 説明 |
|:---------------------------|:-----|
| dbname                     | データベース名（デフォルト:ログインユーザー名） |
| user                       | ユーザー名（デフォルト:ログインユーザー名） |
| password                   | パスワード（デフォルト:なし）|
| host                       | ホスト名又はIPアドレス（デフォルト:localhost）|
| port                       | ポート番号(デフォルト: 5432) |
| sslmode                    | SSLモード（デフォルト: require）|
| fallback_application_name  | （提供されない場合の）アプリケーション名（デフォルト:なし）|
| connect_timeout            | 接続の最大待機時間 |
| sslcert                    | 証明書ファイルの場所 |
| sslkey                     | 秘密鍵ファイルの場所 |
| sslrootcert                | ルート証明書ファイルの場所 |

項目=値をスペース区切りで指定します。

例えば、ローカルホストのportが5433でデータベース名がtrdsql_testに接続するには以下のようにします。

```sh
trdsql -driver postgres -dsn "host=localhost port=5433 dbname=trdsql_test" "SELECT 1"
```

接続できれば、これまでと同じようにSQLが実行できますが、実際に実行されるのはPostgreSQL上なので、PostgreSQLが実行できるSQLを書く必要があります。

まず違うのが、列名のエスケープに使用していた「`」文字が「"」になります。

PostgreSQLドライバを指定して、-aオプションによる解析をおこなうとSQL例も変更されています。

```sh
trdsql -driver postgres -dsn "host=localhost dbname=trdsql_test" -ih  -a sample.csv
The table name is sample.csv.
The file type is CSV.

Data types:
+-------------+------+
| column name | type |
+-------------+------+
| \"name\"    | text |
| price       | text |
+-------------+------+

Data samples:
+----------+-------+
| \"name\" | price |
+----------+-------+
| apple    |   100 |
+----------+-------+

Examples:
trdsql -driver postgres -dsn "host=localhost dbname=trdsql_test" -ih "SELECT \"name\", price FROM sample.csv"
trdsql -driver postgres -dsn "host=localhost dbname=trdsql_test" -ih "SELECT \"name\", price FROM sample.csv WHERE \"name\" = 'apple'"
trdsql -driver postgres -dsn "host=localhost dbname=trdsql_test" -ih "SELECT \"name\", count(\"name\") FROM sample.csv GROUP BY \"name\""
trdsql -driver postgres -dsn "host=localhost dbname=trdsql_test" -ih "SELECT \"name\", price FROM sample.csv ORDER BY \"name\" LIMIT 10"
```

また、PostgreSQLでは暗黙のCASTの範囲が狭いので、明示的にCASTをする必要があります。
（その代わり、PostgreSQLでは ::型名というCASTの文法が使えます）。

日頃PostgreSQLを使っている方は、慣れた文法で書くことができますが、PostgreSQLに接続して使用するメリットはこれだけではありません。

また、trdsqlは対象のファイルが無くてもSQLの実行するようになっているため、実際のテーブルに対してSQLの実行が出来ます。そして、出力フォーマットの指定はそのまま有効なため、豊富なフォーマットに出力できるデータベースクライアントとして使用できます。

例えば実際のテーブルをMarkDownで出力することも簡単にできます。

```sh
trdsql -driver postgres -dsn "host=localhost dbname=noborus" -omd -ih "SELECT * FROM city LIMIT 10"
| city_id |        city        | country_id |     last_update      |
|---------|--------------------|------------|----------------------|
|       1 | A Corua (La Corua) |         87 | 2006-02-15T09:45:25Z |
|       2 | Abha               |         82 | 2006-02-15T09:45:25Z |
|       3 | Abu Dhabi          |        101 | 2006-02-15T09:45:25Z |
|       4 | Acua               |         60 | 2006-02-15T09:45:25Z |
|       5 | Adana              |         97 | 2006-02-15T09:45:25Z |
|       6 | Addis Abeba        |         31 | 2006-02-15T09:45:25Z |
|       7 | Aden               |        107 | 2006-02-15T09:45:25Z |
|       8 | Adoni              |         44 | 2006-02-15T09:45:25Z |
|       9 | Ahmadnagar         |         44 | 2006-02-15T09:45:25Z |
|      10 | Akishima           |         50 | 2006-02-15T09:45:25Z |
```

動作的には、同名のファイルがあれば、そのファイルをインポートして（元のテーブルは削除されたりはしません）実行し、無ければそのまま実行することで元のテーブルに対してSQLが実行されます。
