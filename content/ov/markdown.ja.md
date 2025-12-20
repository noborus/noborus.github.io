---
author: "Noboru Saito"
title: "markdown表示"
description: "ovを使用してMarkdownファイルを表示およびナビゲートする"
date: 2023-07-21T06:00:00+09:00
tags: ["ov", "markdown"]
images: ["/ov/ov-markdown.gif"]
categories: ["ov"]
weight: 11
---

`ov`はmarkdownビューアーとしても使えます。
セクション区切りとしてmarkdownのヘッダーを指定することで、次のセクションに移動しやすくなります。

```console
ov --section-delimiter "^#" README.md
```

![ov-markdown](/ov/ov-markdown.gif)
