+++
author = "Noboru Saito"
title = "trdsql"
date = "2023-06-10"
weight = 2
+++

This is the document of [trdsql](https://github.com/noborus/trdsql), a tool that can execute SQL on CSV, LTSV, JSON, TBLN files.

It was originally written as [trdsql Advent Calendar 2019](https://qiita.com/advent-calendar/2019/trdsql). I am adding it afterwards.

## overview

[trdsql](https://github.com/noborus/trdsql "GitHub/noborus/trdsql") is a CLI tool that executes SQL on text in table format.
A tabular format is data that consists of rows and columns, such as:

| | 1 column | 2 columns |
|:---:|:----|:----|
| **1 row** | a1 | a2 |
| **2 lines** | b1 | b2 |

Since the results can be output in various formats, it can also be used for format conversion of tabular data.

## table of contents

{{% children sort="weight" %}}
