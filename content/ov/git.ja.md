---
author: "Noboru Saito"
title: "git"
date: 2023-06-13T09:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 2
---

## ovでgitのlogを見やすくする

gitのlogを見やすくする工夫はいろんなところで紹介されていますが、gitの設定等により表示を変更する方法にとどまります。
gitの出力をセクション区切りで分割することで、より使いやすくなります。
以下はgitの推奨設定例です。

```config
[pager]
    diff = ov -F --section-delimiter "^diff"
    log = ov -F --section-delimiter "^commit" 
```

## git log

git logはcommit毎に区切られます。
以下のようにするとcommit毎に移動できます。

```config
[pager]
    log = ov -F --section-delimiter "^commit" 
```

![git log](/ov/git-log.gif)

## git diff

git diff is separated by diff or file.
git diffはdiffまたはファイル毎に区切られます。
以下のようにするとdiff毎に移動できます。

```config
[pager]
    diff = ov -F --section-delimiter "^diff"
```

![git diff](/ov/git-diff.gif)
