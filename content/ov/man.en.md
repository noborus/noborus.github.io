---
author: "Noboru Saito"
title: "man"
description: "Use ov as a pager for man pages to navigate and read manual pages efficiently."
date: 2022-05-24T09:00:00+09:00
lastmod: 2026-07-17T09:00:00+09:00
tags: ["ov", "man"]
images: ["/ov/ov-man.png"]
categories: ["ov"]
weight: 7
---

![ov-man.png](/ov/ov-man.png)

On traditional Unix-like systems, the `man` command is the standard tool for viewing manual pages for commands and programs on the system. The `man` command typically uses a pager to display these pages. By default, it uses `less`.
`ov` can also be used as a pager for man pages.

Set `ov` in the `MANPAGER` environment variable. A recommended setting is:

```env
MANPAGER="ov --section-delimiter '^[^\s]' --section-header --sidebar-mode=sections"
```

Man pages are usually divided into multiple sections. `ov` provides useful features for navigating by section. With the `--section-delimiter` option, you can specify a regular expression to detect section boundaries. The `--section-header` option highlights each section header. In addition, `--sidebar-mode=sections` shows a section list in the sidebar for easy navigation.

You can also toggle the sidebar visibility with `alt+u` after startup.

## Colorful display

If you want colorful output in man pages, you can customize it with the `StyleOverStrike` and `StyleOverLine` styles. Example settings:

```yaml
StyleOverStrike:
  Foreground: "aqua"
  Bold: true
StyleOverLine:
  Foreground: "red"
  Underline: true
```

However, `StyleOverStrike` and `StyleOverLine` only work when groff outputs text using the overstrike/overline method.
Newer versions of groff use ANSI escape sequences by default, so these styles do not apply in that mode.
To force groff to use the traditional overstrike method, set the `MANROFFOPT` environment variable:

```env
MANROFFOPT="-c"
```
