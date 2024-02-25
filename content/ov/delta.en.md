---
author: "Noboru Saito"
title: "delta"
description: "ov can also be used as a pager for delta."
date: 2024-02-25T18:00:00+09:00
tags: ["ov", "git", "delta"]
categories: ["ov"]
weight: 3
---

[delta](https://github.com/dandavison/delta) supports pager.

`delta` is often specified as git's pager, but the pager is actually called from within delta.

Therefore, delta settings are often specified by writing them in gitconfig.
This is an example of gitconfig settings.

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

This setting allows you to mark the necessary locations as section for `ov` when using `delta`.

By combining these settings, you can move files by file (`space` key of `^` key) and diff by `n/N` key.

Furthermore, even if you move a line, the difference file name can be displayed.

![delta](/ov/delta.gif)