---
author: "Noboru Saito"
title: "How to use section"
date: 2022-05-26T08:00:00+09:00
lastmod: 2026-07-28T11:00:00+09:00
description: "Understand how to use sections in ov for better organization of content."
tags: ["ov", "section"]
images: ["/ov/start0.png", "/ov/start1.png"]
categories: ["ov"]
weight: 98
---

`ov` can use a unit called section.
Sections are blocks separated by section delimiters.
The section delimiter line is displayed in the style of `StyleSectionLine`
(background color green).

The section delimiter is optionally specified as a regular expression string at startup.

```console
ov --section-delimiter "^$"
```

If you want to set the section delimiter after startup,
enter it in input mode with the section_delimiter key binding (alt + d).

```input
Section delimiter: ^$
```

![start0](/ov/start0.png)

If section delimiters are not required (blank lines, etc.),
`--section-start 1` can be used to display from the next line.

![start1](/ov/start1.png)

## Follow section

`--follow-section` uses the section instead of the follow-mode line.

Suitable for use with [\watch of psql](/ov/psql/#watchpostgresql-15).

## Moving between sections

To move to the next section, simply press `space`.
If there is a next section, `space` moves to that section; otherwise, it scrolls by one screen.
To move to the previous section, press `^`.

## Make search jumps section-based

Normally, search displays the matched line at the top.
With `--jump-target=section` (or `Ctrl+j` after startup), ov keeps the start of the matched section visible as much as possible while showing the matched line.
This lets you review search results while still seeing the surrounding section context.
