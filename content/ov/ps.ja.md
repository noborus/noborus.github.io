---
author: "Noboru Saito"
title: "ps"
date: 2024-11-11T08:00:00+09:00
description: "psのページャーとしてovを使用する"
tags: ["ov", "ps"]
categories: ["ov"]
weight: 7
---

psの出力を列区切りで表示できます。
`--column-width`を使用するとスペース区切りよりも賢く列を認識できます。

```shell
ps aux | ov --column-width --column-rainbow -H1
```

![ps](/ov/ov-ps.png)

さらにv.37.0からは`--align`オプションをつけることで、列の幅を揃えることができます。

`align`は`alt+F`（デフォルトキー）によっても変更できます。

```shell
ps aux | ov --column-width --column-rainbow -H1 --align
```

![unalign/align](/ov/ov-ps.gif)
