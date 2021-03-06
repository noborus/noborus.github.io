+++
author = "Noboru Saito"
title = "MySQL の LOAD DATA INFILE (go)"
date = "2020-02-10T15:09:00+09:00"
description = ""
tags = [
    "mysql",
    "LOAD DATA INFILE",
]
categories = [
    "mysql",
]
+++

## 前提

`LOAD DATA INFILE`はMySQLサーバーがファイルを読み取ってデータベースのテーブルにインポートする構文ですが、`LOAD DATA LOCAL INFILE`はクライアント側のファイル（の内容）をサーバー側に送信してインポートします。

この`LOCAL`指定ですが、セキュリティ上の問題を抱えているため、最近のバージョンだとデフォルトで使用できない設定に変更されたりしています。

そもそも `LOAD DATA LOCAL INFILE` の仕組みは、MySQLの`LOAD DATA`構文を（クライアント側ではパースして解釈しないので）サーバー側に送って`LOCAL INFILE`の場合ファイル名をクライアントに伝えて、クライアントがそのファイル（の中身）をサーバー側に送信するようになっています。

サーバー側から`LOAD DATA LOCAL INFILE`に書いてあったファイル名とは違うファイル名を伝えられてもそのファイルを送信してしまう可能性があるため、セキュリティのリスクがあります。

## LOAD DATA LOCAL INFILE(go)

[goのmysqlドライバ](https://github.com/go-sql-driver/mysql)では、[LOAD DATA LOCAL INFILE support](https://github.com/go-sql-driver/mysql#load-data-local-infile-support)にあるように
`mysql.RegisterLocalFile(filepath)`や`mysql.RegisterReaderHandler(name, handler)`という関数が追加されていてセキュリティ上の問題を解決するような拡張がされています。

`mysql.RegisterLocalFile(filepath)`は、`LOAD DATA LOCAL INFILE`を実行する前にあらかじめ送信するファイル名を登録しておいて、登録してあるファイルのみを送信することでリスクを軽減しています。

```go
mysql.RegisterLocalFile("/tmp/test.csv")
db.Exec("LOAD DATA LOCAL INFILE '/tmp/test.csv' INTO TABLE test")
```

また、`mysql.RegisterReaderHandler(name, handler)`では、あらかじめクライアントプログラム側がファイルを開く等してできた`io.Reader`インターフェイスを\<name\>と共に登録しておき、`LOAD DATA LOCAL INFILE 'Reader::\<name\>' INTO TABLE テーブル名` により`io.Reader`からReadしてサーバー側に送信します。

```go
mysql.RegisterReaderHandler("test", func() io.Reader {
    file, err = os.Open("/tmp/test.csv")
	if err != nil {
	    return nil
	}
	return file
})
db.Exec("LOAD DATA LOCAL INFILE 'Reader::test' INTO TABLE test")
```

db.Exec("LOAD DATA LOCAL INFILE")が実行されるとサーバー側は`iLocalInFile`(0xfb)のパケットを返して、ファイルの内容を受信するモードになります。

後は、クライアント側はreadして送信していくだけなので、共通処理になっています。

## [goのmysqlドライバ](https://github.com/go-sql-driver/mysql)の不満点

上記仕組みに問題自体は無いですが、いざ使おうとすると面倒なところがあります。

それは、要求するのがファイル名又はio.Readerハンドラのため、プログラムで生成されたデータは、一旦ファイルに書き出すか、readerが使用できるデータ領域、又はio.Pipeを使用してpipeに書き出す等の工夫が必要になります。

`LOAD DATA INFILE`で読める形式のファイルが整っている場合は良いですが、そこから外れた形式を変換する場合は面倒な手間が必要になります。

また、`mysql.RegisterLocalFile()`を使用するときは、データベースドライバのmoduleを直接使用することになり、ここだけ異質になります。
かつ登録するファイルはクライアントプログラムのグローバルな箇所に登録するのも気になります。

### 改善の提案

そこで、`io.Reader`を要求するモードとは別に'Data'を要求するモードを追加するのが良いのではないかと思いました。

```go
db.Exec("LOAD DATA LOCAL INFILE 'Data::Data' INTO TABLE test")
```

の様な構文が流れてきたらDataモードとし、以降の`db.Exec("", "column1", "column2")`のデータを`LOAD DATA`（具体的にはタブ区切りのデータ）としてサーバー側に送ります。
空の`db.Exec()`が実行されると`LOAD DATA`のDataモードを終了します。

goのSQLドライバはPREPARE文をサポートしているので、ExecのSQLクエリの後の引数にパラメーターとして値を渡すことができます。
そのため、通常のExec("SQLクエリ", para1, pare2) のインターフェイスをそのまま利用できます。

もしくはトランザクション内で、

```go
stmt, err := tx.Prepare("LOAD DATA LOCAL INFILE 'Data::Data' INTO TABLE test")
```

のように`Prepara`文でstatementを受け取りstatementに対して、
`stmt.Exec("column1", "column")`のように実行するのが良いかもしれません。

どちらもINSERT文で実行されていた文を少し書き換えるだけで`LOAD DATA`を使用することが出来ます。

ということで、上記を試しに実装してみたのが、以下になります。まだPull Request前の状態です。

https://github.com/go-sql-driver/mysql/compare/master...noborus:load_data_of_slice

まだ問題が残っている可能性がありますが、一応動作します。

動作するサンプルは以下になります。

{{< gist noborus 45672d1a3fcb8c9c5b484eff18f45a6d >}}

### 2020-02-15追記

整理して[Extension to help use `LOAD DATA LOCAL INFILE` #1060](https://github.com/go-sql-driver/mysql/pull/1060) という Pull Requestを送ってみました。

変更内容が元の方向性に沿うものではないので、マージされるのは難しいかもしれません。

## MySQLのLOAD DATAの提案

MySQLの`LOAD DATA LOCAL INFILE`はセキュリティの問題もあり、今後自分で設定しないと使用できなくなり、いつかは廃止されるかもしれません。

この方法であれば、ファイルを開く場合もクライアント側で決定したファイルを開いて送信することになるため、LOCAL INFILEのセキュリティ問題は発生しません。

`LOCAL INFILE`の仕組みには問題がありますので使用できない方向にするのは良いと思いますが、上記のようにファイル名を気にせずデータを送信する（`LOAD DATA LOCAL DATA`のような）構文を追加して`LOCAL INFILE`の設定と分けて利用できるようにならないでしょうか？

他の言語ドライバも上記のような（他の言語ではExecインターフェイスに合わせる必要が無ければもっと簡単に）実装できると思います。

### 2020-02-13追記

新しいクライアントのMySQL Shellでは、サーバー側が有効（`SELECT @@local_infile`;が1）でもSQLとしては、
`ERROR: 3948 (42000): Loading local data is disabled; this must be enabled on both the client and server sides`
とエラーとなる。

その代わりMySQL Shellに[Parallel Table Import Utility](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-utilities-parallel-table.html)
というのがあり、JavaScript mode(\js)（又はちょっと書式が変わるがPython mode）でimportTableによりパラレルインポートが可能になっている。

```js
util.importTable("test.csv", {"schema": "mydb", "table": "test", "dialect": "csv-unix", "skipRows": 1, "showProgress": true});
```

これは上記[マニュアル](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-utilities-parallel-table.html)に書いてあるように
`LOAD DATA LOCAL INFILE`を内部で使用しているため、サーバー側で無効`SET GLOBAL local_infile=0`にした場合）使用することが出来ない。

MySQL Shellでは、ファイル名の要求がきても無視されると記述されているので、セキュリティ上の問題は回避されています。
ということで、MySQL Shellでもlocal_infileのセキュリティ問題に影響されて使いづらくなっているのは変更した方が良いと思うのですけど、
（内部的に発行しているのであれば、別の構文が追加されても対応は簡単でしょうし）
今後もこのままでしょうか？