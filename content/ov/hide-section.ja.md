---
author: "Noboru Saito"
title: "他のセクションを隠す"
date: 2024-07-28T8:28:00+09:00
description: "ovのセクションを使用する際に他のセクションを非表示にする方法"
tags: ["ov", "slide", "section"]
images: ["/ov/ov-hide-section.gif"]
categories: ["ov"]
weight: 99
---

`--section-delimiter`を使用して、セクション表示しているときに、`--hide-other-section`を使用すると、現在表示しているトップのセクション以外を隠すことができます。

```console
ov --section-delimiter "^#" --hide-other-section README.md
```

![hide-other-section](/ov/ov-hide-section.gif)

## スライド表示

これによりスライド表示のようなことができます。

以下のようなテキストファイルを用意するだけで、スライド表示ができます。

[slide-ja.txt](/ov/slide-ja.txt)

![スライド](/ov/slide-ja.gif)
