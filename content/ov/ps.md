---
author: "Noboru Saito"
title: "Use ov with ps"
date: 2023-05-31T09:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 7
---

The ps output is properly columned.
`--column-width` can divide columns better than spaces.

```shell
ps aux | ov --column-width --column-rainbow -H1
```

![ps](/ov/ps-ov.png)
