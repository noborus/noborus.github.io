---
author: "Noboru Saito"
title: "bat"
description: "Use ov as a pager for bat, a feature-rich alternative to cat, to view and navigate file contents."
date: 2022-05-30T09:00:00+09:00
tags: ["ov", "bat"]
categories: ["ov"]
weight: 9
---

[bat](https://github.com/sharkdp/bat) supports pager functionality.

You can use it by setting the environment variable `PAGER` or `BAT_PAGER`.

```console
export BAT_PAGER="ov -F -H3"
```

Ensure that `bat` does not wrap lines (`--wrap=never`).
If `bat` wraps lines, it cannot be unwrapped later.
It is recommended to use `ov` for better operation.

```console
bat --wrap=never README.md
```

![bat](/ov/ov-bat.png)
