---
author: "Noboru Saito"
title: "bat"
description: "Use ov as a pager for bat, a feature-rich alternative to cat, to view and navigate file contents."
date: 2022-05-30T09:00:00+09:00
lastmod: 2026-07-21T08:45:00+09:00
tags: ["ov", "bat"]
images: ["/ov/ov-bat.png"]
categories: ["ov"]
weight: 9
---

[bat](https://github.com/sharkdp/bat) is a feature-rich alternative to `cat` that can be used as a pager. However, `bat` itself is not a pager; it calls a pager internally. By default, `bat` uses `less`, but you can use `ov` as the pager.
You can use it by setting the environment variable `PAGER` or `BAT_PAGER`.

> [!INFO]
> Since v0.26.0, bat supports a built-in pager.
> You can select the built-in pager with the `--pager` option.

```console
export BAT_PAGER="ov -F -H3"
```

Ensure that `bat` does not wrap lines (`--wrap=never`).
If `bat` wraps lines, it cannot be unwrapped later.
Using `ov` as the pager improves usability and provides a better navigation experience.

```console
bat --wrap=never README.md
```

![bat](/ov/ov-bat.png)

## Improve Markdown navigation

Combining `bat` and `ov` improves Markdown navigation.

```console
bat README.md
```

Even when rendered by `bat`, the original content is unchanged, so headings can still be used as section boundaries just like in the source Markdown.

Press `Alt+d` and set `Section delimiter:` to `^#`. Then press `Alt+u` to show the section list.

## Reduce syntax highlighting

![bat-markdown](/ov/bat-markdown.png)

Press `o` to show the list of highlighted styles. By selecting a `Styles` number, you can reduce or suppress highlighting.

![highlight](/ov/highlight.png)
