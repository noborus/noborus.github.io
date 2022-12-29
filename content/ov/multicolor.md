---
author: "Noboru Saito"
title: "Multicolor highlights multiple words"
date: 2022-12-30T06:00:00+09:00
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

* `.` multicolor input mode(default key bindings).

```text
ERROR.* WARN "error is"
```

## customize

The colors(styles) displayed are customizable.
See [github size](https://github.com/noborus/ov#6-customize) for settings.

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
