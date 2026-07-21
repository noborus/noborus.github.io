---
author: "Noboru Saito"
title: "word wrap"
description: "Switch between character wrap and word wrap in ov."
date: 2026-07-21T09:00:00+09:00
tags: ["ov", "wrap"]
images: ["/ov/ov-wordwrap2.png"]
categories: ["ov"]
weight: 93
---

`ov` supports switching line wrapping modes.
By default, wrapping is character-based (`-w` / `-w=char`), which may split words at the edge of the screen.

![character wrap](/ov/ov-wordwrap1.png)

## Wrap modes

* `-w` or `-w=char`: Wrap at screen width (character-based).
* `-w=word`: Wrap at word boundaries.
* `-w=none`: Disable wrapping.

```console
ov -w=word README.md
```

With word wrap enabled, long text is wrapped without breaking words in the middle.

![word wrap](/ov/ov-wordwrap2.png)

You can toggle word wrap after launch with the default key `Alt+w`.
Character wrap can be toggled with the default keys `w` / `W`.
