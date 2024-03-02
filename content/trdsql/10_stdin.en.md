+++
author = "Noboru Saito"
title = "trdsql stdin"
date = "2024-03-02"
description = "trdsql can receive data from standard input like other UNIX tools. However, you need to specify the table name in SQL syntax. When using standard input, use \"-\" or \"stdin\"."
weight = 10
tags = [
    "trdsql",
    "stdin",
]
categories = [
    "trdsql",
]
+++

## stdin

trdsql can receive data from standard input like other UNIX tools. However, you need to specify the table name in SQL syntax. When using standard input, use "-" or "stdin".

```console
cat test.csv|trdsql -icsv "SELECT * FROM -"
```

```csv
apple,100
orange,50
potato,30
```

{{% notice %}}
trdsql receives standard input, but the execution of SQL starts after all standard input is received.
Therefore, you cannot receive output from a command that does not end.
{{% /notice %}}

Commands that output CSV, LTSV, and JSON can be used directly by using standard input instead of a file name.
For example, you can use it as it is by changing the character code to UTF-8 from a file that is not UTF-8, or

```console
nkf -w sjis.csv|trdsql -icsv "SELECT * FROM -"
```

You can also try processing only the first few lines before processing a large file.

```console
head -100 big.csv|trdsql -icsv "SELECT * FROM -"
```

In addition, there are many commands that output data that can be treated as table data if interpreted as a space-separated output in UNIX commands.

For example, the ps command,

```console
ps
```

```
  PID TTY          TIME CMD
 1157 pts/3    00:00:00 ps
22590 pts/3    00:00:03 zsh
```

has a header and outputs each column (trdsql behaves to interpret consecutive spaces as one delimiter).

Therefore, you can output it in Ascii Table format as follows.

```console
ps|trdsql -ih -id " " -oat "SELECT \`PID\`, \`TTY\`, \`TIME\`, \`CMD\` FROM -"
```

```
+-------+-------+----------+--------+
|  PID  |  TTY  |   TIME   |  CMD   |
+-------+-------+----------+--------+
|  1363 | pts/3 | 00:00:00 | ps     |
|  1364 | pts/3 | 00:00:00 | trdsql |
| 22590 | pts/3 | 00:00:03 | zsh    |
+-------+-------+----------+--------+
```

## stdin with -a

If you use the -a option, you can specify the table name and file type in the SQL syntax.

```console
command | trdsql -ih -id " " -a -
```

```console
ps|trdsql -id " " -ih -a -
```
```
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
