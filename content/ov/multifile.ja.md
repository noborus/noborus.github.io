---
author: "Noboru Saito"
title: "複数ファイル"
date: 2023-07-21T06:00:00+09:00
lastmod: 2026-03-11T17:00:00+09:00
description: "ovを使用して複数のファイルを同時に表示および管理する"
tags: ["ov"]
images: ["/ov/ov-multifile.gif"]
categories: ["ov"]
weight: 12
---

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
