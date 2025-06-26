---
author: "Noboru Saito"
title: "psql"
date: 2025-06-26T15:00:00+09:00
description: "Using ov as a pager for psql to improve query result display"
tags: ["ov", "psql"]
categories: ["ov"]
weight: 1
---

`ov` can also be used as a pager for the psql client.
The PostgreSQL client tool `psql` automatically uses a "pager" tool to scroll through results when query results do not fit on the screen.

See also [Setting the PAGER for PSQL](/ja/blog/psql-pager/index.html).

## Configuration Examples

`PSQL_PAGER` is an environment variable that specifies the pager for displaying psql output results. Here are recommended configuration examples for `PSQL_PAGER`.

```console
PSQL_PAGER='ov -F -C -d "|" -H1 --column-rainbow --align'
```

You can also use this by writing the following in the `~/.psqlrc` configuration file.

```console
\setenv PSQL_PAGER 'ov -F -C -d "|" -H1 --column-rainbow --align'
```

To customize the display of `psql`, use the `ov` configuration file `config.yaml`. Place `config.yaml` in the `.config/ov/` directory in your home directory and configure it as follows:

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

## Display Issues in PostgreSQL

When displaying query results in PostgreSQL, they are displayed as follows. If configured to use a pager, it displays one screen at a time and waits for the next operation.

![/ov/psql/psql00.png](/ov/psql/psql00.png)

The first row displays column names as headers, and the row below draws lines with `-` and `+` as column separators. Each column is separated by `|`.
When the result rows end, the number of rows is displayed like `(1000 rows)`.

Many people use this unconsciously, but pagers typically only have the simple function of "displaying one screen at a time and allowing scrolling."

However, when a row is long, it wraps around and makes the "table" difficult to read. When using a pager, you can display without wrapping for a cleaner look, but all columns won't be displayed and you need to scroll horizontally.

![/ov/psql/psql01.png](/ov/psql/psql01.png)

Previous pagers could scroll vertically and horizontally, but they scrolled regardless of content. When scrolling vertically, column names would disappear, and when scrolling horizontally, columns you want to see simultaneously need to be close to each other. For example, ID columns are often displayed on the left edge, but when you scroll horizontally, that ID column becomes invisible.

To display all columns, you have to use wrap display, but then it becomes difficult to understand which row and which column corresponds to which value.

For this reason, when you couldn't display everything in one horizontal line, there was a method to display vertically using `\x`.

In this case, there was a problem that the number of rows that could be displayed on one screen was reduced.

## Display Using ov

`ov` has convenient features for displaying such table structures.

First, there is a header function that ensures the initially displayed column names are always shown even when scrolling vertically. PostgreSQL results have one header row, so specify it with `-H1`.

Next, to specify the column delimiter character, specify the delimiter character with `-d "|"`. This recognizes that each column is separated by `|`.
Furthermore, by specifying `--column-mode`, you can highlight the selected column.

![/ov/psql/psql02.png](/ov/psql/psql02.png)

This enables horizontal scrolling by column units.

![/ov/psql/psql03.png](/ov/psql/psql03.png)

Furthermore, by specifying `--column-rainbow`, you can change the color of each column. This makes it easier to understand which column corresponds to which value.

Also, by specifying `--align`, you can align column contents. This is a function that aligns columns including cases where columns like CSV are not vertically aligned. This guarantees that columns are aligned, so you can specify a column to always be displayed (header column) or replace that column with `…` (called shrinking).

![/ov/psql/psql04.png](/ov/psql/psql04.png)

Shrinking can also be applied to fixed columns, which is convenient when, for example, you don't need the ID and want to view the title and other items together.

![/ov/psql/psql05.png](/ov/psql/psql05.png)

The operation is to press the `s` key when a column is selected, and it will be shrunk. Shrunk columns are displayed as `…`. Press the `s` key again to release the shrinking.
Furthermore, pressing the `F` key fixes all columns to the left of that column, so they are always displayed even when scrolling horizontally.

![/ov/psql/psql06.png](/ov/psql/psql06.png)

In `ov`, wrap display and non-wrap display can be easily switched with `w`, so shrunk display is possible while using wrap display (column fixing has no meaning since there's no horizontal scrolling).
Also, alternating row colors makes it even easier to read (the `-C` option).

![/ov/psql/psql07.png](/ov/psql/psql07.png)

### Operation Animations

![psql-shrink](/ov/psql/shrink.gif)

### Search

Pagers have search functionality. While it's normal to narrow down displayed rows using query search conditions, you might realize after executing a query that there's too much output to display. When it's troublesome to re-execute the query, using the pager's search function is convenient.

Pressing the `/` key enters search mode. Here, enter the string you want to search for and press Enter, and matching rows will be highlighted.
Furthermore, pressing the `n` key moves to the next matching row, and pressing the `N` key returns to the previous matching row.

#### Filter

Pressing the `&` key enables the filter function. Here, when you enter filter conditions, only matching rows are displayed.
When headers are specified in ov, headers are displayed even after filtering.
Also, when in input mode after pressing the `&` key, pressing the `!` key inverts the search condition. This means only rows that don't match the filter condition are displayed.

### Display on Exit

When you exit the pager, the screen is normally cleared and returns to the screen when the query was executed.
Pagers generally exit with `q`, but if you exit with the `Q` key instead, the screen is not cleared and the last displayed screen remains when exiting.
In `ov`, when you exit with the `Q` key, the last displayed screen remains as is, including search and column highlights, when exiting (this can be changed through settings and shortcut keys).

### Status Line

From v0.42.0, the status line can be hidden.
When `--status-line=false` is specified, the status line is not always displayed and is only shown when input is needed for search, etc.

```console
ov --status-line=false
```

This can also be toggled with the `ctrl+F10` key.

### Header Tips

PostgreSQL headers are one row, so they are specified with `-H1`, but if you don't need to always display the separator line, you can skip the separator line with `--skip-lines 2`.

```console
PSQL_PAGER='ov -F -C --skip-lines 2 -H1 -d "|" --column-rainbow --align'
```

## watch(PostgreSQL 15)

From PostgreSQL 15, `watch` is available. `watch` is a tool that periodically executes specified commands and displays the results. This allows you to monitor database status in real-time.
The following setting is recommended for `PSQL_WATCH_PAGER`.
This continues to display the last section separated by blank lines.

```env
PSQL_WATCH_PAGER='ov --follow-section --section-delimiter "^$"'
```

![watch](/ov/psql/watch1.gif)

## expanded output (\x)

When displaying in expanded output (\x), treating record delimiters as section delimiters makes scrolling by record delimiters easier to see. The following command enables expanded output mode.

```env
PAGER='ov -F --section-delimiter "^-"'
```

![\x](/ov/psql/vf.gif)

You can also combine (\x) and `\watch`.

![watch2](/ov/psql/watch2.gif)

## unaligned (\a)

Even when you specify `\a` on the psql side for unaligned display (not aligning columns), you can align columns by specifying the `--align` option of `ov`. Enable unaligned mode in `psql` as follows.

```env
PSQL_PAGER='ov -F -C -d "|" -H1 --column-rainbow --align'
```

![unalign](/ov/psql/alignment.gif)
