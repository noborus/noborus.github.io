---
author: "Noboru Saito"
title: "man"
description: "Display man pages with ov"
date: 2023-06-30T06:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 7
---

`ov`はmanページを表示するページャーとしても使えます。
環境変数`MANPAGER`にovを設定してください。

```env
MANPAGER=ov
```

manページでカラフルに表示したいときは`StyleOverStrike`と`StyleOverLine`スタイルによりカスタマイズできます。

![ov-man.png](/ov/ov-man.png)

```yaml
StyleOverStrike:
  Foreground: "aqua"
  Bold: true
StyleOverLine:
  Foreground: "red"
  Underline: true
```
