---
author: "Noboru Saito"
title: "ovでファイル監視（ウォッチ）"
date: 2023-07-21T06:00:00+09:00
description: "ovのウォッチモードを使用してファイルの変更をリアルタイムで監視する"
tags: ["ov", "watch"]
images: ["/ov/ov-watch.png"]
categories: ["ov"]
weight: 9
---
![watch](/ov/ov-watch.png)

ovはウォッチモードをサポートしています。

ウォッチモードとは、指定した時間間隔でファイルを読み込むモードです。
単純にファイルを読み直すのではなく、ファイルが追記されたかのようにバッファに貯めていきます。
これにより内容が変わっていくファイルの履歴を追跡することができます。

例えば proc/meminfo を1秒ごとに読み込む場合は以下のようにします。

```console
ov --watch 1 /proc/meminfo
```

![watch](/ov/ov-watch.gif)

ウォッチモードは自動的にfollow-section "\f"を設定します。
これによりセクション間の移動で追記された内容を確認することができます。
