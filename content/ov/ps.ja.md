---
author: "Noboru Saito"
title: "ps"
date: 2023-07-08T15:00:00+09:00
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

![ps](/ov/ps-ov.png)
