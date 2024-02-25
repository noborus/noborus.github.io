---
author: "Noboru Saito"
title: "大きなファイルを開く速度"
date: 2023-08-10T15:00:00+09:00
description: "ovは大きなファイルを開く速度が速い"
tags: ["ov", "speed"]
categories: ["ov"]
weight: 14
---

多くのページャーはファイルを全部読み込む前に表示を開始するため、単純な速度比較は難しいですが、最後尾に移動したり行数が必要な処理（行番号の表示等）をする場合は、ファイル全体を読む必要があり速度に差が出ます。

ovは、大きなファイルを読み込むときには、ファイルの先頭以外は行数と位置を記録して後で読み直せるようにするため、メモリ使用量を抑えて、速度も速く動作します。
また、ファイル操作は別のゴルーチンがおこなうため、ファイルの読み込みが発生しても操作がブロックされることはありません。

そのため、大きなファイルを開いても操作によって待たされることが無いようになっています。

`less`と比較してみます。

![ov and less](/ov/open-large-file.gif)

`ov`は、大きなファイルではメモリに読み込まずにカウントと記録だけおこなうため、全行数のカウントが早く終わります。行数が把握できるとそこからすぐに最後尾に移動できるため操作が止まることはありません。

また、全行数を読み込む前であっても`less`のように最後尾に移動する場合は、先に最後尾に移動してからカウントを再開するため、最後尾に移動するのも即座に可能です。