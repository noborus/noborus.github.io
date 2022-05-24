---
author: "Noboru Saito"
title: "Use ov with mysql"
date: 2022-05-24T09:00:00+09:00
tags: ["ov"]
categories: ["ov"]
---

`ov` can be used as a pager for mysql or MySQL Shell.

Use the --pager option with the mysql client.

```console
mysql --pager='ov -w=f -H3 -F -C -d "|"'
```

You can also write in `~/.my.cnf`.

```ini
[client]
pager=ov -w=f -H3 -F -C -d "|"
```

![ov-mysql.png](/ov/ov-mysql.png)

The header line for mysql is 3, but it's surrounded by a separator line.
You can increase the display area by setting the skip line to 1 and the header to 1.

```console
ov -w=f --skip-lines 1 -H1 -F -C -d "|"'
```

![ov-mysql.gif](/ov/ov-mysql.gif)

For mysqlsh, use the `--pager` option or set it while mysqlsh is running.
For example, in js mode, it can be made persistent by the following command.

```js
shell.options.setPersist("pager","ov -H1 --skip-lines 1 -C -w=false -d'|' -F")
```

SQL mode and Python mode.

```console
\option --persist pager "ov -w=f -H1 --skip-lines 1 -F -C -d '|'"
```
