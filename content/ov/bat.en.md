---
author: "Noboru Saito"
title: "bat"
description: "ov can also be used as a pager for bat."
date: 2022-05-30T09:00:00+09:00
tags: ["ov", "bat"]
categories: ["ov"]
weight: 9
---

[bat](https://github.com/sharkdp/bat) supports pager.

You can use it by setting the environment variable PAGER or BAT_PAGER.

```console
export BAT_PAGER="ov -F -H3"
```

`bat` should not be wrapped (`--wrap=never`).
If it wraps with `bat`, it cannot be switched to unwrap.
It is better to operate with ov.

```console
bat --wrap=never README.md
```

![bat](/ov/ov-bat.png)
