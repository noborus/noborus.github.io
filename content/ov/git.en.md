---
author: "Noboru Saito"
title: "git"
description: "Use ov as a pager for git"
date: 2022-09-24T10:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 2
---

Git calls pager when needed.
Git output will be easier to use if each is separated by section-delimiter.
Also, it is recommended to set the jump-target to "section" accordingly.

It is recommended to set the following in gitconfig.

```config
[pager]
    diff = ov -F --section-delimiter "^diff" --section-header"
    log = ov -F --section-delimiter "^commit" --jump-target "section"
```

(Please add `--jump-target "section"` if you like)

## git log

The git log is separated by commit.
You will be able to move by commit unit.

![git log](/ov/git-log.gif)

## git diff

git diff is separated by diff or file.
You will be able to move in diff units.
You can move to the next section (`space` key) or previous section (`^` key) in one go.

![git diff](/ov/git-diff.gif)

Furthermore, by specifying `--section-header`, the diff file name will be displayed even if you scroll.

![git-section-header](/ov/git-section-header.gif)

## search

The above settings will display the search results in commit units.
Normally, the search results are displayed at the top, so if it is in the middle of the line, you need to go back, but it will be displayed from the beginning of the commit.

![git-jump-section](/blog/ov-jump-section.gif)
