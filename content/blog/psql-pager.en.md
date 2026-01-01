---
title: "Configuring PAGER in psql"
author: "Noboru Saito"
tags: ["psql", "pager", "less", "more", "pspg", "ov", "postgresql", "english"]
images: ["/blog/psql-ov.png"]
categories: ["psql"]
date: 2025-11-16T20:00:00+09:00
---

## Configuring PAGER in psql

### Turning PAGER on/off

In psql, you can set the PAGER to on/off/always using the `pset` value. When set to always, the PAGER will always start even if the output fits on the screen when psql starts.

To temporarily turn off PAGER with an option, use the following (you can specify `on` or `always` instead of `off`):

```console
psql -P pager=off
```

Setting it in the `.psqlrc` file will keep PAGER off permanently.

```~/.psqlrc
\pset pager off
```

To turn off PAGER after startup (executed after connecting with psql), use the `\pset` command:

```
# \pset pager off
```

Running `\pset pager` without arguments toggles it, switching between on/off with each execution.

```
# \pset pager
Pager usage is off.
# \pset pager
Pager is used for long output.
```

#### Additional feature from PostgreSQL 15.0

From PostgreSQL 15.0, `pager_min_lines` has been added, allowing you to specify how many lines must be exceeded before the PAGER starts when output doesn't fit on the screen. The default is `0`, which starts the PAGER when output doesn't fit on the screen (specifying a number of lines that fits on screen will be ineffective).
`pset pager=always` takes priority over `pager_min_lines`.
This is useful when you only want to start the PAGER if you cannot scroll back in the terminal.

```console
psql -P pager_min_lines=10000
```

Since it's a `pset` value, it can also be set in `.psqlrc` or executed after startup.

```~/.psqlrc
\pset pager_min_lines 10000
```

```
# \pset pager_min_lines 10000
```

The `pset` values are displayed when you run `\pset`. The pager value is off=0, on=1, always=2.

```
# \pset
border                   1
columns                  0
csv_fieldsep             ','
expanded                 off
fieldsep                 '|'
fieldsep_zero            off
footer                   on
format                   aligned
linestyle                ascii
null                     ''
numericlocale            off
pager                    1
pager_min_lines          10000
recordsep                '\n'
recordsep_zero           off
tableattr
title
tuples_only              off
unicode_border_linestyle single
unicode_column_linestyle single
unicode_header_linestyle single
```

### Changing PAGER

In psql, you can change the PAGER using the `PSQL_PAGER` or `PAGER` environment variable. Since `PAGER` is a general-purpose environment variable used by commands other than psql, use `PSQL_PAGER` if you want to apply it only to psql.
If neither `PSQL_PAGER` nor `PAGER` environment variables are set, `more` or `less` becomes the default PAGER. If `less` is available, `less` is prioritized.

```console
PSQL_PAGER=less psql
```

Since you can set environment variables in the `.psqlrc` file, adding the following configuration will permanently change the PAGER.

```~/.psqlrc
\setenv PSQL_PAGER less
```

### Types of PAGERs

PAGERs suitable for `psql` include:

* [less](https://www.greenwoodsoftware.com/less/)
* [pspg](https://github.com/okbob/pspg)
* [ov](https://github.com/noborus/ov)

`more` is available in many environments, but I don't recommend it as a PAGER for psql because it's difficult to use.

#### [less](https://github.com/gwsw/less)

`less` is a long-standing PAGER and can be easily installed as it's usually packaged in distributions.
`less` is stable and hasn't changed much in development over the years, but recently a header option was added.

In version 600, an option to display headers in `less` was added, so if you have that version or later, you can configure it as follows to fix the display of psql headers (column names):

```console
PSQL_PAGER="less --header 2" psql
```

`--header 2` is an option to display 2 header lines fixed. When using the `--header` option, it switches to a mode that doesn't wrap lines (equivalent to `-S`).

![psql-less](../psql-less.png)

Also, like `--header 2,14`, if you pass a second argument, in addition to fixing the 2 header lines, when scrolling horizontally, the left side up to width 14 is fixed and can be scrolled. However, since the column width varies by table, it's not desirable to pass this as an option.
When displaying with `less`, if you type `--header`, it switches to input mode, and if you enter a character count at that time, it will be displayed fixed at that character count.

```
Header lines: 2,14
```

However, since you need to specify the width by character count, it's not very user-friendly.

#### [pspg](https://github.com/okbob/pspg)

`pspg` is a PAGER made for psql and has convenient features for displaying tables. It converts psql output to ASCII table format and displays column names as headers. Also, columns can be easily fixed by entering number keys (1 is specified by default, so the leftmost column is fixed).

`pspg` has many themes available and can be changed. You can check `pspg` themes with `pspg --themes`.

```console
PSQL_PAGER=pspg psql
```

![psql-pspg](../psql-pspg.png)

#### [ov](https://github.com/noborus/ov)

`ov` is a general-purpose PAGER I created, which started development with psql use in mind, but since options and keys can switch necessary functions for other purposes, it can display appropriately for psql while being general-purpose.

```console
PSQL_PAGER='ov -C -d "|" -H1 --column-mode --column-rainbow' psql
```

By specifying the number of header lines ('-H1'), the header line is displayed fixed. Since styles can be specified for header lines, you don't need to treat the delimiter ('-') as a header, so only 1 line is used.
Also, by specifying Column Mode with a delimiter ('-d "|"'), column selection highlighting is possible. Additionally, adding `--column-rainbow` allows each column to be displayed in a different color.

![psql-ov](../psql-ov.png)

Since there is `--column-mode`, both header lines and wrapped display can be used simultaneously.

When `ov` recognizes columns by delimiter, they don't need to be vertically aligned, so there's no problem even if you switch alignment with `\a` as follows.

![psql-ov2](../psql-ov2.png)

For details, please refer to [ov's psql page](/ov/psql/).

### PSQL_WATCH_PAGER

From PostgreSQL 15.0, `PSQL_WATCH_PAGER` was added separately from `PSQL_PAGER`.

psql has a `\watch` command that can periodically execute the previously executed SQL and display the results. `PSQL_PAGER` is not used for this display. This is because normally the PAGER cannot receive the next SQL results until it exits, making it incompatible with `\watch`'s automatic execution.

However, if the PAGER side can continue to receive `\watch` results without exiting, the `\watch` results can be displayed in the PAGER. `PSQL_WATCH_PAGER` was added for this purpose.

`pspg` and `ov` can be specified for `PSQL_WATCH_PAGER`.

#### pspg WATCH support

When specifying pspg in `PSQL_WATCH_PAGER`, add the `--stream` option.

```console
PSQL_WATCH_PAGER='pspg --stream' psql
```

```sql
SELECT * FROM pg_stat_activity;
\watch 1
```

With `\watch`, the pg_stat_activity results are updated every second.

![psql-pspg-stream](../psql-pspg-stream.png)

#### ov WATCH support

When specifying ov in `PSQL_WATCH_PAGER`, add the `--follow-section` option and `--section-delimiter "^$"`.

`--follow-section` is an ov option that enables follow mode with sections delimited by the delimiter specified in `--section-delimiter`.
`--section-delimiter` is an ov option, and `^$` specifies blank lines as delimiters.

In other words, it scrolls and displays up to the position where there is a blank line, then repeats scrolling and displaying up to the position where there is a blank line.

```console
PSQL_WATCH_PAGER='ov -w=f --follow-section --section-delimiter "^$" -d "|" --column-mode --column-rainbow' psql
```

Furthermore, you can specify the section start position with section-start(`alt+s`). When you specify a section start position, it repeats scrolling and displaying from that position.

![psql-ov-watch](../psql-ov-watch.png)
