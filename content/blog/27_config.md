+++
author = "Noboru Saito"
title = "trdsql config"
date = "2019-12-27"
description = ""
tags = [
    "trdsql",
    "config",
    "設定",
]
categories = [
    "trdsql",
]
+++

trdsqlは設定ファイルが無くても動作しますが、設定ファイルによりデフォルトのデータベースのエンジンを変更できます。

## configファイルの場所

`-config`オプションで、直接ファイルの場所を指定できます。

`-config`オプションを使用しないデフォルトの場所は以下です。

### Linux等のWindows以外

```path
${HOME}/.config/trdsql/config.json
```

### Windows

`%APPDATA%trdsql\config.json` です。多くは以下の位置になります。

```path
C:\Users\{"User"}\AppData\Roaming\trdsql\config.json
```

## configファイルの内容

以下がサンプルです。

```json
{
  "db": "pdb",
  "database": {
    "sdb": {
      "driver": "sqlite3",
      "dsn": ""
    },
    "pdb": {
      "driver": "postgres",
      "dsn": "user=test dbname=test"
    },
    "mdb": {
      "driver": "mysql",
      "dsn": "user:password@/dbname"
    }
  }
}
```

"database" に "名前": {"driver": ドライバ名(sqlite3 or postgres or mysql), "dsn": "ドライバに沿ったDSN"} でデータベースを定義しておき、最初の "db"に定義した"名前"を書くとデフォルトのエンジンが変更されます。

上記では、"pdb"がデフォルトになり、"postgres"エンジンが使用されます。

デフォルトの変更だけでなく、ここで定義しておくと trdsqlのオプション `-db mdb` を指定することにより、簡単にmysqlドライバのエンジンに切り替えられます。

## 確認方法

configファイルが無くても動作するため、実際にエンジンが変更されているかわかりにくいことがあります。

trdsqlを`-debug`オプション付きで起動すると詳細が表示されますので、そこで確認して下さい。

### 設定ファイルが見つからなかった場合

```console
trdsql -debug -db pdb "SELECT * FROM testdata/test.csv"
2019/12/27 11:22:13 configOpen: open /home/noborus/.config/trdsql/config.json: no such file or directory
2019/12/27 11:22:13 ERROR: db[pdb] does not found
2019/12/27 11:22:13 driver: sqlite3, dsn: 
2019/12/27 11:22:13 [SELECT][ ][*][ ][FROM][ ][testdata/test.csv]
...（省略）
```

### 設定ファイルが見つかった場合

```console
trdsql -debug -db pdb "SELECT * FROM testdata/test.csv"
2019/12/27 11:30:18 config found: config.json.sample
2019/12/27 11:30:18  [driver: sdb:sqlite3:]
2019/12/27 11:30:18 >[driver: pdb:postgres:user=test dbname=test]
2019/12/27 11:30:18  [driver: mdb:mysql:user:password@/dbname]
2019/12/27 11:30:18 [SELECT][ ][*][ ][FROM][ ][testdata/test.csv]
...（省略）
```

4行目にある「>」によって、pdbが使用されていることがわかります。
