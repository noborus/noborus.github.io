---
author: "Noboru Saito"
title: "pgcli"
date: 2023-07-21T06:00:00+09:00
tags: ["ov", "pgcli", "PostgreSQL"]
categories: ["ov"]
weight: 5
---

`ov`は[pgcli](https://github.com/dbcli/pgcli)のページャーとしても使用可能です。

~/.config/pgcli/config に以下のように設定します。

```config
pager = 'ov -C -d "|" --skip-lines 1 -H1'
```
