+++
author = "Noboru Saito"
title = "goのTUIについて"
date = "2020-05-12T23:00:00+09:00"
description = ""
tags = [
    "go",
    "tui",
    "tcell",
]
categories = [
    "go",
    "tui",
]
+++

## 概要

goでTUI(text user interface)を作成する場合にライブラリを使用するのが一般的です。

goのTUIライブラリはだいたい以下に分類されます。

* [termbox-go](https://github.com/nsf/termbox-go)系
* [tcell](https://github.com/gdamore/tcell)系
* その他

TUIライブラリを謳っている場合は、だいたい上記2つを元に実装されている場合が多いです。

TUIはエスケープシーケンスを使用すれば、ライブラリを使用しなくても実現できますが、端末によりエスケープシーケンスが変わっていたりするので、マルチプラットフォームで動作するのは難しくなります。
そのため、独自に一から作成するよりは、これらのライブラリの上に便利な機能を足す形になります。

### termbox-go系

termbox-goは、老舗で現在も多く使われていますが、開発は停滞傾向で、[termbox-go](https://github.com/nsf/termbox-go)にもそれほど保守しない方向だと書かれています。

termbox-goを使用して、より高度なウィジットを実装したライブラリに[gocui](https://github.com/jroimartin/gocui)があります。

* [termbox-go](https://github.com/nsf/termbox-go)
* [gocui](https://github.com/jroimartin/gocui)
* [termui](https://github.com/gizak/termui)

### tcell系

tcellは、termbox-goよりも新しくtermbox-goを意識して開発され、今も開発も続いています。
tcellは基本的な機能しか提供しませんが、[tcell/views](https://github.com/gdamore/tcell/tree/master/views)には、少し高度なウィジットがあります。

また、より高度なウィジットを実装したライブラリとして[tview](https://github.com/rivo/tview)があり、よく使用されています。

* [tcell](https://github.com/gdamore/tcell)
* [tcell/views](https://github.com/gdamore/tcell/tree/master/views)
* [tview](https://github.com/rivo/tview)
* [gowid](https://github.com/gcla/gowid)
* [goban](https://github.com/eihigh/goban)

### その他

termbox-goとtcellはいずれも端末画面をまるまる使用することを前提に作られています。起動すると現在の端末画面は消えて（終了時に戻すことは可能）、新しい画面が表示されます。

現在のshellプロンプトで動作するような対話型プログラムの場合は、上記2つで作ることはできないので、別のライブラリや自前で実装することになります。

別のプログラムとしては、対話型のライブラリとして [go-prompt](https://github.com/c-bata/go-prompt)や[liner](https://github.com/peterh/liner)があります。

また、コンソール上の表示を助けるツールとして色を付けたり、その行のまま表示を変えるプログレスバー的な表示をするライブラリがあります。

### どれを選択すべきか？

2020年5月現在で端末全体を使用するアプリケーションを開発するなら、[tview](https://github.com/rivo/tview) が第一候補だと思います。tviewが作ろうとしているアプリに当てはまるかを考えて、足りない機能は、[tcell](https://github.com/gdamore/tcell)を使用して自分で実装できないか考えます。

それでも難しいようであればtermbox-goを検討するのが良いでしょう。

tviewは豊富な[デモ](https://github.com/rivo/tview/tree/master/demos)の実装例があり、また多く使われているので、それらを見れば使い方は分かっていくと思います。

## tcellによる低レベルな実装

ということで、tviewの使い方は他に任せて、tcellの解説をします。tviewを使う場合もその下層について理解するのは有用だと思います。

個人的にtcellの一番大事な機能だと思うのは[SetContent](https://pkg.go.dev/github.com/gdamore/tcell?tab=doc#CellBuffer.SetContent)です。SetContent()は指定された座標に文字を描画します。

```go
SetContent(
    x int,
    y int,
    mainc rune,
    combc []rune,
    style Style)
```

端末上の左上（0）からx,y座標を指定して、maincにrune（文字）を描画します。
低レベルなので、文字列ではなく1文字1文字を設置します。

指定するのはgoのruneなので、マルチバイトであっても1文字として指定できます。

ただgoのruneは符号化単位ので、Unicodeの結合文字は別文字扱いになります。その結合文字をcombcのrune配列に追加して表現できます。

そして、styleには、文字色、背景色、反転等のスタイルをtcellの値で渡します。

SetContent()を使って端末画面分埋めれば自由に描画ができるわけです。

ただSetContent()を使って描画していくのは、なかなか大変でマルチバイト文字を1文字として扱うことはできますが、日本語等のいわゆる全角幅の文字は次の文字をxを1つとばして置かないと違う文字になってしまいます。

そのため全角幅を含む文字列を描画する場合は[go-runewidth](https://github.com/mattn/go-runewidth)を使用して、文字幅を調べながら1文字づつ設置していくのが通常の手順になります。

そして、もう1つ重要なのがイベント管理で、tcellがキー、マウス、リサイズ等のイベントを管理してくれます。そのイベントを受け取ってSetContent()で描画し直せば、論理上アプリケーションが作成できます。

以下に最小の例をあげます。

```go
package main

import (
	"log"

	"github.com/gdamore/tcell"
)

func main() {
	screen, err := tcell.NewScreen()
	if err != nil {
		log.Fatal(err)
	}
	if err = screen.Init(); err != nil {
		log.Fatal(err)
	}
	defer screen.Fini()

	for i := 0; i < 10; i++ {
		screen.SetContent(i, i, 'a', nil, tcell.StyleDefault)
	}
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

これを実行すると以下のように表示されます。何かキーを押すと終了します。

![tcell-example.png](../tcell-example.png)

最初の `tcell.NewScreen()`と`screen.Init()`は初期化のお約束で通常はエラーになりません（対応していない端末では、エラーになるかもしれません）。
現在の`shell`が動作している画面とは別に新しく画面を用意します。

その後`defer screen.Fini()`は終了時に画面を元に戻します。`Fini()`を実行しないで終了すると`shell`に戻ってから画面が崩れたりします。

その後からが、メインで、`screen.SetContent()`で文字をずらしながら設置しています。実はこの時点では実際には画面に描画されていなくて、その後の`screen.Show()`で、実際に描画されます。

`screen.Show()`を実行するまでに`SetContent()`を何回実行しても`screen.Show()`が実行される時に置かれていた文字が描画されるだけなので、場合によってはイベントが起こる度に`screen.SetContent()`で全部をスペースで埋め、その後必要なところに`screen.SetContent()`を実行するといったことをおこなっても大丈夫な様になっています。

イベントは通常イベントを受け取るgoroutineを用意して、終了時はチャンネルで通知して抜けるのが、よくあるパターンです。

ここでは文字をずらしながら書いているため、「a」を全角幅の「あ」に変えても表示されますが、横に文字列として表示するには、次のxを適切に移動させないとなりません。

そこで、ここでのお約束処理と`screen.SetContent()`より高機能な描画ができるウィジットライブラリを利用すると楽にできるようになります。

ということで、なるべく便利ライブラリを使用するのがオススメです。
