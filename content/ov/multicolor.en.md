---
author: "Noboru Saito"
title: "Multicolor highlights multiple words"
date: 2023-07-21T06:00:00+09:00
description: "ov can highlight multiple words in multiple colors."
tags: ["ov"]
categories: ["ov"]
weight: 13
---

`ov` can highlight multiple words in multiple colors.

```console
ov --multi-color "ERROR.*,WARN,INFO,DEBUG,not,^.{24}" access.log
```

![multi-color.png](/ov/multi-color.png)

## input mode

Enter regular expressions separated by spaces.
Enclose in quotation marks if it contains spaces.

* `.`(default key bindings) multicolor input mode.

```text
ERROR.* WARN "error is"
```

## customize

The colors(styles) displayed are customizable.
See [github customize](https://github.com/noborus/ov#6-customize) for settings.

```yaml
StyleMultiColorHighlight:
  - Foreground: "red"
  - Foreground: "aqua"
  - Foreground: "yellow"
  - Foreground: "fuchsia"
  - Foreground: "lime"
  - Foreground: "blue"
  - Foreground: "grey"
```
