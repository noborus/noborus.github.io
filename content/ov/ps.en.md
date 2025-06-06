---
author: "Noboru Saito"
title: "ps"
date: 2025-06-06T15:55:00+09:00
description: "Use ov as a pager for ps to format and display process information clearly."
tags: ["ov", "ps"]
categories: ["ov"]
weight: 7
---
`ps` command output typically displays headers and columns separated by spaces, which can be difficult to read.
You can use `ov` to format the output of `ps` in a more readable way by treating it as column-separated data.
`--column-width` option allows `ov` to recognize columns more intelligently than simple space separation.

```shell
ps aux | ov --column-width --column-rainbow -H1
```

![ps](/ov/ov-ps.png)

From v.37.0, you can align the columns by adding the `--align` option.

`align` can also be changed by `alt+F` (default key).

```shell
ps aux | ov --column-width --column-rainbow -H1 --align
```

![unalign/align](/ov/ov-ps.gif)

In `align` mode, you can also fix columns and shrink columns.
Column fixing can be toggled by pressing the `F` key (default) when a column is selected.
Column shrinking can be toggled by pressing the `s` key (default) when a column is selected.

## Use ov instead of grep

When the number of processes is large, `ps` output may not display all processes, and you might want to filter the output using `grep`. However, using `grep` will remove the header line from the output.
You can use `ov` to filter the output while keeping the header line visible.

```console
$ ps aux | ov --column-width --column-rainbow -H1 --filter postgres
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND                                                          
postgres    2062  0.0  0.0 226484 20608 ?        Ss   May28   0:50 /usr/lib/postgresql/16/bin/postgres -D /var/lib/postgresql/16/mai
n -c config_file=/etc/postgresql/16/main/postgresql.conf
postgres    2089  0.0  0.0 226616  5812 ?        Ss   May28   0:00 postgres: 16/main: checkpointer 
postgres    2090  0.0  0.0 226640  4404 ?        Ss   May28   0:07 postgres: 16/main: background writer 
postgres    2092  0.0  0.0 226484  4916 ?        Ss   May28   0:07 postgres: 16/main: walwriter 
postgres    2095  0.0  0.0 228092  6708 ?        Ss   May28   0:12 postgres: 16/main: autovacuum launcher 
postgres    2097  0.0  0.0 228068  6196 ?        Ss   May28   0:00 postgres: 16/main: logical replication launcher 
noborus  1719436  100  0.0 1602876 10496 pts/2   Sl+  16:18   0:00 ov --column-width --column-rainbow -H1 --filter postgres
```
