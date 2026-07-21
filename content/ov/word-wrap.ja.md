---
author: "Noboru Saito"
title: "word wrap"
description: "ovで文字単位折り返しと単語単位折り返しを切り替える"
date: 2026-07-21T09:00:00+09:00
tags: ["ov", "wrap"]
images: ["/ov/ov-wordwrap2.png"]
categories: ["ov"]
weight: 93
---

`ov`は行の折り返しモードを切り替えられます。
デフォルトは文字単位の折り返し（`-w` / `-w=char`）で、画面端で単語の途中が分割される場合があります。

![文字単位の折り返し](/ov/ov-wordwrap1.png)

## 折り返しモード

* `-w` または `-w=char`: 画面幅で折り返す（文字単位）。
* `-w=word`: 単語境界で折り返す。
* `-w=none`: 折り返しを無効化する。

```console
ov -w=word README.md
```

word wrapを有効にすると、長文でも単語の途中で分割されにくくなります。

![word wrap](/ov/ov-wordwrap2.png)

起動後はデフォルトキー`Alt+w`でword wrapを切り替えできます。
文字単位の折り返しはデフォルトキー`w` / `W`で切り替えできます。
