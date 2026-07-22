+++
author = "Noboru Saito"
title = "OV - Terminal Pager"
menuPre = "<i class='fab fa-github'></i> "
description = "ov - Feature-rich terminal pager"
images = ["/ov/ov-logo.png"]
tags = ["ov"]
weight = 3
linktitle = "ov"
+++
[![ov](/images/ov-logo.png)](https://github.com/noborus/ov)

<div id="download">
{{% button icon="download" style="info" href="https://github.com/noborus/ov/releases/latest" %}}Download{{% /button %}}
</div>

{{% notice style="important" title="Note" %}}
[<i class="fab fa-github"></i> Please refer to the GitHub repository for **installation and settings.**](https://github.com/noborus/ov)
{{% /notice %}}

## Features

* Quickly opens files larger than memory.
* Supports fixed header lines and columns.
* Optimized for tabular text with column mode and customizable column colors.
* Fully customizable shortcut keys and styles.
* Follow mode for real-time updates (like `tail -f` / `tail -F`).
* Exec mode to display command output dynamically.
* Watch mode to monitor file changes periodically.
* Advanced search: incremental, regex, and filter functions.
* Multi-color highlighting for multiple words.
* Supports Unicode and East Asian Width characters.
* Handles compressed files (gzip, bzip2, zstd, lz4, xz).

## Use cases

Pager can be broadly categorized into two patterns: one that receives and displays text files or standard input, and another that is automatically invoked from within a command.
When displaying text files or standard input, you can specify options when invoking the command.
When invoked from within a command, you can use `ov` as a pager by configuring the command's configuration file or environment variables.
For example, using `git diff` as a pager setting for git or invoking it with `git diff | ov` will result in different displays because the `git` command changes its internal behavior.

{{% children type="card" description="true" sort="weight" %}}
