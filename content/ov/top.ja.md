---
author: "Noboru Saito"
title: "top"
date: 2023-07-08T15:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 8
---

`top` works fine when started in batch mode (it doesn't work as-is when started normally because it steals keystrokes).
`top`コマンドは自前で画面に合わせて描画するためページャーは必要ありませんが(通常起動するとキーストロークを奪ってしまうためそのままでは動作しません)、
現在の状態を表示するだけで、履歴を表示することはできません。
バッチモードで起動すると表示を繰り返すため、それをページャーで受け取って表示すれば履歴を表示できます。

topを`-b`バッチモードで起動すると先頭が"top"から始まる出力で繰り返し出力されます。その出力をovで受け取り、`--follow-section`で繰り返し表示します。
そうすると`follow section mode`が動作しているときには、最新が表示され、とめればさかのぼって履歴を表示できます。

```console
top -b -c -w512|ov --column-delimiter "/\s+/" --section-delimiter "^top" --column-mode --column-rainbow --follow-section -w=false
```


![ov-top.png](/ov/ov-top.gif)
