---
author: "Noboru Saito"
title: "filter search"
date: 2024-04-22T08:00:00+09:00
description: "How to filter search results"
tags: ["ov", "search", "filter"]
categories: ["ov"]
weight: 91
---

How to filter search results

## Display only matching lines

Typing `&` after forward search (`/`) or backward search (`?`) puts you in search term input mode.
The search input mode inherits settings such as "regular expressions" and "case sensitivity".

A "new document" is created that displays only the lines that match the search term you entered, and you move to that document.

If you specified a header line at this time, the header line will also be displayed.

You can switch documents with `[` and `]` as you would with multiple files open.

Since the line numbers are linked, if you move from the lines displayed by the filter to the original document with `[`, you will move to the corresponding line.

![filter](/ov/ov-filter.gif)

## Display non-matching lines

When you are in search term input mode with `&`, typing `!` toggles to display non-matching lines (Non-match) mode.

## Ending filter search

To close all documents created by filter search, press `K` (uppercase).
You can also close only that document with `ctrl+k`.

## Combining filters with `--quit-if-one-screen`

When used in combination with `--quit-if-one-screen`, if the filter fits on one screen, it will exit as is.
If `--header` is specified, the header line will also be displayed.

When used together, it can be used as a convenient `grep`.

```console
ps aux|ov --quit-if-one-screen --header --filter "postgres"
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
postgres    1589  0.0  0.0 221992 29952 ?        Ss   Jul24   0:05 /usr/lib/postgresql/14/bin/postgres -D /var/lib/postgresql/14/main -c config_file=/etc/postgresql/14/main/postgresql.conf
postgres    1624  0.0  0.0 222104 11336 ?        Ss   Jul24   0:00 postgres: 14/main: checkpointer 
postgres    1626  0.0  0.0 221992  8904 ?        Ss   Jul24   0:01 postgres: 14/main: background writer 
postgres    1627  0.0  0.0 221992 11464 ?        Ss   Jul24   0:01 postgres: 14/main: walwriter 
postgres    1628  0.0  0.0 222560  9928 ?        Ss   Jul24   0:02 postgres: 14/main: autovacuum launcher 
postgres    1629  0.0  0.0  76728  7112 ?        Ss   Jul24   0:02 postgres: 14/main: stats collector 
postgres    1631  0.0  0.0 222420  8904 ?        Ss   Jul24   0:00 postgres: 14/main: logical replication launcher 
noborus   747819  0.0  0.0 1603756 7552 pts/0    Rl+  15:50   0:00 ov -H1 --filter postgres --quit-if-one-screen
```
