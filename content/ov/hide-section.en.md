---
author: "Noboru Saito"
title: "hide other sections"
date: 2024-07-28T8:28:00+09:00
description: "Learn how to hide other sections when using sections in ov."
tags: ["ov", "slide", "section"]
images: ["/ov/ov-hide-section.gif"]
categories: ["ov"]
weight: 99
---

By using `--hide-other-section` with `--section-delimiter`, you can hide all sections except the currently displayed top section.

```console
ov --section-delimiter "^#" --hide-other-section README.md
```

![hide-other-section](/ov/ov-hide-section.gif)

## Slide Presentation

This allows you to create slide presentations.

Simply prepare a text file like the one below to enable slide presentation.

[slide-en.txt](/ov/slide-en.txt)

![Slide](/ov/slide-en.gif)
