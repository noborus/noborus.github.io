---
author: "Noboru Saito"
title: "delta"
date: 2022-09-27T18:00:00+09:00
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
    pager = delta

[delta]
    navigate = true
    side-by-side = true
    file-style = yellow
```

`navigate = true` of `delta` is set to allow you to move in diff units using the `n/N` keys of `less`.
This setting allows you to mark the necessary locations.

Use that mark to set `ov`` with environment variables.

```env
export DELTA_PAGER="ov --section-delimiter '^(commit|added:|removed:|renamed:|Δ)' --section-header --pattern '•'"
```

By combining these settings, you can move files by file (`space` key of `^` key) and diff by `n/N` key.

Furthermore, even if you move a line, the difference file name can be displayed.

![delta](/ov/delta.gif)