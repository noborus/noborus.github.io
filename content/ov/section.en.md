---
author: "Noboru Saito"
title: "How to use section"
date: 2023-07-21T06:00:00+09:00
lastmod: 2026-07-31T08:00:00+09:00
description: "Understand how to use sections in ov for better organization of content"
tags: ["ov"]
images: ["/ov/section.png"]
categories: ["ov"]
weight: 98
---

`ov` can display multi-line blocks as sections.
Sections are separated by section delimiter lines.
The section delimiter line is displayed in the `StyleSectionLine` style
(slate blue background).

The section delimiter can optionally be specified as a regular expression string at startup.

```console
ov --section-delimiter="^#" README.md
```

## Section list

If you specify `--sidebar-mode=sections`, you can show a list of detected sections in the sidebar. It can be used like a table of contents.

```console
ov --section-delimiter="^#" --sidebar-mode=sections README.md
```

![ov-markdown](/ov/ov-markdown.png)

## Section delimiter input mode

After startup, you can set the section delimiter by entering it in input mode.
The section delimiter input mode can be opened with the `section_delimiter` key binding (`Alt+d`).

```input
Section delimiter: ^$
```

> [!INFO]
> `^$` means that blank lines are used as section delimiters.

![Example of display using blank lines as delimiters](/ov/start0.png)

If section delimiters are not needed as section headers (blank lines, etc.),
`--section-start=1` can be used to display from the next line.

![Example scrolled to the line after a blank line](/ov/start1.png)

## Follow section

`--follow-section` uses sections instead of the follow-mode line.

It is suitable for use with [watch of psql](/ov/psql/#watchpostgresql-15).

## Moving between sections

To move to the next section, just press `space`.
If there is another section, `space` moves there; otherwise, it scrolls by one screen.
To move to the previous section, press `^`.

## Section headers

The line specified by a section is kept visible as the section header while that section is displayed.
Section headers can also span multiple lines. For example, specifying `--section-header-num=3` makes the section header three lines long.

For example, when treating multi-line blocks such as `git log` output as sections, you can display the first few lines as the section header and scroll while checking the section contents.

![git log](/ov/ov-git-log.gif)

## Make search jumps section-based

Normally, search displays the matched line at the top.
With `--jump-target=section` (or `section` via `Ctrl+j` after startup), ov keeps the start of the matched section visible as much as possible while showing the matched line.
This lets you review search results while still seeing the contents of the surrounding section.

![Example showing more content when searching in git log](/ov/jump-target-section.png)
