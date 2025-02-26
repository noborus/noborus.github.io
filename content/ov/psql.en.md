---
author: "Noboru Saito"
title: "psql"
date: 2024-11-11T08:00:00+09:00
description: "A guide on configuring and using the PostgreSQL client tool psql with the ov pager for enhanced command-line output."
tags: ["ov", "psql"]
categories: ["ov"]
weight: 1
---

This is the setting for `psql`, a client tool for PostgreSQL.

## psql

This is the recommended setting for `PSQL_PAGER`.
Header 1 is specified (`-H1`). "|" is used to separate columns (`-d "|"`), and column mode (`-C`) is set.
Exit the pager (`-F`) if the content fits on the screen.
It is also recommended to change the color of the columns(`--column-rainbow`).

The `--align` option added in v0.37.0 can also be used to shrink columns.

```env
PSQL_PAGER 'ov -F -C -d "|" -H1 --column-rainbow --align'
```

The following sets the header style of `config.yaml`.

```yaml
StyleHeader:
  Background: "#23274f"
  Bold: true
StyleColumnHighlight:
  Foreground: "lightcyan"
  Reverse: true
StyleAlternate:
  Background: "#2a2a2a"
```

![psql](/ov/ov-psql-01.gif)

## watch(PostgreSQL 15)

A pager is available for WATCH from PostgreSQL version 15.
This is the recommended value for `PSQL_WATCH_PAGER`.
Continues to display the last section separated by blank lines.

```env
PSQL_WATCH_PAGER 'ov --follow-section --section-delimiter "^$"'
```

![watch](/ov/ov-psql-watch.gif)

## expanded output (\x)

When displaying in the extended output (\x), treat the record delimiter as a section delimiter. This will make the display easier to see when moved.

```env
PAGER='ov -F --section-delimiter "^-"'
```

![\x](/ov/ov-psql-vf.gif)

You can also display expanded output (\x) with `\watch`.

![watch2](/ov/ov-psql-watch2.gif)

## unaligned (\a)

By specifying `\a` on the psql side, you can display without alignment (without aligning columns). This is done by specifying the `--align` option of `ov`.

```env
PSQL_PAGER='ov -F -C -d "|" -H1 --column-rainbow --align'
```

![unalign](/ov/ov-psql-alignment.gif)
