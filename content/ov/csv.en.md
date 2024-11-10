---
author: "Noboru Saito"
title: "view csv"
description: "ov can also be used as a csv viewer."
date: 2024-11-10T11:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 10
---

`ov` can also be used as a csv viewer.

```console
ov -H1 -C -d',' -c --column-rainbow MOCK_DATA.csv
```

![ov-csv.gif](/ov/ov-csv.gif)

v0.37.0 added the `--align` option to align columns.

```console
ov -H1 -C -d',' -c --column-rainbow --align=right MOCK_DATA.csv
```

### No alignment

![No alignment](/ov/csv1.png)

### Alignment (align)

![Alignment](/ov/csv2.png)

### Alignment (align) without wrap

![Alignment without wrap](/ov/csv3.png)

### Column shrink

You can also shrink columns by enabling alignment. Column shrink can be toggled by pressing the s key (default) when selecting a column.

![Column shrink](/ov/csv4.png)
