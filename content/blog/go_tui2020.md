+++
author = "Noboru Saito"
title = "goのTUIについて2020年最終版"
date = "2020-12-31T14:00:00+09:00"
description = ""
tags = [
    "go",
    "tui",
    "tcell",
	"bubbletea",
]
categories = [
    "go",
    "tui",
]
+++

## 概要

[goのTUIについて](../go_tui)の2020年の最終更新版です。

goでTUI(text user interface)を作成する場合にライブラリを使用するのが一般的です。

goのTUIライブラリはだいたい以下に分類されます。

* [termbox-go](https://github.com/nsf/termbox-go)系
* [tcell](https://github.com/gdamore/tcell)系
* [bubbletea](https://github.com/charmbracelet/bubbletea)系
* その他

goのTUIライブラリは[termbox-go](https://github.com/nsf/termbox-go)系、[tcell](https://github.com/gdamore/tcell)系の利用が多かったですが、彗星のごとく[bubbletea](https://github.com/charmbracelet/bubbletea)が登場しました。

[bubbletea](https://github.com/charmbracelet/bubbletea)は[The Elm Architecture](https://guide.elm-lang.jp/architecture/)に基づいて作られているというフレームワークで、追加のコンポーネントとして[bubbles](https://github.com/charmbracelet/bubbles)もあり、もう一つの系統として選択肢になると思います。

TUIライブラリを謳っている場合は、だいたい上記3つを元に実装されている場合が多いです。

TUIはエスケープシーケンスを使用すれば、ライブラリを使用しなくても実現できますが、端末によりエスケープシーケンスが変わっていたりするので、マルチプラットフォームで動作するのは難しくなります。
そのため、独自に一から作成するよりは、これらのライブラリの上に便利な機能を足す形になります。

### termbox-go系

termbox-goは、老舗で現在も多く使われていますが、開発は停滞傾向で、[termbox-go](https://github.com/nsf/termbox-go)にもそれほど保守しない方向だと書かれています。

termbox-goを使用して、より高度なウィジットを実装したライブラリに[gocui](https://github.com/jroimartin/gocui)があります。

* [termbox-go](https://github.com/nsf/termbox-go)
* [gocui](https://github.com/jroimartin/gocui)
* [termui](https://github.com/gizak/termui)
* [termbox-goのimported by](https://pkg.go.dev/github.com/nsf/termbox-go?tab=importedby)

### tcell系

tcellは、termbox-goよりも新しくtermbox-goを意識して開発され、今も開発も続いています。
tcellは基本的な機能しか提供しませんが、[tcell/views](https://github.com/gdamore/tcell/tree/master/views)には、少し高度なウィジットがあります。

また、より高度なウィジットを実装したライブラリとして[tview](https://github.com/rivo/tview)があり、よく使用されています。また、そこからForkした[cview](https://gitlab.com/tslocum/cview)も候補に入れておくと良いかも知れません。

さらに元々termbox-goを使用していたgocuiをtcellに変更した[awesome-gocui/gocui](https://github.com/awesome-gocui/gocui)も開発されています。

* [tcell](https://github.com/gdamore/tcell)
* [tcell/views](https://github.com/gdamore/tcell/tree/master/views)
* [tview](https://github.com/rivo/tview)
* [cview](https://gitlab.com/tslocum/cview)
* [cbind](https://gitlab.com/tslocum/cbind)
* [gowid](https://github.com/gcla/gowid)
* [goban](https://github.com/eihigh/goban)
* [awesome-gocui/gocui](https://github.com/awesome-gocui/gocui)
* [tcellのimported by](https://pkg.go.dev/github.com/gdamore/tcell?tab=importedby)

### bubbletea系

端末全部を使用するモードしかないtermbox-goとtcellと違い彗星のごとく現われたbubbleteaは現在のプロンプトから対話するような、ちょっとしたプログラムから端末全部を使用するTUIまでサポートしています。

既に[例](https://github.com/charmbracelet/bubbletea/tree/master/examples)が豊富に用意されていて、十分に実用に耐えるように思います。

* [bubbletea](https://github.com/charmbracelet/bubbletea)
* [bubbles](https://github.com/charmbracelet/bubbles)
* [bubbleteaのimported by](https://pkg.go.dev/github.com/charmbracelet/bubbletea?tab=importedby)

### その他

はいずれも端末画面をまるまる使用することを前提に作られています。起動すると現在の端末画面は消えて（終了時に戻すことは可能）、新しい画面が表示されます。

現在のshellプロンプトで動作するような対話型プログラムの場合は、termbox-goやtcellでは作ることはできないので、bubbletea系か別のライブラリや自前で実装することになります。

別のプログラムとしては、対話型のライブラリとして [go-prompt](https://github.com/c-bata/go-prompt)や[liner](https://github.com/peterh/liner)があります。

また、コンソール上の表示を助けるツールとして色を付けたり、その行のまま表示を変えるプログレスバー的な表示をするライブラリがあります。

### どれを選択すべきか？

2020年12月現在、端末全体を使用する以外の使用の可能性がある場合は、[bubbletea](https://github.com/charmbracelet/bubbletea)を使用するのが良いと思います。端末全体を使用するアプリケーションを開発するなら、[tview](https://github.com/rivo/tview) と[bubbletea](https://github.com/charmbracelet/bubbletea)で、例を見ながらどちらを使用するか決めるのが良いでしょう。
