---
author: "Noboru Saito"
title: "bat"
date: 2023-06-30T06:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 9
---

[bat](https://github.com/sharkdp/bat) のページャーとしてもサポートしています。

環境変数`PAGER`または`BAT_PAGER`にovを設定してください。

```console
export BAT_PAGER="ov -F -H3"
```

`bat` を使用するときには折り返さない(`--wrap=never`)で使用することをおすすめします。
`bat`で折り返してしまうと、折り返さない表示に切り替えることができません。
`ov`の方で折り返しを行ったほうが、`ov`の機能を活用できます。

```console
bat --wrap=never README.md
```

![bat](/ov/bat.png)
