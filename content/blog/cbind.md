+++
author = "Noboru Saito"
title = "tcell/tviewでTUIを作るならキー割り当てにcbindを利用しよう"
date = "2020-10-27T10:00:00+09:00"
tags = [
    "cbind", "tcell", "go", "tui",
]
categories = [
    "tui",
]
+++

## cbindとは？

[cbind](https://gitlab.com/tslocum/cbind)は[tcell](https://github.com/gdamore/tcell)のキーイベントとイベントハンドラを結びつけるライブラリです。

{{< warning >}}
現在cbindの最新はtcellのversion 2が対象になっています。version 1を対象にする場合は cbind v0.1.1を使用して下さい。
{{< /warning >}}

{{< cmd >}}
go get gitlab.com/tslocum/cbind@v0.1.1
{{< /cmd >}}

ここでも v0.1.1を対象にしています。

## tcellのキーイベント

[tcell](https://github.com/gdamore/tcell) ではキー入力がイベントの１つとして取得できます。[tview](https://github.com/rivo/tview)でもtcellのイベントを使用しているので、同じ様にイベントとして取得します。

tcellのキーイベントを取得するのは以下のように`switch case`でキーを判別して、イベントハンドラを呼び出すのが一般的です。

```go
	ev := screen.PollEvent()
    switch ev := ev.(type) {
        case *tcell.EventKey:
		    switch ev.Key() {
			case tcell.KeyEscape:
				close(quit)
				return
            }
            case tcell.KeyEnter:
                action()
                return
    }
```

ここの`tcell.KeyEscape`は constの数値として定義されています（キーボードに存在する英数字などの文字は`rune`で入ってきます）。
キー割り当てが少ないうちは、このまま追加していけば機能を増やせるので分かりやすいですが、キー割り当てが多くなってくると以下のような問題が出てきます。

* 修飾キー(CTRL、ALT...)が押された場合に動作が変わる場合はさらに分岐する
* キー割り当てをドキュメント化するのが大変になる
* キー割り当てのヘルプが必要になる
* キー割り当てを人によって変更したくなる

ドキュメント化やヘルプはコードで実装した後、手間を掛けて書いていけばなんとか解決できますが、キー割り当ての変更に対応するには、元のままのコードでは不可能です。

## cbindを使用

そこで使用したいのが[cbind](https://gitlab.com/tslocum/cbind)です。

cbind は `*tcell.EventKey`を文字列にする`Encode`とキー文字列（`ctrl+a`等）をtcellのイベントキーに変換する`Decode`があり、それらを利用して「文字列」にイベントハンドラを結びつけて登録できます。実際にキーイベントが起きたら、cbindに任せれば登録されていたイベントハンドラが実行されることになります。

### 実際の使用例です。

キーの登録は、まず`cbind.NewConfiguration()`をしてConfigurationを作成します。
そのConfigurationにキー文字列を`Decode`でイベントキーに変換して、`SetRune`または`SetKey`で登録します。

実際に登録するときには、キー文字列（`ctrl+a`等）とイベントハンドラ（func）を直接結びつけるのではなく、アクション名（文字列）を介しておくと、ヘルプや設定ファイル化するときに便利です。

アクション名とキー文字列のマップ(keyBind)とアクション名とイベントハンドラのマップ(actionHandlers)をあらかじめ定義しておいて`setKeyBind`で登録しています。

```go
const (
    // アクション名
	actionQuit = "quit"
)

var keyBind = map[string][]string{
    // アクション名に対してキー文字列をマッピング（キー文字列は複数可能）
	actionQuit: {"q", "ctrl+q"},
}

var actionHandlers = map[string]func(){
    // アクション名に対してイベントハンドラをマッピング
	actionQuit: handleQuit,
}

// 終了のイベントハンドラ
var quit = make(chan struct{})
var handleQuit = func() {
	close(quit)
}

func setKeyBind() (*cbind.Configuration, error) {
	c := cbind.NewConfiguration()

	for a, keys := range keyBind {
        // キーバインドのアクション名からイベントハンドラに変換
		handler := actionHandlers[a]
		if handler == nil {
			return nil, fmt.Errorf("[%s] unknown action", a)
		}
		for _, k := range keys {
            // keyBindのキー文字列をイベントキーに変換
			mod, key, ch, err := cbind.Decode(k)
			if err != nil {
				return nil, fmt.Errorf("[%s] for %s: %s", k, a, err)
            }
            // キーとイベントハンドラを登録
			if key == tcell.KeyRune {
				c.SetRune(mod, ch, wrapEventHandler(handler))
			} else {
				c.SetKey(mod, key, wrapEventHandler(handler))
			}
		}
	}
	return c, nil
}

// func(*tcell.EventKey) *tcell.EventKey という形式のため、
// 引数、返り値を無しの関数を登録するためのラップ関数
func wrapEventHandler(f func()) func(_ *tcell.EventKey) *tcell.EventKey {
	return func(_ *tcell.EventKey) *tcell.EventKey {
		f()
		return nil
	}
}
```

keyBindがマップになっているのでアクション名に対するキー文字列を（設定ファイル等により）変更するだけで、キーバインドの変更が簡単に出来るようになります。

イベントハンドラの実行はcbindの`Capture`にイベントを渡せば登録してあるイベントハンドラが実行されます。

```go
	ev := screen.PollEvent()
    switch ev := ev.(type) {
        case *tcell.EventKey:
            c.Capture(ev)
    }
```

## 全体のソース

```go
package main

import (
	"fmt"
	"log"
	"strings"

	"github.com/gdamore/tcell"
	"github.com/mattn/go-runewidth"
	"gitlab.com/tslocum/cbind"
)

const (
	actionQuit = "quit"
)

var keyBind = map[string][]string{
	actionQuit: {"q", "ctrl+q"},
}

var actionHandlers = map[string]func(){
	actionQuit: handleQuit,
}

var quit = make(chan struct{})
var handleQuit = func() {
	close(quit)
}

func setKeyBind() (*cbind.Configuration, error) {
	c := cbind.NewConfiguration()

	for a, keys := range keyBind {
		handler := actionHandlers[a]
		if handler == nil {
			return nil, fmt.Errorf("[%s] unknown action", a)
		}
		for _, k := range keys {
			mod, key, ch, err := cbind.Decode(k)
			if err != nil {
				return nil, fmt.Errorf("[%s] for %s: %s", k, a, err)
			}
			if key == tcell.KeyRune {
				c.SetRune(mod, ch, wrapEventHandler(handler))
			} else {
				c.SetKey(mod, key, wrapEventHandler(handler))
			}
		}
	}
	return c, nil
}

func wrapEventHandler(f func()) func(_ *tcell.EventKey) *tcell.EventKey {
	return func(_ *tcell.EventKey) *tcell.EventKey {
		f()
		return nil
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
	str := fmt.Sprintf("[%s] %s", strings.Join(keyBind[actionQuit], ","), actionQuit)
	setContents(screen, 0, 0, str, tcell.StyleDefault)

	c, err := setKeyBind()
	if err != nil {
		log.Fatal(err)
	}

	screen.Show()
	go func() {
		for {
			ev := screen.PollEvent()
			switch ev := ev.(type) {
			case *tcell.EventKey:
				c.Capture(ev)
			}
		}
	}()
	<-quit
}

func setContents(screen tcell.Screen, x int, y int, str string, style tcell.Style) {
	for _, r := range str {
		screen.SetContent(x, y, r, nil, style)
		x += runewidth.RuneWidth(r)
	}
}
```

## cbindの使用例

[pkg.go.devのImported By](https://pkg.go.dev/gitlab.com/tslocum/cbind?tab=importedby)に作者の方が実際に使用している例があるので、そちらを参考にすると良いでしょう。

また、拙作[ov](https://github.com/noborus/ov)でもcbindを使用して、キーバインドをカスタマイズ可能にしています。[こちらも](https://github.com/noborus/ov)も参考にしてみてください。