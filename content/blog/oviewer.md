+++
author = "Noboru Saito"
title = "ov"
date = "2020-04-21T14:50:00+09:00"
description = ""
tags = [
    "ov",
    "terminal pager",
]
categories = [
    "ov",
]
+++

私が作成中の[ov](https://github.com/noborus/ov)の紹介です。

最初Oviewerというレポジトリ名でしたが、コマンド名に合わせるように`ov`に変更しました。

## インストール

[ov](https://github.com/noborus/ov) のリリースからバイナリもダウンロードできますが、今はまだgo getで最新をダウンロードして使うことをオススメします。

※ 2020/5/11追記。現在は各種パッケージも用意していますので、インストールしやすい方法利用してください。

```console
go get -u github.com/noborus/ov
cd ov
make install
```

## 特徴

`less`や`more`のようなTerminal pagerです。

* 圧縮（gzip, bzip2, zstd, lz4, xz）されているファイルをそのまま表示可能
* より良いUnicodeのサポート。ターミナルで表示できる（フォントがあれば）結合文字も表示可能
* より良いワイド幅（全角文字）の対応
* ヘッダーの行数を指定して固定可能
* 行の折り返し／折り返さないを表示後に切替可能
* 1行毎に背景色を付けることが可能
* psqlやmysqlからの表示を考慮
* 終了時に現在の画面の内容を書き出すことが可能

環境変数PAGERに設定して使用しても問題なく使えることを目指しています。

現在はUTF-8のテキストを対象にしています。

~~また、manのpagerとしては、問題があるので、MANPAGERは別途指定する必要があります。~~

※ 2020/5/25 追記 v0.2.0からMANPAGERとしても使用できるようになりました。

### 実装の特徴

[tcell](https://github.com/gdamore/tcell)を使用していて、比較的多くの端末に対応しています。
メモリに溜め込む実装なので、メモリは多く使用します。更新されるログファイルの監視的な用途には向きません。

## 使用方法

コマンド名は `ov` です。

基本的にはファイル名を指定して起動します。

```console
ov filename
```

又はパイプを使用して標準入力からの入力を受け付けます。

```console
cat filename|ov
```

オプションは以下です。オプションの多くは、起動後にキーより切り替え可能です。

```console
$ ov --help
ov is a feature rich pager(such as more/less).
It supports various compressed files(gzip, bzip2, zstd, lz4, and xz).

Usage:
  ov [flags]

Flags:
  -C, --alternate-rows            color to alternate rows
  -i, --case-sensitive            case-sensitive in search
  -d, --column-delimiter string   column delimiter (default ",")
  -c, --column-mode               column mode
      --config string             config file (default is $HOME/.oviewer.yaml)
      --debug                     debug mode
  -X, --exit-write                output the current screen when exiting
  -H, --header int                number of header rows to fix
  -h, --help                      help for ov
  -n, --line-number               line number
  -F, --quit-if-one-screen        quit if the output fits on one screen
  -x, --tab-width int             tab stop width (default 8)
  -v, --version                   display version information
  -w, --wrap                      wrap mode (default true)
```

### 圧縮してあるファイルの対応

元々の作成の動機でもあるのですが、圧縮してあるファイルをそのまま閲覧できます。

```console
ov test.csv.zst
```

拡張子に関係なくファイルの先頭のマジックナンバーを見て判断しているため、パイプからでも動作します。

```console
cat test.csv.zst|ov
```

## psqlでの使用

[psql](https://www.postgresql.jp/document/current/html/app-psql.html)から呼び出されるPAGERとしても考慮しています。

psqlでは環境変数PAGER又は（PostgreSQL Ver.11.0からは）PSQL_PAGERが設定されているとPAGERを使用します。
~/.psqlrcによりpsql起動時に以下のように環境変数を設定することもできますので、以下のように設定することを推奨します。

```.psqlrc
\setenv PAGER 'ov -H2 -w=f -F -C -d "|"'
```

これによりpsqlでは、`-H2`2行の固定ヘッダー、`-w=f`折り返しをしない、`-F`終了時に表示していた内容を書き出す（ほぼ、クリアしないと同じ動作）、`-C`1行毎に背景色を付ける、区切り文字として"|"を使用という動作になります。

これは起動時の動作のため、起動後以下のように切り替えることが可能です（`-F` は終了時に必ず書く設定なので、`-F`を付けずに起動すれば、`q`で書き出さないで終了（クリアする）、`Q`で書き出して終了する、というような動作になります。

### 折り返し／折り返さない(w)

![wrap/nowrap](https://raw.githubusercontent.com/noborus/ov/master/docs/ov-wrap.gif)

### 1行毎に背景色を付ける／付けない(C)

![color enable/disable](https://raw.githubusercontent.com/noborus/ov/master/docs/ov-color.gif)

### 固定するヘッダーの行数指定 (H)

入力モードになるので行数を入力する。

![header](https://raw.githubusercontent.com/noborus/ov/master/docs/ov-header.gif)

### 列モード(c)

(`d`) で指定した区切り文字に囲まれた列として選択できるようになります。選択されている列がハイライト表示されます。
wrap/nowapで動作が変わり、nowrapモードの場合は、選択した列が表示されるように横スクロールします。

![column](https://raw.githubusercontent.com/noborus/ov/master/docs/ov-column.gif)

### 行番号モード(G)

(`G`)で先頭に行番号が表示されます。

## mysqlでの使用

またmysqlから使用されるPAGERとしても同様に使用できます。

```console
mysql -pager='ov -H3 -w=f -C -d "|"'
```

$(HOME)/.my.cnfにPAGERの設定を書いておくこともできます。

```$(HOME)/.my.cnf
[client]
pager=ov -H3 -w=f -C -d "|"
```

## ヘッダーがあるコマンド出力のページャー

たとえば、よく使用する`ps`で全プロセスを出すと見づらくなりますが、以下のようにすると見やすくなります。

```console
ps aux|ov -H1 -C -w=f
```

![ps-ov.png](../ps-ov.png)

Debian/Ubuntuのインストールしているパッケージリストも以下のようにして見ることができます。

```console
dpkg -l|ov -H5 -w=f -C
```

![dpkg-ov.png](../dpkg-ov.png)

起動後にもヘッダーや折り返し、背景色の変更もできるため、とりあえずovに渡してから見やすい表示に変更するといった使い方ができると考えています。
