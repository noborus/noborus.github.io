---
author: "Noboru Saito"
title: "man"
description: "manページをナビゲートおよび読むためにovをページャーとして使用する"
date: 2023-06-30T06:00:00+09:00
lastmod: 2026-07-17T09:00:00+09:00
tags: ["ov", "man"]
images: ["/ov/ov-man.png"]
categories: ["ov"]
weight: 7
---

![ov-man.png](/ov/ov-man.png)

伝統的なUnix系のシステムでは、`man`コマンドは、システム上のコマンドやプログラムのマニュアルページを表示するための標準的なツールです。`man`コマンドは、通常、ページャーを使用してマニュアルページを表示します。デフォルトでは、`less`が使用されます。
`ov`は、`man`ページを表示するためのページャーとしても使用できます。

環境変数`MANPAGER`に`ov`を設定してください。おすすめな設定は以下の通りです。

```env
MANPAGER="ov --section-delimiter '^[^\s]' --section-header --sidebar-mode=sections"
```

`man`ページは、通常、複数のセクションに分かれています。`ov`は、セクションごとにナビゲートするための便利な機能を提供します。`--section-delimiter`オプションを使用して、セクションの区切りを正規表現で指定できます。`--section-header`オプションを使用すると、各セクションのヘッダーが強調表示されます。さらに、`--sidebar-mode=sections`オプションを使用すると、サイドバーにセクションのリストが表示され、簡単にナビゲートできます。

サイドバーは、起動後も`alt+u`で表示/非表示を切り替えることができます。

## カラフル表示

manページでカラフルに表示したいときは`StyleOverStrike`と`StyleOverLine`スタイルによりカスタマイズできます。設定の例は以下の通りです。

```yaml
StyleOverStrike:
  Foreground: "aqua"
  Bold: true
StyleOverLine:
  Foreground: "red"
  Underline: true
```

ただし、`StyleOverStrike`と`StyleOverLine`は、groffが重ねうち（overstrike/overline）方式で出力している場合にのみ有効です。
新しいバージョンのgroffはデフォルトでANSIエスケープシーケンスを使用するため、この方式では動作しません。
groffに従来の重ねうち方式を使用させるには、`MANROFFOPT`環境変数を設定してください。

```env
MANROFFOPT="-c"
```
