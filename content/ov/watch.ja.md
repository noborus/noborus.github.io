---
author: "Noboru Saito"
title: "ovでファイル監視（ウォッチ）"
date: 2023-07-21T06:00:00+09:00
description: "ovでファイル監視（ウォッチ）"
tags: ["ov", "watch"]
categories: ["ov"]
weight: 9
---

ovはウォッチモードをサポートしています。ウォッチモードは一定間隔でファイルを読み込みます。
ファイルは指定した時間ごとに追加されます。

```console
ov --watch 1 /proc/meminfo
```

![watch](/ov/watch.gif)

日本語：その時、EOFの代わりにformfeed(\f)を追加します。
ウォッチモードは自動的にfollow-section "\f"を設定します。
