---
author: "Noboru Saito"
title: "mycli"
date: 2022-05-24T09:00:00+09:00
description: "Employ ov as a pager for mycli to improve the readability of MySQL command outputs."
images: ["/ov/ov-mycli.png"]
tags: ["ov", "mycli", "mysql"]
categories: ["ov"]
weight: 6
---

![mycli](/ov/ov-mycli.png)

`ov` can be set as a pager for [mycli](https://github.com/dbcli/mycli).

The configuration for `mycli` is written in `~/.myclirc`.
On Windows, it is written in `C:\Users\<username>\.myclirc`.

```.myclirc
[main]
# disabled pager on startup
enable_pager = True
pager = 'ov -C -d "│" --section-delimiter "^┌" --align --section-header-num 3 --column-mode'
```
