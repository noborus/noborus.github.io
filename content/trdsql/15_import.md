+++
author = "Noboru Saito"
title = "trdsql DBインポート"
date = "2019-12-15"
description = ""
weight = 15
tags = [
    "trdsql",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "SQLite3",
]
categories = [
    "trdsql",
]
+++

trdsqlにはデータベースにインポートするオプションはありません。
しかしながら、SELECT以外のSQLの実行も可能なので、SQLによるインポートが可能です。

以下は、メモリデータベースにインポートしても終了すると消えてしまうので、メモリデータベース以外のデータベースに接続して実行します。

## CREATE TABLE AS

テーブルを作成してインポートするには `CREATE TABLE AS`を使用します。

### PostgreSQL で CREATE TABLE AS

まず、PostgreSQLへデータをインポートしてみます。
これまで、SELECTで実行してきた内容に `CREATE TABLE テーブル名 AS` を前につければ、テーブルが作成されデータがインポートされます。

```shell
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
 "CREATE TABLE test AS SELECT * FROM header.csv"
```

成功した場合、何も表示されずに終了します。失敗した場合、エラーが表示されます。

SELECTの結果がインポートされるため、SELECT側で列名の変更、列の型指定、インポートするデータの条件指定をすれば良いことになります。

```shell
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
 "CREATE TABLE fruits AS SELECT id::int AS num, name::VARCHAR(20) FROM header.csv"
```

```shell
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oh\
 "SELECT * FROM fruits"
 num,name
1,Orange
2,Melon
3,Apple
```

もし、テーブルの作成のみを先にして、INSERTを後でおこないたい場合は`WITH NO DATA`を付けます。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
"CREATE TABLE test AS SELECT id::int, name FROM header.csv WITH NO DATA"
```

### MySQL で CREATE TABLE AS

PostgreSQLと同様に`CREATE TABLE テーブル名 AS`を前に付ければ、データがインポートされます。

SELECTの結果のCASTには制限があるので、SELECT時のCASTでは不十分な場合があります。
CREATE TABLE テーブル名 (列名 型名)という構文が使えるので、SELECTの結果に合わせて型名を指定するのが良いでしょう。

```sh
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih \
"CREATE TABLE fruits (num int, name varchar(20)) AS SELECT id AS num,name FROM header.csv"
```

MySQLで、デーブルの作成のみをおこない場合は、`LIMIT 0`や `WHERE 1=2`でSELECTの件数を0にします。

```sh
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih \
"CREATE TABLE fruits (num int, name varchar(20)) AS SELECT id AS num,name FROM header.csv WHERE 1=2"
```

### SQLite3 で CREATE TABLE AS

SQLite3でも同様に`CREATE TABLE テーブル名 AS`を前に付ければ、データがインポートされます。

SQLite3では、実際のデータ型は基本的な型（INTEGER、REAL、TEXT、BLOB）になるので、CASTはこれらの型にする場合のみ必要です。

それ以外は、後で制約として追加するのが良いでしょう。

```sh
trdsql -driver sqlite3 -dsn "trdsql_test" -ih \
"CREATE TABLE fruits AS SELECT CAST(id AS int) AS num, name FROM header.csv"
```

SQLite3で、デーブルの作成のみをおこない場合は、`LIMIT 0`や `WHERE 1=2`でSELECTの件数を0にします。

```sh
trdsql -driver sqlite3 -dsn "trdsql_test" -ih \
"CREATE TABLE fruits AS SELECT CAST(id AS int) AS num,name FROM header.csv WHERE 1=2"
```

SQLite3では後から主キーを付けることができません。

## INSERT

既にテーブルがあって、ファイルの内容をインポートしたい場合は、SELECTの前に `INSERT INTO テーブル名`を付けて、実行します。
これは、ほぼデータベース共通です。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv"
```

上記で`CREATA TABLE AS`した場合等で、主キーを付けていないと繰り返し実行してしまうとそのまま重複してINSERTされます。

PostgreSQLでは、INSERTにON CONFLICTが使用できるので、主キーを付けてから、

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
 "ALTER TABLE fruits  ADD CONSTRAINT table_key PRIMARY KEY(id);"
```

INSERT ON CONFLICTの構文を使用すると差分のみINSERTができます。

既に同じidが在る行については何もしない。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv ON CONFLICT DO NOTHING"
```

既に同じidが在る行についてはUPDATEする。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih \
"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv "\
"ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name"
```

MySQLでは、`INSERT IGNORE`で重複エラーを回避できます。

```sh
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih \
"INSERT IGNORE INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv"
```

既に同じidが在る行をUPDATEするには`ON DUPLICATE KEY UPDATE`を使用して以下のようにします。

```sh
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih \
"INSERT INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv AS h "\
"ON DUPLICATE KEY UPDATE name = h.name"
```

又は、REPLACE INTO文が使用できます。

```sh
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih \
"REPLACE INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv AS h "
```

SQLite3は、主キーがあるテーブルが作成済みであれば、同様にREPLACE INTO文が使用できます。

```sh
trdsql -driver sqlite3 -dsn "trdsql_test.db" -ih \
"REPLACE INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv AS h "
```
