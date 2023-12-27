---
author: "Noboru Saito"
title: "execute command"
description: "ov can execute commands and display the output."
date: 2022-05-27T08:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 90
---

Exec mode executes commands from ov. In Exec mode,
`stdout` and `stderr` can be displayed as separate documents.

By using it at the same time as `--follow-all`,
you can display the one that was output last.

For example, while displaying the standard output of make and the error output separately,
you can switch the screen if there is an error.

```console
ov --follow-all --exec -- make
```

![ov-exec](/ov/ov-exec.gif)
