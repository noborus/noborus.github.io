---
author: "Noboru Saito"
title: "How to use follow mode"
date: 2022-05-27T08:00:00+09:00
description: "How to use follow mode of ov"
tags: ["ov", "tail"]
categories: ["ov"]
weight: 90
---

Output appended data and move it to the bottom line (like tail -f).

ov can perform operations such as search input without stopping follow-mode
(also incremental search!).

```console
docker run chentex/random-logger:latest 100 400 |ov --follow-mode
```

![ov-tail](/ov/ov-tail.gif)
