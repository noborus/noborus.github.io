---
author: "Noboru Saito"
title: "watch files with ov"
date: 2022-05-22T18:00:00+09:00
lastmod: 2026-07-19T15:00:00+09:00
description: "Monitor file changes in real-time using ov's watch mode."
tags: ["ov", "watch"]
images: ["/ov/ov-watch.png"]
categories: ["ov"]
weight: 9
---

ov supports watch mode, which reads files at regular intervals.
The file is added every specified time.

```console
ov --watch 1 /proc/meminfo
```

![watch](/ov/ov-watch.gif)

At that time, add formfeed (\f) instead of EOF.
watch mode automatically sets follow-section "\f".
