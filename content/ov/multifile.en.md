---
author: "Noboru Saito"
title: "multiple files"
date: 2022-06-26T09:00:00+09:00
lastmod: 2026-03-11T17:00:00+09:00
description: "Display and manage multiple files simultaneously with ov."
tags: ["ov"]
images: ["/ov/ov-multifile.gif"]
categories: ["ov"]
weight: 12
---

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
