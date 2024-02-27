---
author: "Noboru Saito"
title: "speed of opening large files"
date: 2023-08-10T15:00:00+09:00
description: "speed of opening large files"
tags: ["ov"]
categories: ["ov"]
weight: 14
---

Many pagers start displaying before reading the entire file, so it is difficult to make a simple speed comparison, but if you need to move to the end or need the number of lines (display line numbers, etc.), you need to read the entire file, which can make a difference in speed.

When reading a large file, `ov` records the number of lines and positions so that it can be read again later, so it uses less memory and runs faster.

Therefore, even if you open a large file, you will not be delayed by the operation.
Let's compare it with `less`.

![ov and less](/ov/ov-open-large-file.gif)

`ov` does not read to memory for large files, so it only counts and records, so the count of the total number of lines ends quickly. Once you know the number of lines, you can move to the end immediately, so there is no interruption in operation.

Also, even if you move to the end like `less` before reading all the lines, you can move to the end immediately because you move to the end first and then resume counting.
