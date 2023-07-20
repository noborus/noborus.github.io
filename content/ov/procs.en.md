---
author: "Noboru Saito"
title: "procs"
date: 2022-05-24T09:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 8
---

[procs](https://github.com/dalance/procs) supports pager.

You can specify the pager in the [configuration file](https://github.com/dalance/procs#configuration).

It is convenient to set header(`-H`) to 1 or 2.

```toml
[pager]
command = "ov -H=1 -w=false -d=│"
```
