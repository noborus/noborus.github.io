---
author: "Noboru Saito"
title: "delta"
description: "ovをdeltaのpagerとして使用する"
date: 2024-02-27T10:00:00+09:00
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
    # delta will used as the default pager for git
    # and ov as the default pager for delta
    # the pager will be overloaded via the [pager] section for a few commands
    pager = delta --pager='ov -F'

[pager]
    # overload delta pager for some commands
    show = delta --pager='ov -F --header 3'

    # We are now overloading some commands via "delta features"
    # This allows us to use different pager per git command
    # It allows to maintain a simpler config file and avoid escaping quotes
    diff = delta --features ov-diff
    log  = delta --features ov-log

[delta]
    navigate = true
    side-by-side = true
    file-style = yellow

# we define the delta feature "ov-diff" we are using for git diff
[delta "ov-diff"]
    # the idea is to overload the pager used by delta when using git diff
    # we are using the same pattern used by delta when the default pager (less) is used
    # using ov section feature brings a better experience
    pager=ov -F --section-delimiter '^(commit|added:|removed:|renamed:|Δ)' --section-header --pattern '•'

# we define the delta feature "ov-log" we are using for git log
[delta "ov-log"]
    # the idea is to overload the pager used by delta when using git log
    # using ov section feature brings a better experience
    pager=ov -F --section-delimiter '^commit' --section-header-num 3
```

`[delta]`の`navigate = true` は`less`を使用するときに`n/N`で移動できるようにするための設定ですが、
この設定により必要な場所をマークが付きます。

これらの設定を組み合わせることで、ファイル毎にファイル(`space` key of `^` key)、diff毎に`n/N` keyで移動できます。
さらに、行を移動しても差分ファイル名が表示されます。

![delta](/ov/delta.gif)
