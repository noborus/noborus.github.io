+++
author = "Noboru Saito"
title = "trdsql 列の編集"
date = "2019-12-18"
description = ""
weight = 18
tags = [
    "trdsql",
    "sql",
]
categories = [
    "trdsql",
]
+++

これまで列の並べ替えはしてきましたが、列の内容はそのままでした。
SQLでは、文字列の書き換えが得意分野とは言えませんが、SQLの関数を使うことにより、それなりできる機能は揃っています。

## 列の連結

「||」を使って、列名をつなげば、２つ以上の列を連結して一つの列になります。

```sh
trdsql -ih -oh \
"SELECT id,name||id AS name_id FROM header.csv"
id,name_id
1,Orange1
2,Melon2
3,Apple3
```

列と列だけでなく、文字列をそのまま連結も可能です。SQLの文字列は「'」シングルクオートで括ります。

```sh
trdsql -ih -oh \
"SELECT id,name||'_'||id AS name_id FROM header.csv"
id,name_id
1,Orange_1
2,Melon_2
3,Apple_3
```

### PostgreSQL、MySQL

またPostgreSQLとMySQLでは、複数の列をつなげたいときには concat(列名or文字列,列名or文字列,...) が使用できます。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oh \
"SELECT concat(id,name,'個') FROM header.csv"
concat
1Orange個
2Melon個
3Apple個
```

接続文字を付けてつなげたい場合は、concat_ws(接続文字,列名or文字列,列名or文字列,...)が使用できます。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oh \
"SELECT concat_ws(' ',id,name,'個') FROM header.csv"
concat_ws
1 Orange 個
2 Melon 個
3 Apple 個
```

### SQLite3

SQLite3では、concat,concat_wsはありませんが、printfが使用できますので、より柔軟に文字列を生成できます。

```sh
trdsql -ih -oh "SELECT printf('%s %s %s',id,name,'個') FROM header.csv"
"printf(""%s %s %s"",id,name,'個')"
1 Orange 個
2 Melon 個
3 Apple 個
```

## 部分文字列

列の文字列を一部分だけ使用します。substr(列名or文字列、開始位置、文字の長さ)関数を使用します。

```sh
trdsql -ih -oh \
"SELECT id,substr(name,1,2) AS short FROM header.csv"
id,short
1,Or
2,Me
3,Ap
```

## 文字置き換え

例えば、name列に含まれる'e'を'x'に置き換えます。

```sh
trdsql -ih -oh \
"SELECT id,replace(name,'e','x') AS name FROM header.csv"
id,name
1,Orangx
2,Mxlon
3,Applx
```

置き換え前と置き換え後の文字数は同じでなくても構いません。

大文字、小文字変換用の関数もあります。

すべて小文字へ

```sh
trdsql -ih -oh \
"SELECT id,lower(name) FROM header.csv"
id,lower(name)
1,orange
2,melon
3,apple
```

すべて大文字へ

```sh
trdsql -ih -oh \
"SELECT id,upper(name) FROM header.csv"
id,upper(name)
1,ORANGE
2,MELON
3,APPLE
```

このぐらいの書き換えで済む場合は良いですが、スクリプト言語ならば正規表現を使って書き換えられるのが普通なので、見劣りします。
PostgreSQLやMySQLエンジンを使うともう少し便利関数があります。

## regexp_replace

PostgreSQL の regexp_replace(列名or文字列,正規表現パターン,置き換え文字列)を使用して、2文字目から4文字目までをxに置き換えます。

()で囲ったパターンは、\1,\2...の参照文字として使用できます。

```sh
trdsql -driver postgres -dsn "dbname=trdsql_test" -ih -oh \
"SELECT id,regexp_replace(name, '(.)...','\1xxx') FROM header.csv"
id,regexp_replace
1,Oxxxge
2,Mxxxn
3,Axxxe
```

MySQLでは、8.0からregexp_replace()が使用できるようです。ただし参照文字が $1,$2...となります。そしてコマンドの引数で$1を使用するとシェルに解釈されてしまうので、\でエスケープが必要になります。

```sh
trdsql -driver mysql -dsn "noborus:noborus@/trdsql_test" -ih -oh \
"SELECT id,regexp_replace(name, '(.)...','\$1xxx') FROM header.csv"
id,"regexp_replace(name, '(.)...','$1xxx')"
1,Oxxxge
2,Mxxxn
3,Axxxe
```
