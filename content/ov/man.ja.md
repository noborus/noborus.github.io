---
author: "Noboru Saito"
title: "man"
description: "manページをナビゲートおよび読むためにovをページャーとして使用する"
date: 2023-06-30T06:00:00+09:00
lastmod: 2026-07-28T11:00:00+09:00
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

ただし、`StyleOverStrike`と`StyleOverLine`は、`groff`が重ねうち（overstrike/overline）方式で出力している場合にのみ有効です。
新しいバージョンの`groff`はデフォルトでANSIエスケープシーケンスを使用するため、この方式では動作しません。
groffに従来の重ねうち方式を使用させるには、`MANROFFOPT`環境変数を設定してください。

```env
MANROFFOPT="-c"
```

## サイドバー表示時の画面幅

`man`ページは、先に画面幅で`roff`により整形されており、サイドバーをそのまま表示したときには、内容が画面幅に収まらない場合があります。
その場合は、`alt+u`でサイドバーの表示/非表示を切り替えることで、内容が画面幅に収まるように調整できます。

サイドバーを常に表示したい場合は、環境変数`MANWIDTH`を設定することで、`man`ページの整形幅を指定できます。
サイドバーはデフォルトでは、画面幅の20%を使用します。そのため、以下のようにして`MANWIDTH`を80%に設定すると、サイドバーを表示しても内容が画面幅に収まるようになります。

```env
MANWIDTH=$(( $(tput cols) * 80 / 100 ))  man man
```

画面幅が広い場合は、全部使用せずに、`MANWIDTH`に固定幅をあらかじめ設定しておくのも良いでしょう。

```env
export MANWIDTH=80
man man
```
