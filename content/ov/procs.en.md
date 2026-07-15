---
author: "Noboru Saito"
title: "procs"
date: 2023-07-21T06:00:00+09:00
lastmod: 2026-07-15T16:20:00+09:00
description: "Use ov as a pager for procs to better visualize process information."
tags: ["ov", "procs"]
images: ["/ov/ov-procs.png"]
categories: ["ov"]
weight: 8
---
[procs](https://github.com/dalance/procs) is a tool for better process visualization.
It is well known as a modern replacement for `ps`.

As a modern CLI tool, `procs` displays colored output using escape sequences.
When output is piped, `procs` suppresses those escape sequences,
so if the output exceeds screen height it automatically invokes a pager.

Because `procs` lets you configure the pager,
you can set `ov` as the pager to visualize `procs` output more effectively.

Configure it in the [configuration file](https://github.com/dalance/procs#configuration) like this.
It is convenient to set the header line to 1 or 2.

```toml
[pager]
command = "ov -H=1 -w=false -d=│"
```

![procs](/ov/ov-procs.png)
