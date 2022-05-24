---
author: "Noboru Saito"
title: "Use ov with git"
date: 2022-05-19T10:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 2
---

Git calls pager when needed.
Git output will be easier to use if each is separated by section-delimiter

It is recommended to set the following in gitconfig.

```config
[pager]
    diff = ov -F --section-delimiter "^diff"
    log = ov -F --section-delimiter "^commit" 
```

## git log

The git log is separated by commit.
You will be able to move by commit as shown below.

```config
[pager]
    diff = ov -F --section-delimiter "^diff"
```

![git log](/ov/git-log.gif)

## git diff

git diff is separated by diff or file.
You will be able to move in diff units as shown below.

```config
[pager]
    log = ov -F --section-delimiter "^commit" 
```

![git dfff](/ov/git-diff.gif)
