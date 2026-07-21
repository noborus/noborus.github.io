---
author: "Noboru Saito"
title: "How ov thinks about syntax highlighting"
description: "The design approach to syntax highlighting in ov."
date: 2026-07-21T08:45:00+09:00
tags: ["ov", "syntaxhighlight"]
images: ["/ov/ov-highlight1.png"]
categories: ["ov"]
weight: 89
---
![ov-highlight1](/ov/ov-highlight1.png)

## How to think about syntax highlighting

[ov](https://github.com/noborus/ov) does not have built-in syntax highlighting.
However, it is designed to be used as a pager for commands that do have syntax highlighting, such as [bat](https://github.com/sharkdp/bat).

One reason ov does not include syntax highlighting is the cost of supporting many languages.
Another reason is that it is difficult to provide highlighting that satisfies everyone.

I agree that completely uncolored code is hard to read.
At the same time, syntax highlighting is often over-colored, which can make code harder to read in practice.

Some people have proposed ways to address this problem.

* [I am sorry, but everyone is getting syntax highlighting wrong](https://tonsky.me/blog/syntax-highlighting/)

I agree with much of that direction, especially the idea of not emphasizing non-essential elements too much.
Still, what is essential changes with the task and context.
When tracking an implementation bug, reading design intent, or focusing only on SQL conditions, the parts you want to see are different.

## Suppressing syntax highlighting

So I changed the perspective.

Instead of deciding how to color code, it is often better to reduce colors on parts that are not important at that moment in already colored output.

Because ov is a pager, you can change the display after it is shown.
Also, with the sidebar feature already implemented, ov can provide a UI where you can adjust while visually checking the result.

Press `o` to open the list of highlighted styles and enter the `Toggle styles:` input mode.
From there, you can specify `Styles` numbers to suppress highlighting.

![ov-highlight2](/ov/ov-highlight2.png)

You can also use shortcuts.
In the `Toggle styles:` input mode, `o` suppresses all highlights, `a` enables all highlights, and `i` inverts the current state.
For example, to enable only style 1, type `o1`.

![ov-highlight3](/ov/ov-highlight3.png)

To specify multiple numbers, separate them with commas.
For example, `o1,3` enables only styles 1 and 3.
You can also specify ranges.
For example, `o1-3` enables styles 1 through 3.

![ov-highlight4](/ov/ov-highlight4.png)

## Suppress hard-to-read colors

Depending on your terminal theme, syntax highlighting may use colors that are hard to read.
In that case, you can target and suppress only those specific styles.

![ov-highlight5](/ov/ov-highlight5.png)

![ov-highlight6](/ov/ov-highlight6.png)

## Switch the syntax-highlighting application

This feature is not limited to `bat`.
If an application outputs colors via escape sequences, you can use ov's syntax-highlight suppression with it.

For example, the traditional `highlight` command also works with ov's syntax-highlight suppression.

```console
highlight -O truecolor oviewer/oviewer.go | ov
```

![ov-highlight7](/ov/ov-highlight7.png)

## Usage patterns

It helps to change your suppression strategy depending on what you are reading.

1. When you want to follow structure
Prioritize visibility of keywords and delimiters, and suppress decorative colors.

2. When you want to inspect strings or comments
Keep string/comment-related styles and reduce others to lower noise.

3. When terminal theme and palette conflict
Target only the styles that use hard-to-read colors.

Even when syntax highlighting is over-colored, ov lets you keep color only where it matters.

## Limits and notes

This approach is not a universal solution.
It depends on how the source application assigns colors.
You cannot render already suppressed output from the start.
It is a way to extract what you need from output that has already been colored.

## Summary

The role of ov is not to decide the perfect coloring.
Its role is to make it easier to extract currently relevant information from output that is already colored.
The goal is to improve readability by subtracting color, not by adding more color.
