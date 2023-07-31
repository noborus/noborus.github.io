---
author: "Noboru Saito"
title: "git"
date: 2023-07-21T09:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 2
---

## ovでgitのlogを見やすくする

gitのlogを見やすくする工夫はいろんなところで紹介されていますが、gitの設定等により表示を変更する方法にとどまります。
gitの出力をセクション区切りで分割することで、より使いやすくなります。
また、それに合わせてjump-targetを"section"しておくことをおすすめします。
以下はgitの推奨設定例です。

```config
[pager]
    diff = ov -F --section-delimiter "^diff" --jump-target "section"
    log = ov -F --section-delimiter "^commit" --jump-target "section"
```

## git log

git logはcommit毎に区切られます。
上記の設定によりcommit毎に移動できます。


![git log](/ov/git-log.gif)

## git diff

git diffはdiffまたはファイル毎に区切られます。
上記の設定によりdiff毎に移動できます。

![git diff](/ov/git-diff.gif)

## 検索

上記の設定により検索したときの移動がコミット単位で表示するようになります。
通常は検索結果が一番上に表示するため、途中の行であった場合はさかのぼる必要がありますが、コミットの先頭から表示されます。

![git-jump-section](/blog/ov-jump-section.gif)