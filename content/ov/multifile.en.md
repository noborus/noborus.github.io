---
author: "Noboru Saito"
title: "Multiple files"
date: 2022-06-26T09:00:00+09:00
lastmod: 2026-07-19T16:00:00+09:00
description: "Display and manage multiple files simultaneously with ov."
tags: ["ov"]
images: ["/ov/ov-multifiles.png"]
categories: ["ov"]
weight: 12
---
![ov-multifiles](/ov/ov-multifiles.png)

`ov` can specify multiple files.

(With default key bindings).

* `]` key to view the next document.
* `[` key to view the previous document.

When the sidebar is in document display mode, the list of file names is shown with the currently displayed file highlighted.

```console
ov --sidebar-mode documents oviewer/*.go
```

Or press `alt+l` to open sidebar documents.

![maultifile.gif](/ov/ov-multifile.gif)
