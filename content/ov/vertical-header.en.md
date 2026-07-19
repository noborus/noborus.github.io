---
author: "Noboru Saito"
title: "vertical header and header column"
date: 2025-02-26T10:00:00+09:00
description: "Fixed display of columns with vertical header and header column"
tags: ["ov"]
images: ["/ov/vh.png"]
categories: ["ov"]
weight: 92
---
## Vertical Header

In `ov`, you can specify the character width with `vertical header` (or `-y`).
The width specified by `vertical header` from the beginning will always be displayed and will not be hidden even when scrolling.

```console
ov --vertical-header 10 README.md
```

If you are not sure about the width to specify, you can use the `--ruler` option to display a ruler.

```console
ov --ruler README.md
```

![ruler](/ov/ruler.png)

After this, you can enter the width value in vertical-header input mode by pressing the default key `y`.

![vertical-header input](/ov/vh.png)

## Header Column

When in `column mode`, you can specify columns as header columns instead of character width.
Specify it like `--header-column=3` (or `-Y=3`).

```console
ov --header-column=3 --wrap=false --align --column-mode --column-rainbow testdata/MOCK_DATA.csv
```

![header-column](/ov/header-column.gif)

You can specify columns with the default key `Y`, and you can also specify columns up to the cursor position with the `F` key when the cursor is on a column.

The `--align` option is not mandatory, but it is recommended to use it as the display may be hidden when scrolling.
Also, even header columns can be `shrinked`.
