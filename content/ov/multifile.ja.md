---
author: "Noboru Saito"
title: "複数ファイル"
date: 2023-07-21T06:00:00+09:00
lastmod: 2026-07-19T16:00:00+09:00
description: "ovを使用して複数のファイルを同時に表示および管理する"
tags: ["ov"]
images: ["/ov/ov-multifiles.png"]
categories: ["ov"]
weight: 12
---
![ov-multifiles](/ov/ov-multifiles.png)

`ov`は複数ファイルを指定可能です。

（以下はデフォルトキーのままの場合）

* `]` キーで次のドキュメントを表示します。
* `[` キーで前のドキュメントを表示します。

sidebarでドキュメントの表示にしている場合は、表示しているファイルがハイライトされたファイル名の一覧とファイル名が表示されます。

```console
ov --sidebar-mode documents oviewer/*.go
```

または`alt+l`でサイドバーのドキュメントが開きます。

![maultifile.gif](/ov/ov-multifile.gif)
