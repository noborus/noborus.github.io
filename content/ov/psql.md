---
author: "Noboru Saito"
title: "Use ov with psql"
date: 2022-05-19T10:00:00+09:00
tags: ["ov"]
categories: ["ov"]
---

## psql

This is the recommended setting for `PSQL_PAGER`.
Header 1 is specified(-H1),"|" is used to separate columns(-d "|"), and column mode(-C) is set.
If it fits on the screen, exit the pager(-F).

```env
PSQL_PAGER 'ov -F -C -d "|" -H1'
```

The following sets the header style of `ov.yaml`.

```yaml
StyleHeader:
  Background: "#23274f"
  Bold: true
```

![psql](/ov/psql-ov.gif)

## watch(PostgreSQL 15)

A pager is available for WATCH from PostgreSQL version 15.
This is the recommended value for `PSQL_WATCH_PAGER`.
Continues to display the last section separated by blank lines.

```env
PSQL_WATCH_PAGER 'ov --follow-section --section-delimiter "^$"'
```

![watch](/ov/psql-watch.gif)

## expanded output (\x)

Even when displaying in the extended output (\x), if the record delimiter is treated as a section delimiter, the display when moved will be easier to see.

```env
PAGER 'ov -F --section-delimiter "^-"'
```

![\x](/ov/psql-vf.gif)

## unaligned (\a)

Even in unaligned display, it is displayed comfortably by using column highlighting.

The PAGER specification does not change with the following.

```env
PSQL_PAGER'ov -F -C -d "|" -H1'.
```

![\a](/ov/psql-alignment.gif)
