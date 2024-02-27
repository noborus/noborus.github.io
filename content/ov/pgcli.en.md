---
author: "Noboru Saito"
title: "pgcli"
date: 2024-01-07T08:00:00+09:00
description: "Use 'ov' as a pager for pgcli"
tags: ["ov", "pgcli", "PostgreSQL"]
categories: ["ov"]
weight: 5
---

`ov` can be set as a pager for [pgcli](https://github.com/dbcli/pgcli).

~/.config/pgcli/config

```config
pager = 'ov -C -d "|" --skip-lines 1 -H1'
```

In pgcli, you can display multiple results.
In such cases, it is convenient to use section headers instead of fixed header lines.
By setting `table_format` to `psql_unicode`, a frame is displayed in Unicode, allowing you to specify the separation of query results.
You set the section header by specifying the start of that frame.

```config
pager = 'ov -C -d "│" --section-delimiter "^┌" --section-header-num 3 --column-rainbow --column-mode'
table_format = psql_unicode
```

![pgcli-section](/ov/ov-pgcli-section.gif)