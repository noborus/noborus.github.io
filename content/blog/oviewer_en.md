+++
author = "Noboru Saito"
title = "Oviewer"
date = "2020-04-25T16:50:00+09:00"
description = ""
tags = [
    "ov",
    "terminal pager",
]
categories = [
    "ov",
]
+++

Introduction to [OV - Oviewer](https://github.com/noborus/ov).

## Install

You can also download binaries from the [ov](https://github.com/noborus/ov) release,
but for now it is still recommended to go get and download the latest version.

```console
go get -u github.com/noborus/ov
cd ov
make install
```

## Features

oviewer is a terminal pager like `less` or `more`.

* Compressed (gzip, bzip2, zstd, lz4, xz) files can be displayed as they are.
* Better Unicode support. Can also display combined characters that can be displayed in the terminal (if fonts are available).
* Better wide (full-width) character support.
* Can be fixed by specifying the number of rows in the header.
* Ability to switch between wrapping and non-wrapping lines.
* Background color can be added to every 1 lines.
* Supports display from psql and mysql.
* The contents of the current screen can be exported at the end.

The goal is to use the PAGER environment variable without problems.

Only UTF-8 text is currently supported.

Currently, using man as a pager is problematic.
MANPAGER must specify another pager.

### Features of the Implementation

Depends on the terminal that [tcell](https://github.com/gdamore/tcell) supports.
Memory is stored in memory, so the memory is often used.
Not for updated log files.

## Usage

The command name is `ov`.

Basically, specify the file name to start.

```console
ov filename
```

Another use is to use a pipe to accept input from standard input.

```console
cat filename|ov
```

These are the command line options:
(Many of the options can be toggled from the key after startup).

```console
$ ov --help
Oviewer is a feature rich pager(such as more/less).
It supports various compressed files(gzip, bzip2, zstd, lz4, and xz).

Usage:
  ov [flags]

Flags:
  -C, --alternate-rows            color to alternate rows
  -i, --case-sensitive            case-sensitive in search
  -d, --column-delimiter string   column delimiter (default ",")
  -c, --column-mode               column mode
      --config string             config file (default is $HOME/.oviewer.yaml)
      --debug                     debug mode
  -X, --exit-write                output the current screen when exiting
  -H, --header int                number of header rows to fix
  -h, --help                      help for ov
  -F, --quit-if-one-screen        quit if the output fits on one screen
  -x, --tab-width int             tab stop width (default 8)
  -v, --version                   display version information
  -w, --wrap                      wrap mode (default true)
```

### Direct access to compressed files

You can view compressed files as they are.

```console
ov test.csv.zst
```

It works even from a pipe because it looks at the magic number at the beginning of the file,
regardless of the extension.

```console
cat test.csv.zst|ov
```

## Using from psql

Supports behavior as a pager called from [psql](https://www.postgresql.jp/document/current/html/app-psql.html).

psql uses pager when the environment variable `PAGER` or `PSQL_PAGER`(from PostgreSQL Ver.11.0) is set.

It is recommended to write ~/.psqlrc as follows.

```.psqlrc
\setenv PAGER 'ov -H2 -w=f -F -C -d "|"'
```

The following can be switched with the key after starting.

### Wrap / Do not wrap (`w`)

![wrap/nowrap](https://raw.githubusercontent.com/noborus/oviewer/master/docs/ov-wrap.gif)

### Turn on/off background color for each line (`C`)

![color enable/disable](https://raw.githubusercontent.com/noborus/oviewer/master/docs/ov-color.gif)

### Number of header lines to fix (`H`)

Enter the input mode, so enter the number of lines.

![header](https://raw.githubusercontent.com/noborus/oviewer/master/docs/ov-header.gif)

### Column mode (`c`)

It becomes possible to select it as a column enclosed by the delimiter specified by (`d`).
The selected column will be highlighted.
The behavior changes with wrap / nowap, and in nowrap mode, scroll horizontally to display the selected column.

![column](https://raw.githubusercontent.com/noborus/oviewer/master/docs/ov-column.gif)

## Use from mysql

You can also use it as PAGER used from mysql as well.

```console
mysql -pager='ov -H3 -w=f -C -d "|"'
```

You can also write PAGER settings in $(HOME)/.My.cnf.

```$(HOME)/.my.cnf
[client]
pager=ov -H3 -w=f -C -d "|"
```

## Command output pager with header

For example, make the output of ` ps ` easier to read.

```console
ps aux|ov -H1 -C -w=f
```

![ps-ov.png](../ps-ov.png)

This is a display example of the Debian/Ubuntu package list.

```console
dpkg -l|ov -H5 -w=f -C
```

![dpkg-ov.png](../dpkg-ov.png)

You can make it easier to see after starting up, even if you start ov without options.
