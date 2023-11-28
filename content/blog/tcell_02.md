+++
author = "Noboru Saito"
title = "tcellについて2"
date = "2020-05-17"
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

## これまで

1. [goのTUIについて](/blog/go_tui)
2. [tcellについて](/blog/tcell_01)

## イベント

tcellのイベントは、`NewScreen()`で作成したスクリーンの`PollEvent()`で取得できます。

その名の通り、イベントが起こるまでポーリング（polling）して待つので、起こらない限り止まったままになります。

`PollEvent()`でイベントが起こったらイベントに応じて処理し、`SetContent()`でセットし、次のイベントが起こる前に`Draw()`で描画する。
というのが、実際のメインルーチンになります。

このメインルーチンをgoroutineで動かし、終了のイベントがきたらchannelに通知して通知を受信したら`Fini()`を実行して終了するのが一般的な流れです。

### キーイベント

イベントの中でも重要でよく使用するのがキーイベントです。
以下のプログラムは左上に打ったキーが表示されます。ESCキー又はEnterキーで終了します。

```go
package main

import (
	"log"
	"time"

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

	screen.SetContent(0, 0, '_', nil, tcell.StyleDefault)

	quit := make(chan struct{})
	go func() {
		for {
			screen.Show()
			ev := screen.PollEvent()
			switch ev := ev.(type) {
			case *tcell.EventKey:
				switch ev.Key() {
				case tcell.KeyEscape, tcell.KeyEnter:
					close(quit)
					return
				case tcell.KeyRune:
					screen.SetContent(0, 0, ev.Rune(), nil, tcell.StyleDefault)
					time.Sleep(time.Millisecond * 100)
				}
			}
		}
	}()
	<-quit
}
```

![キーイベントデモ](../tcell_key_event.gif)

`ev := screen.PollEvent()` でイベントを待機して、イベントが起こったら`ev`に入ります。
tcellのイベントは`interface`で受け取れるので、さまざまなイベントを入れることができます。

さまざまなイベントが入ってくるので`ev.(type)`によりイベントのタイプを判別します。
キーイベントは`*tcell.EventKey`です。
この判別したときに`switch ev := ev.(type)`で、イベントタイプをキャストして`ev`に入れ直すことで、
case内のイベントでは、evに実際のイベントタイプが渡ります。

その結果`*tcell.EventKey`では、`ev.Key()`でキーイベントが取得できるようになります。

`ev.Key()`ではtcellで定義されているキーが取得できます。通常表示されないような特殊なキー（`Escape`キーは`tcell.KeyEscape`のように）はここで取得できます。
`tcell.KeyEscape`や`tcell.KeyEnter`を取得して終了処理をしています。

表示されるようなキーは`tcell.KeyRune`で判別できて、`ev.Rune()`により`rune`として取得できます。
今回は取得したruneをそのまま`SetContent`でセットしています。

`rune`として取得できるのでインプットメソッドで入力した日本語等も確定した後に一文字づつ取得できます。
分かりやすいように表示した後0.1秒Sleepしています。

イベントのループの前で`screen.Show()`をして、実際の描画しています。

また、日本語入力だけでなく、コピーペーストで貼り付けてもキー入力として取得できます。
逆に言うと端末側が処理するので、基本的に入力方法は判別できません。

### マウスイベント

マウスイベントは端末側が対応している必要がありますが、`*tcell.EventMouse`で、イベントが取得できます。

[tcellの_demos/mouse.go](https://github.com/gdamore/tcell/blob/master/_demos/mouse.go) がよくできているので、そちらを参照するのが良いでしょう。

### リサイズイベント

端末のサイズはリサイズされる場合があります。そうすると端末の全画面を使用しているtcellでは、再描画する必要があります。
その際には、`*tcell.EventResize`イベントで、イベントを取得し画面サイズを`screen.Size()`で取得して再描画をおこないます。
