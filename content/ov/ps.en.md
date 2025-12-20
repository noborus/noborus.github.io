---
author: "Noboru Saito"
title: "ps"
date: 2025-06-06T15:55:00+09:00
description: "Use ov as a pager for ps to format and display process information clearly."
tags: ["ov", "ps"]
images: ["/ov/ov-ps.png", "/ov/ov-ps.gif"]
categories: ["ov"]
weight: 7
---
`ps` command output typically displays headers and columns separated by spaces, which can be difficult to read.
You can use `ov` to format the output of `ps` in a more readable way by treating it as column-separated data.
`--column-width` option allows `ov` to recognize columns more intelligently than simple space separation.

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

In `align` mode, you can also fix columns and shrink columns.
Column fixing can be toggled by pressing the `F` key (default) when a column is selected.
Column shrinking can be toggled by pressing the `s` key (default) when a column is selected.

## Use ov instead of grep

When the number of processes is large, `ps` output may not display all processes, and you might want to filter the output using `grep`. However, using `grep` will remove the header line from the output.
You can use `ov` to filter the output while keeping the header line visible.

```console
% ps aux|ov -H1 --column-width --column-rainbow --align --alternate-rows  --filter postgres -F
```

![ps grep](/ov/psgrep.png)
