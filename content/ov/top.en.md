---
author: "Noboru Saito"
title: "top"
date: 2023-01-30T01:00:00+09:00
description: "Enhance the display of system monitoring information by using ov as a pager for top."
tags: ["ov", "top"]
images: ["/ov/ov-top.png"]
categories: ["ov"]
weight: 8
---
![ov-top.png](/ov/ov-top.png)

`top` works fine when started in batch mode (it doesn't work as-is when started normally because it steals keystrokes).

It is convenient because you can browse the history of `top`.

```console
top -b -c -w512|ov --column-delimiter "/\s+/" --section-delimiter "^top" --column-mode --column-rainbow --follow-section -w=false
```

![ov-top.png](/ov/ov-top.gif)
