---
author: "Noboru Saito"
title: "mysql"
date: 2025-06-18T14:20:00+09:00
description: "Using ov as a pager for mysql to improve query result display"
tags: ["ov"]
categories: ["ov"]
weight: 4
---

`ov` can be used as a pager for the mysql client and MySQL Shell.
You can specify it with the `--pager` option for the mysql client.

## Example Configuration

To launch mysql with the `--pager` option from the command line:

```console
mysql --pager='ov -w=f -H3 -F -C -d "|" --column-mode --column-rainbow --align'
```

You can also set it in your `~/.my.cnf` configuration file:

```ini
[client]
pager=ov -w=f -H3 -F -C -d "|" --column-mode --column-rainbow --align
```

For MySQL Shell, use the `--pager` option or set it while mysqlsh is running.
For example, in JS mode, you can set it persistently with:

```js
shell.options.setPersist("pager","ov -H1 --skip-lines 1 -C -w=false -d'|' -F --column-mode --column-rainbow --align")
```

In SQL and Python modes, set it as follows:

```console
\option --persist pager "ov -w=f -H1 --skip-lines 1 -F -C -d '|' --column-mode --column-rainbow --align"
```

## Display Issues with MySQL

When displaying query results in MySQL, the output looks like this. If a pager is set, it shows one screen at a time and waits for further input.

The first three lines are headers, with ASCII art lines. Each column is separated by `|`, and only the joints use `+`.
After the result rows, a line like `333 rows in set (0.0105 sec)` shows the row count and execution time.

![/ov/mysql/000.png](/ov/mysql/000.png)

However, if a row is long, it wraps, making the "table" hard to read. With a pager, you can disable wrapping for a cleaner display, but you may need to scroll horizontally to see all columns.

![/ov/mysql/001.png](/ov/mysql/001.png)

Traditional pagers allow vertical and horizontal scrolling, but scrolling vertically hides column names, and scrolling horizontally may hide important columns like IDs on the left.

To display all columns, you must enable wrapping, but then it's hard to see which value belongs to which column.

For this reason, the `\G` option is sometimes used to display results vertically, but this reduces the number of rows visible per screen.

## Displaying with ov

`ov` provides useful features for displaying table structures like this.

First, it has a header feature so that column names are always visible when scrolling vertically. Since MySQL results have three header lines, specify `-H3`.

Next, specify the column delimiter with `-d "|"`. This tells `ov` that columns are separated by `|`.
With `--column-mode`, you can highlight the selected column.

![/ov/mysql/002.png](/ov/mysql/002.png)

This enables column-wise horizontal scrolling.

![/ov/mysql/003.png](/ov/mysql/003.png)

With `--column-rainbow`, each column is colored differently, making it easier to distinguish columns.

With `--align`, columns are aligned vertically, even if the data is not aligned in the original output (such as CSV). This ensures columns are always aligned. You can fix columns (header columns) to keep them visible when scrolling horizontally by pressing `F`, or shrink columns (replace with `…`) by pressing `s` on the selected column.

![/ov/mysql/004.png](/ov/mysql/004.png)

Shrinking can also be applied to fixed columns. For example, in `information_schema.tables`, TABLE_CATALOG and TABLE_SCHEMA often have the same value, so you may want to focus on TABLE_NAME and related columns.

![/ov/mysql/005.png](/ov/mysql/005.png)

To shrink a column, move the cursor to the desired column (using the arrow keys) and press `s`. The column is replaced with `…`. Press `s` again to unshrink.
Use the arrow keys to select a column, then press `F` to fix all columns to the left of the selected column, so they are always visible when scrolling horizontally.

![/ov/mysql/006.png](/ov/mysql/006.png)

`ov` allows you to easily toggle wrapping with `w`, so you can combine wrapping and shrinking (fixed columns have no effect when wrapping is enabled, because all columns are displayed in a single line and horizontal scrolling is disabled).
You can also alternate row colors for better readability with the `-C` option.

![/ov/mysql/007.png](/ov/mysql/007.png)

### Animation of Operations

![ov-mysql-shrink](/ov/mysql/ov-mysql2.gif)

### Search

The pager has a search function. Normally, you narrow down the displayed rows by specifying search conditions in your query, but sometimes you may realize there are too many results only after executing the query. If re-running the query is troublesome, the pager's search function is convenient.

Press the `/` key to enter search mode. Here, enter the string you want to search for and press Enter; the matching rows will be highlighted.
Furthermore, pressing the `n` key moves to the next match, and pressing the `N` key moves to the previous match.

#### Filter

Press the `&` key to enable the filter function. Here, enter the filter condition, and only the matching rows will be displayed.
If a header is specified in ov, the header will be copied to the filter side, and only the matching rows will be shown.
Also, when in input mode after pressing the `&` key, pressing the `!` key will invert the filter condition. In other words, only rows that do **not** match the filter condition will be displayed.

### Display on Exit

When you exit the pager, the screen is usually cleared and returns to the screen shown when the query was executed.
Generally, if you exit with `Q` instead of `q`, the screen is not cleared and the last displayed screen remains.
In `ov`, exiting with the `Q` key leaves the last displayed screen, including search highlights and column highlights, as it is (this can be changed by settings or shortcut keys).

### Header Tips

MySQL headers are three lines, so use `-H3`. Two of them are just separator lines.
If you don't need to always show the separator lines, use `-H1` and `--skip-lines 1` to skip the first line.

```console
ov -w=f --skip-lines 1 -H1 -F -C -d "|" --column-mode --column-rainbow --align
```

![ov-mysql.gif](/ov/ov-mysql.gif)
