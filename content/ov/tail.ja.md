---
author: "Noboru Saito"
title: "フォローモードの使い方"
date: 2023-07-21T06:00:00+09:00
description: "ovのフォローモードの使い方"
tags: ["ov", "tail"]
categories: ["ov"]
weight: 90
---

出力されたデータを追加して、最下行に移動します（tail -fのように）。

`ov`はfollowモードで入力検索などの操作が可能です（インクリメンタルサーチも！）。

```console
docker run chentex/random-logger:latest 100 400 |ov --follow-mode
```

![ov-tail](/ov/ov-tail.gif)
