---
author: "Noboru Saito"
title: "man"
date: 2022-05-24T09:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 7
---

`ov` can also be used as a man pager.

```env
MANPAGER="ov --section-delimiter '^[^\s]' --section-header"
```

In the man page, you can set the color by the `StyleOverStrike` and `StyleOverLine` styles.

![ov-man.png](/ov/ov-man.png)

```yaml
StyleOverStrike:
  Foreground: "aqua"
  Bold: true
StyleOverLine:
  Foreground: "red"
  Underline: true
```
