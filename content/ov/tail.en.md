---
author: "Noboru Saito"
title: "how to use follow mode"
date: 2022-05-27T08:00:00+09:00
description: "Learn how to use ov's follow mode for real-time updates."
tags: ["ov", "tail"]
categories: ["ov"]
weight: 90
---

Output appended data and move it to the bottom line (like tail -f).

ov can perform operations such as search input without stopping follow-mode
(also incremental search!).

```console
docker run chentex/random-logger:latest 100 400 |ov --follow-mode
```

![ov-tail](/ov/ov-tail.gif)

## Follow Name

The `--follow-name` option follows a file by name, which is useful when files are rotated (for example, log rotation).

```console
ov --follow-name /var/log/myapp.log
```

## Sticky Follow

Added in v0.44.0, Sticky Follow makes follow mode temporarily pause when you scroll up from the bottom. This lets you inspect past output without losing your place; follow resumes automatically when you return to the bottom.

Visual indicators:

- Enabled by default: follow mode uses Sticky Follow.
- `||` appears at the start of the status line when follow is paused.
- The paused line is highlighted using the `PauseLine` style.

![sticky-follow](/ov/sticky-follow.gif)

To disable Sticky Follow, add the following to your configuration file:

```yaml
General:
	DisableStickyFollow: true
```
