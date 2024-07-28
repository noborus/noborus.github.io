---
author: "Noboru Saito"
title: "Hide Other Sections"
date: 2024-07-28T8:28:00+09:00
description: "Hide other sections when using sections"
tags: ["ov", "slide", "section"]
categories: ["ov"]
weight: 99
---

By using `--hide-other-section` with `--section-delimiter`, you can hide all sections except the currently displayed top section.

```console
ov --section-delimiter "^#" --hide-other-section README.md
```

![hide-other-section](/ov/hide-section.gif)

## Slide Presentation

This allows you to create slide presentations.

Simply prepare a text file like the one below to enable slide presentation.

[slide-en.txt](/ov/slide-en.txt)

![Slide](/ov/slide-en.gif)

