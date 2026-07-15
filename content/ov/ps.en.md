---
author: "Noboru Saito"
title: "ps"
date: 2025-06-06T15:55:00+09:00
lastmod: 2026-07-15T15:45:00+09:00
description: "Use ov as a pager for ps to format and display process information clearly."
tags: ["ov", "ps"]
images: ["/ov/ov-ps.png", "/ov/ov-ps.gif"]
categories: ["ov"]
weight: 7
---
The `ps` command is a classic tool for displaying process information.
Its output is shown in a table-like format that includes process ID, CPU usage, memory usage, command name, and more.
In practice, however, columns are not always strictly aligned, and long values can make the output look like loosely space-separated text.
As systems run more memory-heavy processes, `ps` output can become very wide and difficult to read.

When the number of processes increases, `ps` output no longer fits on a single screen and requires scrolling.
If you narrow the result with `grep`, the header line disappears, and it becomes hard to tell what each column means.
This is the common ps-grep problem.

`ov` provides features that solve these issues.
By combining options, you can make `ps` output much easier to read,
and by outputting filtered results on exit, you can avoid the ps-grep problem as well.

The modern `ps` alternative [procs](https://github.com/dalance/procs) is well known,
but with `ov` you can achieve functionality equivalent to, or beyond, `procs`.

## Basic usage

`ps` output is width-based and space-delimited, so downstream tools may struggle to recognize columns.
With `ov`, the `--column-width` option interprets this kind of output more accurately,
automatically adjusting column width and improving column recognition.

Once columns are recognized correctly, you can use `--column-rainbow` to color each column.

Using `-H1` keeps the header row visible while scrolling.

```shell
ps aux | ov --column-width --column-rainbow -H1
```

![ps](/ov/ov-ps.png)

On modern systems, process memory usage varies widely,
so some values can overflow deeply into adjacent columns.
Using `--align` makes column widths consistent and improves readability.

You can also toggle `align` with `alt+F` (default key).

```shell
ps aux | ov --column-width --column-rainbow -H1 --align
```

![unalign/align](/ov/ov-ps.gif)

In `align` mode, ov automatically chooses right or left alignment based on column state.
This heuristic is not perfect, so you can toggle alignment direction with `alt+a` (default key).

In `align` mode, you can also fix columns and shrink columns.
Column fixing can be toggled by pressing `F` (default) when a column is selected.
Column shrinking can be toggled by pressing `s` (default) when a column is selected.

## Use ov instead of grep

When there are many processes, you may use `grep` to filter `ps` output.
However, once you filter with `grep`, the header line disappears.
Various tricky shell solutions are often suggested to keep both headers and filtered rows visible,
but with `ov` you can filter while keeping the header line on screen.

```console
% ps aux|ov -H1 --column-width --column-rainbow --align --alternate-rows  --filter postgres -F
```

![ps grep](/ov/psgrep.png)
