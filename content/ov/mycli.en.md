---
author: "Noboru Saito"
title: "mycli"
date: 2022-05-24T09:00:00+09:00
description: "Use 'ov' as a pager for mycli"
tags: ["ov", "mycli", "mysql"]
categories: ["ov"]
weight: 6
---

`ov` can be set as a pager for [mycli](https://github.com/dbcli/mycli).

`mycli` reads the client section of `~/.my.cnf` in mysql.
Please refer to [https://www.mycli.net/config](https://www.mycli.net/config).

```ini
[client]
pager="ov -C --skip-lines 1 --header 1 -d'|'"
```
