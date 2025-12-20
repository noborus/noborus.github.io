---
author: "Noboru Saito"
title: "tailspin"
description: "Use ov as a pager for tailspin to enhance the display of log files."
date: 2025-03-30T09:00:00+09:00
tags: ["ov", "tailspin"]
images: ["/ov/tailspin.png"]
categories: ["ov"]
weight: 15
---

[tailspin](https://github.com/bensadeh/tailspin) supports pager functionality starting from version 5.0.0.

You can use ov as a pager for tailspin by setting the environment variable `TAILSPIN_PAGER`.

```sh
export TAILSPIN_PAGER="ov -f [FILE]"
tspin  example-logs/example1
```

![tailspin](/ov/tailspin.png)
