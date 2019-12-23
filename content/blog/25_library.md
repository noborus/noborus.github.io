+++
author = "Noboru Saito"
title = "trdsql ライブラリ使用"
date = "2019-12-25"
description = ""
tags = [
    "trdsql",
    "sql",
    "library",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

trdsqlは初期の頃は、main packageで構成されていましたが、現在はtrdsql packageをmainから呼び出す構成になっていて、trdsql packageをライブラリとして使用できます。

trdsqlのパッケージは、以下の構成になっていて、それぞれ呼び出し可能です。

簡単なサンプルを示します。

```go
package main

import (
        "log"

        "github.com/noborus/trdsql"
)

func main() {
        trd := trdsql.NewTRDSQL(
                trdsql.NewImporter(trdsql.InDelimiter(":")),
                trdsql.NewExporter(trdsql.NewWriter()),
        )
        err := trd.Exec("SELECT c1 FROM /etc/passwd")
        if err != nil {
                log.Fatal(err)
        }
}
```

上記のプログラムは/etc/passwdに対してSQL文を実行しています。
Importer(データベースにインポートするインターフェイス）とExporter(データベースから結果を出力するインターフェイス）を与えてTRDSQLをNewし、Execで実行するのが、おおまかな流れです。

```go
func NewTRDSQL(im Importer, ex Exporter) *TRDSQL
```

このImporter,Exporterはインターフェイスに沿っていれば、置き換えられます（例えば、SQL内のファイルをインポートするのではなく、独自にインポートするにはImporterのインターフェイスに沿った関数を作成します）。

## Importer

デフォルトのImporterは、trdsql.NewImporter()を呼び出せば作成できます。
デフォルトのImporterはtrdsql.Import()で[ReadOpts](https://godoc.org/github.com/noborus/trdsql#ReadOpts)のオプションを取ります。ここでフォーマットやその他オプションを渡します。

SQL文にある「/etc/passwd」をデータベースにインポートして使用するのは、デフォルトの動作のため、区切り文字のみ「:」に変更しています。

trdsql.Import()はSQL文を受け取り、必要なファイルをデータベースにインポートします。そのときにファイルの形式に合わせたtrdsql.Readerインターフェイス（各CSV,LTSV,JSON,TBLNのReader)からテーブルへインポートされます。

また、インポートするデータベースによってバルクインサートかCOPYによるインポートを選択してインポートしています。

## Exporter

デフォルトのExporterは、trdsql.NewExporter()を呼び出せば作成できます。
SQLでは出力は1つなので、出力する関数（trdsql.NewWriter()）を渡しています。
trdsql.NewWriter()は[WriteOpts](https://godoc.org/github.com/noborus/trdsql#WriteOpts)によりフォーマットと動作のオプションを設定して、実際のWriter関数（CSV、LTSV、JSON、TBLN、AT、VF...)によりSQLを実行した結果を書き出します。

## Exec

ImporterとExporterの準備が済んでいれば、ExecでSQLを実際に実行します。

1. データベース接続
1. トランザクションの開始
1. Importerでインポートの実行
1. Exporterで指定したSQLの実行をして出力
1. トランザクションの終了
1. データベース切断

## 参考資料

trdsqlには、参考してファイルからのインポートだけでなく、スライスからインポートする関数が入っています。
それを利用したサンプルが [_example/slice/](https://github.com/noborus/trdsql/blob/master/_example/slice/main.go) にあります。


また、trdsql packageを利用して[shirou/gopsutil](https://github.com/shirou/gopsutil)の結果をSQLで取得できるようにしたものが、
[noborus/psutilsql](https://github.com/noborus/psutilsql) です。

trdsqlの[godoc](https://godoc.org/github.com/noborus/trdsql)も参考にして下さい。
