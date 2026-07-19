---
author: "Noboru Saito"
title: "view markdown"
description: "View and navigate markdown files using ov as a markdown viewer."
date: 2022-05-24T09:00:00+09:00
lastmod: 2024-07-19T16:00:00+09:00
tags: ["ov", "markdown"]
images: ["/ov/ov-markdown.png"]
categories: ["ov"]
weight: 11
---
![ov-markdown](/ov/ov-markdown.png)

`ov` can also be used as a markdown viewer.
Specifying the markdown header as a section delimiter makes it easier to move to the next section.

By displaying the section headings in the sidebar, you can also use it like a table of contents.

```console
ov --section-delimiter "^#" README.md
```

![ov-markdown](/ov/ov-markdown.gif)
