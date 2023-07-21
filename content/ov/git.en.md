---
author: "Noboru Saito"
title: "git"
date: 2022-05-21T10:00:00+09:00
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
    diff = ov -F --section-delimiter "^diff" --jump-target "section"
    log = ov -F --section-delimiter "^commit" --jump-target "section"
```

## git log

The git log is separated by commit.
You will be able to move by commit unit.

![git log](/ov/git-log.gif)

## git diff

git diff is separated by diff or file.
You will be able to move in diff units.

![git diff](/ov/git-diff.gif)

## search

The above settings will display the search results in commit units.
Normally, the search results are displayed at the top, so if it is in the middle of the line, you need to go back, but it will be displayed from the beginning of the commit.

![git-jump-section](/blog/ov-jump-section.gif)
