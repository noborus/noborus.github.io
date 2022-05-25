---
author: "Noboru Saito"
title: "How to use section"
date: 2022-05-26T10:00:00+09:00
tags: ["ov"]
categories: ["ov"]
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

`--follow-section` uses the section instead of the follow-mode line.

Suitable for use with [\watch of psql](/ov/psql/#watchpostgresql-15).