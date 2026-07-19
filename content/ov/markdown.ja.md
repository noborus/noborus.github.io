---
author: "Noboru Saito"
title: "markdown表示"
description: "ovを使用してMarkdownファイルを表示およびナビゲートする"
date: 2023-07-21T06:00:00+09:00
lastmod: 2024-07-19T16:00:00+09:00
tags: ["ov", "markdown"]
images: ["/ov/ov-markdown.png"]
categories: ["ov"]
weight: 11
---
![ov-markdown](/ov/ov-markdown.png)

`ov`はmarkdownビューアーとしても使えます。
セクション区切りとしてmarkdownのヘッダーを指定することで、次のセクションに移動しやすくなります。

また、サイドバーにセクションの見出しを表示することで、目次のように使うこともできます。

```console
ov --section-delimiter "^#" --sidebar-mode=sections README.md
```

![ov-markdown](/ov/ov-markdown.gif)
