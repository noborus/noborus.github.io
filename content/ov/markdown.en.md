---
author: "Noboru Saito"
title: "View markdown"
description: "ov can also be used as a markdown viewer."
date: 2022-05-24T09:00:00+09:00
tags: ["ov", "markdown"]
categories: ["ov"]
weight: 11
---

`ov` can also be used as a markdown viewer.
Specifying the markdown header as a section delimiter makes it easier to move to the next section.

```console
ov --section-delimiter "^#" README.md
```

![ov-markdown](/ov/ov-markdown.gif)
