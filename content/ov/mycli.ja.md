---
author: "Noboru Saito"
title: "mycli"
date: 2023-07-08T15:00:00+09:00
description: "MySQLコマンドの出力を読みやすくするためにovをmycliのページャーとして使用する"
images: ["/ov/ov-mycli.png"]
tags: ["ov", "mycli", "mysql"]
categories: ["ov"]
weight: 6
---

![mycli](/ov/ov-mycli.png)

`ov`は[mycli](https://github.com/dbcli/mycli)のページャーとしても使用できます。

`mycli`の設定は~/.myclircに記述します。
Windowsの場合は、`C:\Users\<username>\.myclirc`に記述します。

```.myclirc
[main]
# disabled pager on startup
enable_pager = True
pager = 'ov -C -d "│" --section-delimiter "^┌" --align --section-header-num 3 --column-mode'
```
