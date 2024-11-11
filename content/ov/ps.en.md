---
author: "Noboru Saito"
title: "ps"
date: 2024-11-11T08:00:00+09:00
description: "Use 'ov' as a pager for ps"
tags: ["ov", "ps"]
categories: ["ov"]
weight: 7
---

The ps output is properly columned.
`--column-width` can divide columns better than spaces.

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
