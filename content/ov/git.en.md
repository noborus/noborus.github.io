---
author: "Noboru Saito"
title: "git"
description: "Use ov as a pager for git to improve the readability of git command outputs."
date: 2025-07-21T08:58:00+09:00
tags: ["ov", "git"]
images: ["/ov/ov-git-log.png"]
categories: ["ov"]
weight: 2
---
![ov-git-log](/ov/ov-git-log.png)

Git calls pager when needed.
Git output will be easier to use if each section is separated by a section delimiter.
Also, it is recommended to set the jump-target to "section" accordingly.

The `--section-delimiter` option allows you to specify a pattern that marks the beginning of each section, making navigation easier. The `--section-header` option displays the section header at the top of the screen while scrolling, improving context visibility.

It is recommended to set the following in gitconfig.

```config
[core]
    pager = "ov -F"

[pager]
    diff = "ov -F --section-delimiter '^diff' --section-header"
    log = "ov -F --section-delimiter '^commit' --section-header-num 3"
    show = "ov -F --header 3"
```

(Please add `--jump-target "section"` if you like)

## git log

The git log is separated by commit.
You will be able to move by commit unit.

![git log](/ov/ov-git-log.gif)

## git diff

git diff is separated by diff or file.
You will be able to move in diff units.
You can move to the next section (`space` key) or previous section (`^` key) in one go.

![git diff](/ov/ov-git-diff.gif)

Furthermore, by specifying `--section-header`, the diff file name will be displayed even if you scroll.

![git-section-header](/ov/ov-git-section-header.gif)

## search

The above settings will display the search results in commit units.
Normally, the search results are displayed at the top, so if it is in the middle of the line, you need to go back, but it will be displayed from the beginning of the commit.

![git-jump-section](/blog/ov-jump-section.gif)
