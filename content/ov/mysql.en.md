---
author: "Noboru Saito"
title: "mysql"
date: 2024-11-11T09:00:00+09:00
description: "Use 'ov' as a pager for mysql"
tags: ["ov", "mysql"]
categories: ["ov"]
weight: 4
---

`ov` can be used as a pager for mysql or MySQL Shell.

Use the --pager option with the mysql client.

```console
mysql --pager='ov -w=f -H3 -F -C -d "|" --column-mode --column-rainbow --align'
```

You can also write in `~/.my.cnf`.

```ini
[client]
pager=ov -w=f -H3 -F -C -d "|" --column-mode --column-rainbow --align
```

![ov-mysql.png](/ov/ov-mysql.png)

The header line for mysql is 3, but it's surrounded by a separator line.
You can increase the display area by setting the skip line to 1 and the header to 1.

```console
ov -w=f --skip-lines 1 -H1 -F -C -d "|" --column-mode --column-rainbow --align'
```

![ov-mysql.gif](/ov/ov-mysql.gif)

For mysqlsh, use the `--pager` option or set it while mysqlsh is running.
For example, in js mode, it can be made persistent by the following command.

```js
shell.options.setPersist("pager","ov -H1 --skip-lines 1 -C -w=false -d'|' -F --column-mode --column-rainbow --align")
```

SQL mode and Python mode.

```console
\option --persist pager "ov -w=f -H1 --skip-lines 1 -F -C -d '|' --column-mode --column-rainbow --align"
```

Also, from v0.37.0, if you use `--align`, you can shrink the columns (default key `s`).

![ov-mysql-shrink](/ov/ov-mysql2.gif)
