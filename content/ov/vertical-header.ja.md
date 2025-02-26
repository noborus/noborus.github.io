---
author: "Noboru Saito"
title: "縦ヘッダーとヘッダー列"
date: 2025-02-26T10:00:00+09:00
description: "縦ヘッダーとヘッダー列による固定表示"
tags: ["ov"]
categories: ["ov"]
weight: 92
---
## Vertical Header

ovでは`veritcal header`（または`-y`）で文字幅分を指定できます。
先頭から`vertical header`で指定された幅分が常に表示されるようになり、スクロールしても隠れなくなります。

```console
ov --vertical-header 10 README.md
```

指定する幅がまだわからないときには、`--ruler`オプションを使用すると目盛りが表示されます。

```console
ov --ruler README.md
```

![ruler](/ov/ruler.png)

この後、デフォルトキーで`y`によりvertical-headerの入力モードで幅の値を入れれば、同様に指定できます。

![vertical-headerの入力](/ov/vh.png)

## Header Column

`column mode`になっているときには、文字幅ではなく、列を指定してヘッダー列として固定できます。
`--header-column=3`（または`-Y=3`）のように指定します。

```console
ov --header-column=3 --wrap=false --align --column-mode --column-rainbow testdata/MOCK_DATA.csv
```

![header-column](/ov/header-column.gif)

デフォルトキー`Y`で列の指定ができますが、さらに列にカーソルがある状態で`F`キーにより、そこまでの列をヘッダー列として指定できます。

`--align`オプションは必須ではありませんが、スクロール時に表示が隠れてしまうことがあるため、なるべく付けることをオススメします。
また、ヘッダー列であっても`shrink`が可能です。
