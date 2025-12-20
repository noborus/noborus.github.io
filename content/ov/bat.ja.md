---
author: "Noboru Saito"
title: "bat"
description: "batはcatの高機能な代替コマンドであり、ファイル内容を表示およびナビゲートするためにovをページャーとして使用します。"
date: 2023-06-30T06:00:00+09:00
lastmod: 2025-12-16T15:00:00+09:00
tags: ["ov", "bat"]
images: ["/ov/ov-bat.png"]
categories: ["ov"]
weight: 9
---

[bat](https://github.com/sharkdp/bat) は、`cat`の高機能な代替コマンドであり、ページャーのように使用できますが、`bat`自体はページャーではなく、内部でページャーを呼び出しています。`bat`は通常`less`を使用しますが、`ov`をページャーとして使用することもできます。
環境変数`PAGER`または`BAT_PAGER`にovを設定してください。

> [!INFO]
> batはv0.26.0から組み込みページャー（builtin pager）をサポートしています。
> `--pager`オプションで組み込みページャーを選択できます。

```console
export BAT_PAGER="ov -F -H3"
```

`bat` を使用するときには折り返さない（`--wrap=never`）で使用することをオススメします。
`bat`で折り返してしまうと、折り返さない表示に切り替えることができません。
`ov`の方で折り返しを行ったほうが、`ov`の機能を活用できます。

```console
bat --wrap=never README.md
```

![bat](/ov/ov-bat.png)
