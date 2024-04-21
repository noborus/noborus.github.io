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
