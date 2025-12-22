---
title: "tcellansi の紹介"
date: 2025-12-22T12:00:00+09:00
draft: false
tags:
  - Go
  - tcell
  - ANSI
  - terminal
images: ["/images/blog/tcellansi.png"]
description: "Go 向けライブラリ `tcellansi` 紹介ページ。リポジトリ: https://github.com/noborus/tcellansi"
---

## 概要

`tcellansi` は Go言語向けのライブラリで、tcellで描画した画面のスタイルをANSIエスケープシーケンスに変換して扱いやすくすることを目的としています。

## 主な特長

- `tcell`のスタイルをANSIエスケープシーケンスに変換
- `tcell`の画面範囲を指定してANSIエスケープシーケンス付きの文字列に変換も可能

## インストール

Go Modules を使っている場合の例:

```sh
go get github.com/noborus/tcellansi@latest
```

もしくは、必要なパッケージを go.mod に追加してください。

## 簡単な使い方

以下は雛形のサンプルです。実際の関数名や使い方はリポジトリのドキュメントやソースコードを確認して適宜置き換えてください。

### tcellスタイル変換の例

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

赤い文字で青い背景の "Hello world!" が表示されます。
![スタイルの変換例](../tcellansi1.png)

### 画面範囲指定の例

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

tcellの画面表示後、なにかキーを押したら終了し、その後tcellの画面をANSIエスケープシーケンス付きで出力します。
![画面範囲指定の例](../tcellansi2.png)

## リンク

- リポジトリ: https://github.com/noborus/tcellansi
- サンプルや README: 上記リポジトリ内の README を参照
