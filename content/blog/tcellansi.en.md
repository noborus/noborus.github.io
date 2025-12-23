---
title: "tcell screen reproduced as ANSI escape sequences with tcellansi"
date: 2025-12-22T12:00:00+09:00
draft: false
tags:
  - Go
  - tcell
  - ANSI
  - terminal
images: ["/images/blog/tcellansi.png"]
description: "Introduction to the Go library `tcellansi`. Repository: https://github.com/noborus/tcellansi"
---

## Overview

`tcellansi` is a Go library that converts screen styles drawn with [tcell](https://github.com/gdamore/tcell) into ANSI escape sequences to make them easier to handle.

## Key features

- Supports `tcell` v3 (v2 can be used with the appropriate build tag)
- Converts `tcell` styles into ANSI escape sequences
- Can convert a specified screen region to strings that include ANSI escape sequences

## Installation

Example when using Go Modules:

```sh
go get github.com/noborus/tcellansi@latest
```

Or add the required package to your `go.mod`.

## Quick usage

Below is a minimal example. Replace function names and usage with the actual ones from the repository as needed.

### Example: converting a tcell style

```go
package main

import (
	"github.com/gdamore/tcell/v3"
	"github.com/noborus/tcellansi"
)

func main() {
	style := tcell.StyleDefault.Foreground(tcell.ColorRed).Background(tcell.ColorBlue)
	ansiSeq := tcellansi.ToAnsi(style)
	println(ansiSeq + "Hello world!")
}
```

This prints "Hello world!" in red text on a blue background.

![Style conversion example](../tcellansi1.png)

### Example: extracting a screen region

```go
package main

import (
	"github.com/gdamore/tcell/v3"
	"github.com/noborus/tcellansi"
)

func main() {
	screen, err := tcell.NewScreen()
	if err != nil {
		panic(err)
	}
	screen.Init()
	var scrStr []string
	screen.PutStrStyled(0, 0, "Hello World!", tcell.StyleDefault.Foreground(tcell.ColorRed).Background(tcell.ColorBlue))
	screen.Show()
	scrStr = tcellansi.ScreenContentToStrings(screen, 0, 80, 0, 1)

	event := screen.EventQ()
mainloop:
	for {
		switch (<-event).(type) {
		case *tcell.EventKey:
			break mainloop
		}
	}
	screen.Fini()

	println("----- Screen Content as ANSI -----")
	for _, line := range scrStr {
		print(line)
	}
}
```

After the tcell screen is shown, pressing any key will exit and then print the tcell screen contents with ANSI escape sequences.

![Screen region example](../tcellansi2.png)

## Links

- Repository: <https://github.com/noborus/tcellansi>
- Samples and README: see the repository README
