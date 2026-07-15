---
author: "Noboru Saito"
title: "procs"
date: 2023-07-21T06:00:00+09:00
lastmod: 2026-07-15T16:20:00+09:00
description: "プロセス情報をより良く可視化するためにovをprocsのページャーとして使用する"
tags: ["ov", "procs"]
images: ["/ov/ov-procs.png"]
categories: ["ov"]
weight: 8
---

[procs](https://github.com/dalance/procs)は、プロセス情報をより良く可視化するためのツールです。
`ps`コマンドの現代版として有名です。

`procs`は現代版CLIツールとして、エスケープシーケンスを使って色付きで表示されます。
`procs`はパイプで渡すとエスケープシーケンスを抑制して出力されるため、画面高さより多く出力する場合はページャーを自動で呼び出すようになっています。

`procs`ではページャーを設定で変更できるようになっているため、`ov`をページャーとして設定することで、`procs`の出力をより良く可視化することができます。

[configuration file](https://github.com/dalance/procs#configuration) に以下のように設定します。
ヘッダー行を1または2で設定すると便利です。

```toml
[pager]
command = "ov -H=1 -w=false -d=│"
```

![procs](/ov/ov-procs.png)
