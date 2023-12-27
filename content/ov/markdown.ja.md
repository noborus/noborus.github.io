---
author: "Noboru Saito"
title: "markdown表示"
description: "ovはmarkdownビューアとしても使う。"
date: 2023-07-21T06:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 11
---

`ov`はmarkdownビューアとしても使えます。
セクション区切りとしてmarkdownのヘッダを指定することで、次のセクションに移動しやすくなります。

```console
ov --section-delimiter "^#" README.md
```

![ov-markdown](/ov/ov-markdown.gif)
