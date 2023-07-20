---
author: "Noboru Saito"
title: "複数の単語を複数の色でハイライト"
date: 2023-07-21T06:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 13
---

`ov`は複数の単語を複数の色でハイライトできます。

```console
ov --multi-color "ERROR.*,WARN,INFO,DEBUG,not,^.{24}" access.log
```

![multi-color.png](/ov/multi-color.png)

## 入力方法

正規表現をスペースで区切って入力します。
スペースを含む場合は、引用符で囲みます。

* `.`（デフォルトキー） でmulticolorの入力モードになります。

```text
ERROR.* WARN "error is"
```

## カスタマイズ

色（スタイル）はカスタマイズ可能です。
[github customize](https://github.com/noborus/ov#6-customize)を参照してください。

```yaml
StyleMultiColorHighlight:
  - Foreground: "red"
  - Foreground: "aqua"
  - Foreground: "yellow"
  - Foreground: "fuchsia"
  - Foreground: "lime"
  - Foreground: "blue"
  - Foreground: "grey"
```
