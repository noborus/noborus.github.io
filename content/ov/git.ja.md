---
author: "Noboru Saito"
title: "git"
description: "gitのページャーとしてovを使用する"
date: 2024-02-25T18:00:00+09:00
tags: ["ov", "git"]
categories: ["ov"]
weight: 2
---

## ovでgitのlogを見やすくする

gitのlogを見やすくする工夫はいろんなところで紹介されていますが、gitの設定等により表示を変更する方法にとどまります。
gitの出力をセクション区切りで分割することで、より使いやすくなります。
また、それに合わせてjump-targetを"section"しておくことをおすすめします。
以下はgitの推奨設定例です。

```config
[core]
    pager = "ov -F"

[pager]
    diff = "ov -F --section-delimiter '^diff' --section-header"
    log = "ov -F --section-delimiter '^commit' --section-header-num 3"
    show = "ov -F --header 3"
```

（`--jump-target "section"`はお好みで追加してください）

## git log

git logはcommit毎に区切られます。
上記の設定によりcommit毎に移動できます。

![git log](/ov/git-log.gif)

## git diff

git diffはdiffまたはファイル毎に区切られます。
上記の設定によりdiff毎に移動できます。

![git diff](/ov/git-diff.gif)

さらに `--section-header`を指定することで、diffのファイル名を表示し続けられます。

![git-section-header](/ov/git-section-header.gif)

## 検索

上記の設定により検索したときの移動がコミット単位で表示するようになります。
通常は検索結果が一番上に表示するため、途中の行であった場合はさかのぼる必要がありますが、コミットの先頭から表示されます。

![git-jump-section](/blog/ov-jump-section.gif)
