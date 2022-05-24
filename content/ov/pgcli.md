---
author: "Noboru Saito"
title: "Use ov with pgcli"
date: 2022-05-24T09:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 5
---

`ov` can be set as a pager for [pgcli](https://github.com/dbcli/pgcli).

~/.config/pgcli/config

```config
pager = 'ov -C -d "|" --skip-lines 1 -H1'
```