---
author: "Noboru Saito"
title: "ps"
date: 2025-06-06T15:55:00+09:00
description: "プロセス情報をフォーマットして表示するためにovをpsのページャーとして使用する"
tags: ["ov", "ps"]
categories: ["ov"]
weight: 7
---
`ps`の出力は通常、ヘッダー行があり、一定の幅をスペースで区切られた列として表示されます。
`ps`の出力を列区切りで表示できます。
`--column-width`を使用するとスペース区切りよりも賢く列を認識できます。

`ps`の出力を`ov`で受け取って表示することで、[procs](https://github.com/dalance/procs) コマンドよりも便利に使用出来ます。

```shell
ps aux | ov --column-width --column-rainbow -H1
```

![ps](/ov/ov-ps.png)

さらにv.37.0からは`--align`オプションをつけることで、列の幅を揃えることができます。

`align`は`alt+F`（デフォルトキー）によっても変更できます。

```shell
ps aux | ov --column-width --column-rainbow -H1 --align
```

![unalign/align](/ov/ov-ps.gif)

`align`モードでは、列の固定や列の縮小も可能です。
列の固定は列を選択しているときに`F`キー（デフォルト）を押すことでトグルで切り替えられます。
列の縮小は列を選択しているときに`s`キー（デフォルト）を押すことでトグルで切り替えられます。

## grepの代わりに使用

psの出力はプロセス数が多いと表示しきれないため、見たいプロセスを絞るために、`grep`を使うことがあります。ただ、`grep`コマンドで表示を限定していしまうとヘッダー行も表示されなくなってしまいます。
そのため、`ov`を使用して、ヘッダー行を表示したまま絞り込むことができます。

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
