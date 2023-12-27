---
author: "Noboru Saito"
title: "delta"
description: "ovをdeltaのpagerとして使用する"
date: 2022-09-27T18:00:00+09:00
tags: ["ov", "git", "delta"]
categories: ["ov"]
weight: 3
---

[delta](https://github.com/dandavison/delta)はpagerをサポートしています。

`delta`はgitのpagerとしてよく指定されますが、pagerは実際にはdelta内部から呼び出されます。

したがって、deltaの設定はgitconfigに書いて指定することが多いです。
以下はgitconfigの設定例です。

```gitconfig
[core]
    pager = delta

[delta]
    navigate = true
    side-by-side = true
    file-style = yellow
```

`[delta]`の`navigate = true` は`less`を使用するときに`n/N`で移動できるようにするための設定ですが、
この設定により必要な場所をマークが付きます。

`ov`ではこのマークを使用して環境変数`DELTA_PAGER`をセットします。

```env
export DELTA_PAGER="ov --section-delimiter '^(commit|added:|removed:|renamed:|Δ)' --section-header --pattern '•'"
```

これらの設定を組み合わせることで、ファイル毎にファイル(`space` key of `^` key)、diff毎に`n/N` keyで移動できます。
さらに、行を移動しても差分ファイル名が表示されます。

![delta](/ov/delta.gif)
