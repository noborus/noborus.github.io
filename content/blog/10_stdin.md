+++
author = "Noboru Saito"
title = "trdsql 標準入力"
date = "2019-12-10"
description = ""
tags = [
    "trdsql",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

trdsqlは他のUNIXツールのように標準入力からデータを受け取ることができます。ただSQLの文法上テーブル名となるものを指定する必要があります。標準入力をしようするときは、「-」か「stdin」を使用します。

（上記の名前は他のツールでも混乱を起こすので、本当のファイルの名前としては使用しないようにしてください）。

```sh
cat test.csv|trdsql -icsv "SELECT * FROM -"
apple,100
orange,50
potato,30
```

（ここで注意が必要なのが、trdsqlは標準入力から受け取りますが、標準入力をすべて受け取り終わってからSQLの実行が開始されます。そのため終わらないコマンドからの出力を受け取ることはできません。）

利用方法としては、（ちゃんと終了する）コマンドから受け取ってデータとして利用できるようにしたり、見やすくすることができます。

CSV、LTSV、JSONを出力するコマンドでは、ファイル名の代わりに標準入力を使えばそのまま利用できます。

それ以外にも、例えばUNIX系のコマンドでは、スペースを区切りとして解釈すればテーブルデータとして扱える出力をするコマンドが数多くあります。

例えば psコマンドでは、

```sh
ps
  PID TTY          TIME CMD
 1157 pts/3    00:00:00 ps
22590 pts/3    00:00:03 zsh
```

のようにヘッダーがあり、それぞれの列を出力しています（trdsqlでは連続したスペースの区切り文字は一つとして解釈するように動作します）。

そのため、以下のように実行すると Ascii Table形式で出力できます。

```sh
ps|trdsql -ih -id " " -oat "SELECT \`PID\`, \`TTY\`, \`TIME\`, \`CMD\` FROM -"
+-------+-------+----------+--------+
|  PID  |  TTY  |   TIME   |  CMD   |
+-------+-------+----------+--------+
|  1363 | pts/3 | 00:00:00 | ps     |
|  1364 | pts/3 | 00:00:00 | trdsql |
| 22590 | pts/3 | 00:00:03 | zsh    |
+-------+-------+----------+--------+
```

また、trdsqlの-a解析オプションは標準入力も使用することが出来ます。

```sh
コマンド | trdsql -ih -id " " -a -
```

```sh
ps|trdsql -id " " -ih -a -
The table name is -.
The file type is CSV.

Data types:
+-------------+------+
| column name | type |
+-------------+------+
| \`PID\`     | text |
| \`TTY\`     | text |
| \`TIME\`    | text |
| \`CMD\`     | text |
+-------------+------+

Data samples:
+---------+---------+----------+---------+
| \`PID\` | \`TTY\` | \`TIME\` | \`CMD\` |
+---------+---------+----------+---------+
|    3168 | pts/0   | 00:00:00 | ps      |
+---------+---------+----------+---------+

Examples:
trdsql -id " " -ih "SELECT \`PID\`, \`TTY\`, \`TIME\`, \`CMD\` FROM -"
trdsql -id " " -ih "SELECT \`PID\`, \`TTY\`, \`TIME\`, \`CMD\` FROM - WHERE \`PID\` = '3168'"
trdsql -id " " -ih "SELECT \`PID\`, count(\`PID\`) FROM - GROUP BY \`PID\`"
trdsql -id " " -ih "SELECT \`PID\`, \`TTY\`, \`TIME\`, \`CMD\` FROM - ORDER BY \`PID\` LIMIT 10"
```

