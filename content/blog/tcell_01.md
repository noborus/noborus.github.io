+++
author = "Noboru Saito"
title = "tcellについて"
date = "2020-05-13"
description = ""
tags = [
    "tcell",
    "go",
    "tui",
]
categories = [
    "go",
    "tui",
]
+++

## SetContent()

[goのTUIについて](../go_tui)で書いたように[tcell](https://github.com/gdamore/tcell)のSetContent()は1文字設置していくのでASCIIの範囲内だと簡単ですが、Unicodeの世界では注意すべき点があります。

まず日本語などの全角幅の文字と半角幅の文字が混在すると全角幅のときには、次の文字は1つとばして設置するといったことが必要になります。

単純に実装する場合は`runewidth.RuneWidth()`を使用すれば、runeの文字幅を0,1,2で返してくれるので、その分xをずらせば表示されます。以下が実装例です。文字列を渡せる`setContents()`で処理しています。

```go
package main

import (
	"log"

	"github.com/gdamore/tcell"
	"github.com/mattn/go-runewidth"
)

func setContents(screen tcell.Screen, x int, y int, str string, style tcell.Style) {
	for _, r := range str {
		screen.SetContent(x, y, r, nil, style)
		x += runewidth.RuneWidth(r)
	}
}

func main() {
	screen, err := tcell.NewScreen()
	if err != nil {
		log.Fatal(err)
	}
	if err = screen.Init(); err != nil {
		log.Fatal(err)
	}
	defer screen.Fini()

	setContents(screen, 0, 10, "あいうえお", tcell.StyleDefault)
	screen.Show()

	quit := make(chan struct{})
	go func() {
		for {
			ev := screen.PollEvent()
			switch ev.(type) {
			case *tcell.EventKey:
				close(quit)
			}
		}
	}()
	<-quit
}
```

上記では結合文字は無視されて表示されます。結合文字を出したい場合は、文字列をループしている中でruneが結合文字のコード範囲だった場合には、**前の文字**のcombcに入れた上で`SetContent()`を実行する必要があります。

また、`runewidth.RuneWidth()`で、0幅と出る文字の中にはタブ（`\t`）等、アプリケーションによって判断が変わる文字もあります。

さらに [GoのTUIで表示が崩れる場合](../runewidth)で書いたように[go-runewidth](https://github.com/mattn/go-runewidth)では、曖昧幅がロケールや環境変数`RUNEWIDTH_EASTASIAN`で変わる文字幅があるので注意が必要です。

### Style

tcellでは、`SetContent()`の中でスタイルを指定します。

通常端末ではエスケープシーケンスにより色等を変更しますが、エスケープシーケンスでは色指定した後は別の色指定やリセットするまで、その色が続く仕様でした。

tcellでは、`SetContent()`の中でスタイルをtcell独自の値で指定すれば良いので明確です。
色は[tcellの定数](https://pkg.go.dev/github.com/gdamore/tcell?tab=doc#Color)で定義されているので、エスケープシーケンスよりも扱うのは簡単だと思います。

たとえば赤い文字で出したい場合は、`tcell.StyleDefault`を`tcell.StyleDefault.Foreground(tcell.ColorRed)`に変更するだけです。

ただし、使用できる色数は端末環境により異なります。16色から24ビットカラーが出せる端末まであり、tcellは24ビットカラーもサポートしています。

多くの端末で動くことを想定するTUIの場合は16色の範囲内で指定することが多いです。
ただ、16色だと原色が多く使用されるためケバケバしい印象になります。
そこで、端末の環境によっては設定によりパレットを用意して16色の色を変更できるようにしている場合があります。

![パレット](../palette.png)

この様に指定してあると16色の中の赤をエスケープシーケンスで指定しても原色の赤とは違う色にして見やすくカスタマイズができるようになっています。

ところが、tcellでは24ビットカラーをサポートしているため、さまざまな赤が出せる一方`tcell.ColorRed`は原色の赤で表示されます。

TUIアプリケーションで、それほど多く色を使わない場合はパレットの色を尊重した方が使う人に優しいと思います。その場合は、環境変数`TCELL_TRUECOLOR`を`disable`にセットしておくとパレットの方を使用します。

```console
export TCELL_TRUECOLOR=disable
```

アプリケーションによってはプログラム内でセットしておくと良いでしょう。
