+++
author = "Noboru Saito"
title = "trdsql"
menuPre = "<i class='fab fa-github'></i> "
description = "trdsql - Execute SQL on CSV, LTSV, JSON, YAML, TBLN and etc."
weight = 2
+++

<div id="download">
{{% button icon="download" style="info" href="https://github.com/noborus/trdsql/releases/latest" %}}Download{{% /button %}}
</div>

This is the document of [trdsql](https://github.com/noborus/trdsql), a tool that can execute SQL on CSV, LTSV, JSON, TBLN files.

## overview

[trdsql](https://github.com/noborus/trdsql "GitHub/noborus/trdsql") is a CLI tool that executes SQL on text in table format.
A tabular format is data that consists of rows and columns, such as:

| | 1 column | 2 columns |
|:---:|:----|:----|
| **1 row** | a1 | a2 |
| **2 lines** | b1 | b2 |

Since the results can be output in various formats, it can also be used for format conversion of tabular data.

## table of contents

{{% children containerstyle="div" style="div" depth="1" sort="weight" %}}