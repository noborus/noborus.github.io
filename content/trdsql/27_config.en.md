+++
author = "Noboru Saito"
title = "trdsql config"
date = "2024-04-19"
description = "trdsql config"
weight = 27
tags = [
    "trdsql",
    "config",
]
categories = [
    "trdsql",
]
+++

trdsql works without a configuration file, but you can change the default database engine with a configuration file.

## Location of the config file

You can specify the location of the file directly with the `-config` option.

The default location is as follows if you do not use the `-config` option.

### Linux and other non-Windows

```path
${HOME}/.config/trdsql/config.json
```

### Windows

`%APPDATA%trdsql\config.json` is the default location. It is often located as follows. 

```path
C:\Users\{"User"}\AppData\Roaming\trdsql\config.json
```

## Contents of the config file

The following is a sample.

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

Define the database in "name": {"driver": driver name (sqlite3 or postgres or mysql), "dsn": "DSN according to the driver"} in "database", and write the "name" defined in "db" at the beginning to change the default engine.

In the above example, "pdb" is the default, and the "postgres" engine is used.

Not only can you change the default, but by defining it here, you can easily switch to the mysql driver engine by specifying the trdsql option `-db mdb`.

## How to check

Since trdsql works without a configuration file, it can be difficult to tell if the engine has actually been changed.

When you start trdsql with the `-debug` option, detailed information is displayed, so please check there.

### If the configuration file is not found

```console
trdsql -debug -db pdb "SELECT * FROM testdata/test.csv"
2019/12/27 11:22:13 configOpen: open /home/noborus/.config/trdsql/config.json: no such file or directory
2019/12/27 11:22:13 ERROR: db[pdb] does not found
2019/12/27 11:22:13 driver: sqlite3, dsn: 
2019/12/27 11:22:13 [SELECT][ ][*][ ][FROM][ ][testdata/test.csv]
... (omitted)
```

### If the configuration file is found

```console
trdsql -debug -db pdb "SELECT * FROM testdata/test.csv"
2019/12/27 11:30:18 config found: config.json.sample
2019/12/27 11:30:18  [driver: sdb:sqlite3:]
2019/12/27 11:30:18 >[driver: pdb:postgres:user=test dbname=test]
2019/12/27 11:30:18  [driver: mdb:mysql:user:password@/dbname]
2019/12/27 11:30:18 [SELECT][ ][*][ ][FROM][ ][testdata/test.csv]
... (omitted)
```

The ">" on the 4th line indicates that pdb is being used.
