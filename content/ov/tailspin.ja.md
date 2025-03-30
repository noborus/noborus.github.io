---
author: "Noboru Saito"
title: "tailspin"
description: "Use ov as a pager for tailspin to enhance the display of log files."
date: 2025-03-30T09:00:00+09:00
tags: ["ov", "tailspin"]
categories: ["ov"]
weight: 15
---


[tailspin](https://github.com/bensadeh/tailspin) はversion 5.0.0からページャーを設定できるようになりました。

環境変数`TAILSPIN_PAGER`にovを設定してください。

```sh
export TAILSPIN_PAGER="ov -f [FILE]"
tspin  example-logs/example1
```

![tailspin](/ov/tailspin.png)
