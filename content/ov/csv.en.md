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
It can instantly open even large CSV files that exceed your system's memory.
It also provides advanced features such as column alignment, color highlighting, column shrinking,
and fixed columns for comfortable data browsing.
With ov, you can efficiently handle, search, and analyze tabular data directly in your terminal.

```console
ov -H1 -C -d',' -c --column-rainbow MOCK_DATA.csv
```

![ov-csv.gif](/ov/ov-csv.gif)

v0.37.0 added the `--align` option to align columns.

```console
ov -H1 -C -d',' -c --column-rainbow --align MOCK_DATA.csv
```

### No alignment

![No alignment](/ov/ov-csv1.png)

### Alignment (align)

![Alignment](/ov/ov-csv2.png)

### Alignment (align) without wrap

![Alignment without wrap](/ov/ov-csv3.png)

### Column shrink

You can also shrink columns by enabling alignment. Shrinking a column reduces its width to fit the visible content, which may truncate or hide overflow text; you can toggle column shrink by pressing the s key (default) when selecting a column.

![Column shrink](/ov/ov-csv4.png)

### Fixed column display

Fixed column display allows you to keep one or more columns visible while scrolling horizontally, making it easier to compare data across wide tables. You can toggle the fixed column feature by pressing the F key (default) when selecting a column.

For example, to open a CSV file and enable fixed columns:

Right alignment can be applied to numeric columns, making numbers easier to compare visually by aligning their digits to the right. You can toggle right alignment for the selected column by pressing the `alt+a` key (default) when selecting a column.

Column right alignment is also possible. You can toggle it by pressing the `alt+a` key (default) when selecting a column.
