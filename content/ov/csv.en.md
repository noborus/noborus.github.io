---
author: "Noboru Saito"
title: "view csv"
description: "Use ov as a csv viewer to handle and process CSV files effectively."
date: 2025-06-05T11:42:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 10
---

`ov` is a very fast and feature-rich CSV viewer.
It can instantly open even large CSV files that exceed your system's memory, and provides advanced features such as column alignment, color highlighting, column shrinking, and fixed columns for comfortable data browsing.  
With ov, you can efficiently handle, search, and analyze tabular data directly in your terminal.

```console
ov -H1 -C -d',' -c --column-rainbow MOCK_DATA.csv
```

![ov-csv.gif](/ov/ov-csv.gif)

v0.37.0 added the `--align` option to align columns.

```console
ov -H1 -C -d',' -c --column-rainbow --align=right MOCK_DATA.csv
```

### No alignment

![No alignment](/ov/ov-csv1.png)

### Alignment (align)

![Alignment](/ov/ov-csv2.png)

### Alignment (align) without wrap

![Alignment without wrap](/ov/ov-csv3.png)

### Column shrink

You can also shrink columns by enabling alignment. Column shrink can be toggled by pressing the s key (default) when selecting a column.

![Column shrink](/ov/ov-csv4.png)
