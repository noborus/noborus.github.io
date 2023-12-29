---
author: "Noboru Saito"
title: "procs"
date: 2023-07-21T06:00:00+09:00
description: "procsのページャーとしてovを使用する"
tags: ["ov", "procs"]
categories: ["ov"]
weight: 8
---

[procs](https://github.com/dalance/procs) のページャーとしても使用可能です。

[configuration file](https://github.com/dalance/procs#configuration) に以下のように設定します。
ヘッダー行を1または2で設定すると便利です。

```toml
[pager]
command = "ov -H=1 -w=false -d=│"
```
