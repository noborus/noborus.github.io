+++
author = "Noboru Saito"
title = "ov"
menuPre = "<i class='fab fa-github'></i> "
description = "ov - Feature-rich terminal pager"
tags = "ov"
weight = 3
linktitle = "ov"
+++

# Feature-rich terminal pager

<div id="download">
{{% button icon="download" style="info" href="https://github.com/noborus/ov/releases/latest" %}}Download{{% /button %}}
</div>

[![ov](ov.gif)](https://github.com/noborus/ov)

{{% notice style="note" title="Note" %}}
[<i class="fab fa-github"></i>Please refer to the github  for **installation and settings.**](https://github.com/noborus/ov)
{{% /notice %}}

## Features

`ov` provides more convenient functions by separating text, not just the pager function to display at terminal size.
It is particularly suitable for displaying table-formatted text.

* Can open large files quickly.
* Supports fixed header line display (both wrapped and unwrapped).
* Supports column mode that recognizes columns by delimiter.
* In column mode, there is a column rainbow mode that colors each column.
* Supports fixed-width columns instead of delimiters.
* Supports section division by delimiter, and movement by section.
* Supports header lines of sections, and the header line can be multiple lines.
* Can dynamically switch between wrapping and not wrapping.
* Supports alternate row styling.
* Shortcut keys are customizable.
* Decorative styles are customizable.
* Supports follow mode (like `tail -f`).
* Supports follow mode by file name (like `tail -F`).
* Supports follow section that is displayed when the section is updated.
* Supports following multiple files and switching when updated (follow-all).
* Supports execution of commands that display stdout and stderr separately (exec).
* Supports watch mode that periodically reads files.
* Supports watch in exec mode (equivalent to watch command).
* Supports incremental search and regular expression search.
* Supports multi-color that highlights multiple words individually.
* Better support for Unicode and East Asian widths.
* Supports compressed files (gzip, bzip2, zstd, lz4, xz).

## Use case

{{% children containerstyle="div" description="true" style="h3" depth="1" sort="weight" %}}