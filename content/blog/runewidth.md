+++
author = "Noboru Saito"
title = "GoのTUIで表示が崩れる場合"
date = "2020-04-06T16:10:00+09:00"
description = ""
tags = [
    "runewidth",
    "go",
    "ambiguous width",
    "gnome-terminal",
    "tui",
]
categories = [
    "go",
    "tui",
]
+++

## 結論

gnome-terminalを使用している場合は、設定の「曖昧幅の文字(W)」と環境変数`RUNEWIDTH_EASTASIAN`を一致させよう。

## Ambiguous width(曖昧幅)

ターミナル上のアプリケーション(TUI)では、GUIと違って文字単位で描画されます。
そして1文字の幅は固定されていて、アルファベットは1文字分とすると日本語などは2文字分使用する、いわゆる半角全角の世界です。
ただし、既にUnicode(UTF-8)が標準となっているので、バイト数と文字幅は関係しないようになっています。

Unicodeでは幅が決まっている文字がほとんどですが、一部に「Ambiguous; 曖昧」とされている文字があります。

以前は英語圏のアプリケーションではASCIIの範囲内のみを使用していて「Ambiguous」な範囲の文字を使用するのは、それ以外の地域の人だったため、全角幅で問題になることは無かったのですが、Unicodeの使用が拡大するにつれて英語圏の方が作るアプリケーションでも「Ambiguous」な幅の文字が使用されることが増えてきました。

特にTUIアプリケーションでは、罫線「┌ ├ ─ ┘等」を使用して枠線を表現することがあります。これが「Ambiguous」な幅として、英語圏では1文字幅で表示できる様になっているため、2文字幅と解釈して表示しようとすると表示が崩れてしまいます。

ターミナル上で罫線を使用したプログラムがズレる場合はこれが原因です。

そのための対応として、gnome-terminalではPreferencesから「曖昧幅の文字(W)」を半角／全角で変更出来るようになっています。

![ambiguous_width.png](../ambiguous_width.png)

これを半角にすれば、罫線が1文字幅で表示されるため、表示が直ります。
例えば、`psql`の `\pset linestyle unicode`をgnome-terminalで使用するには、ここを半角にしておかないと縦の線が揃わなくなります。

ただし、これはアプリケーションが幅を半角幅と仮定しているのに合わせているだけなので、別のアプリケーションでは合わなくなるといったことが起こります。

### go-runewidth のAmbiguous width

go言語では、１文字がターミナルで半角なのか全角なのかを判断するには、[go-runewidth](https://github.com/mattn/go-runewidth)で判断するのがデファクトスタンダードになっていると思います。

go-runewidthでは、ロケールに従ってAmbiguousな幅を決定していて日本語を使用している場合(ja_JP.UTF-8等)は、全角（2文字幅）になります。

この場合、上記のgnome-terminalで「曖昧幅の文字(W)」を半角にしていた場合は、余分な隙間が空いて表示が崩れたようになります。
`LANG=C`でアプリケーションを起動し直してみて表示が正常になる場合は、この「曖昧幅の文字(W)」とgo-runewidthが解釈するロケールに齟齬が起こっていることになります。

go-runewideth ではロケールの他に環境変数`RUNEWIDTH_EASTASIAN`によりAmbiguousな幅を変更できますので、gnome-terminalではPreferencesの「曖昧幅の文字(W)」が半角の場合は、環境変数`RUNEWIDTH_EASTASIAN`を0に全角の場合は1に設定しておくとgo言語のTUIアプリケーションの表示の乱れが無くなるのでは無いかと思います。
