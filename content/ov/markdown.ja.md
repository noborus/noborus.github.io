---
author: "Noboru Saito"
title: "markdown表示"
description: "ovを使用してMarkdownファイルを表示およびナビゲートする"
date: 2023-07-21T06:00:00+09:00
lastmod: 2026-07-20T15:45:00+09:00
tags: ["ov", "markdown"]
images: ["/ov/ov-highlight1.png"]
categories: ["ov"]
weight: 11
---
![ov-markdown](/ov/ov-markdown.png)

`ov`はmarkdownビューアーとしても使えます。
Markdownの見出しをセクションとして扱うと、長いREADMEや設計書をターミナルで確認しやすくなります。

## 見出しをセクションとして表示

`--section-delimiter`には、セクションの開始行を表す正規表現を指定します。
Markdownの見出しを対象にするには`^#`を指定します。見出し行はセクションヘッダーとして扱われ、スクロール中も次の見出しに到達するまで画面上部に表示されます。

```console
ov --section-delimiter "^#" README.md
```

`Space`で次のセクション、`^`で前のセクションへ移動できます。見出しレベルを限定したい場合は、たとえば`^## `のように指定します。

## サイドバーを目次として使う

`--sidebar-mode=sections`を指定すると、サイドバーに検出した見出しの一覧を表示できます。長い文書でも、目次から目的のセクションへ移動できます。

```console
ov --section-delimiter "^#" --sidebar-mode=sections README.md
```

起動後は、デフォルトの`Alt+u`でもセクション一覧を表示できます。

現在のセクションだけに集中したいときは、`--hide-other-section`を組み合わせます。詳しくは[他のセクションを隠す](/ov/hide-section/)を参照してください。

```console
ov --section-delimiter "^#" --hide-other-section README.md
```

![ov-markdown](/ov/ov-markdown.gif)

## ワードラップ

`--word-wrap`を指定すると、長い行が画面幅に合わせて折り返されます。

```console
ov --section-delimiter "^#" --wrap=word README.md
```

詳細は[word-wrap](/ov/word-wrap/)を参照してください。
