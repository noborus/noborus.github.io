---
title: "psqlのPAGERを設定する"
tags: ["psql", "pager", "less", "more", "pspg", "ov", "postgresql"]
categories: ["psql"]
date: 2023-06-11T07:00:00+09:00
---

## psqlのPAGERを設定する

### PAGERをoff/onにする

psqlでは `pset`値により、PAGERをon/off/alwaysにすることができる。alwaysにすると、psql起動時に出力が画面に収まっても常にPAGERが起動する。

オプションで一時的にPAGERをoffにする（以降`off`の部分は`on`や`always`が指定できる）。

```console
psql -P pager=off
```

`.psqlrc`で以後ずっとPAGERをoffにする。

```~/.psqlrc
\pset pager off
```

起動後にPAGERをoffにする（psqlで接続後に実行する）。

```
# \pset pager off
```

`\pset pager`を引数なしで実行するとトグルになり、実行するとon/offが切り替わる。

```
# \pset pager
Pager usage is off.
# \pset pager
Pager is used for long output.
```

PostgreSQL 15.0からは、`pager_min_lines`が追加され、画面に収まらない場合の行数に何行以上だったらPAGERを起動するか行数を指定できる
（画面に収まる行数を指定しても無効になる）。
`pager_min_lines`よりも`pset pager=always`の方が優先される。
ターミナルのスクロール等でさかのぼれない場合のみPAGERを起動したい場合に便利。

```console
psql -P pager_min_lines=10000
```

`pset`値なので、`.psqlrc`や起動後に実行することもできる。

```~/.psqlrc
\pset pager_min_lines 10000
```

```
# \pset pager_min_lines 10000
```

`pset`の値は、`\pset`を実行すると表示される。pagerの値はoff=0, on=1, always=2になる。

```
# \pset
border                   1
columns                  0
csv_fieldsep             ','
expanded                 off
fieldsep                 '|'
fieldsep_zero            off
footer                   on
format                   aligned
linestyle                ascii
null                     ''
numericlocale            off
pager                    1
pager_min_lines          10000
recordsep                '\n'
recordsep_zero           off
tableattr                
title                    
tuples_only              off
unicode_border_linestyle single
unicode_column_linestyle single
unicode_header_linestyle single
```

### PAGERを変更する

psqlでは、`PSQL_PAGER`又は`PAGER`環境変数により、PAGERを変更することができる。`PAGER`は汎用的な環境変数なので、psql以外のコマンドでも使用される。psqlのみに適用したい場合は、`PSQL_PAGER`を使用する。
`PSQL_PAGER`と`PAGER`環境変数がセットされていない場合は、`more`又は`less`がデフォルトのPAGERになる。`less`がある場合は、`less`が優先される。

```console
PAGER=less psql
```

`.psqlrc`で恒久的にPAGERを変更する

```~/.psqlrc
\setenv PAGER less
```

### PAGERの種類

`psql`向きのPAGERは、以下のようなものがある。

* [less](https://www.greenwoodsoftware.com/less/)
* [pspg](https://github.com/okbob/pspg)
* [ov](https://github.com/noborus/ov)

`more`は、多くの環境で入っているが、psqlのPAGERとしては使いにくいのでおすすめしない。

#### [less](https://github.com/gwsw/less)

`less`は古くからあるPAGERで、多くの環境で入っている。又は、ディストリビューションのパッケージになっているので簡単にインストールできる。
`less`は、安定していて、これまで開発にそれほど変化はなかったが、最近になってヘッダーオプションが追加された。

v600以上であれば、`less`のヘッダーを表示するオプションが追加されたので、以下のように設定すると、psqlのヘッダー（列名）が固定で表示される。

```console
PAGER="less --header 2" psql
```

`--header 2`は、ヘッダーを2行固定表示するオプション。`--header`オプションを使用したときには、折返し表示をしないモードになる（`-S`相当）。

![psql-less](../psql-less.png)

また、`--header 2,14`のように、2番目の引数を渡すと2行のヘッダーの固定表示に加えて、横スクロールするときに左側を幅14まで固定表示してスクロールできる。ただ、この左側の固定はテーブルによって列の幅は変わるので、オプションで渡すのは望ましくない。
`less`で表示しているときに、`--header`と入力すると入力モードに切り替わるため、そのときに文字数を入力すると、その文字数で固定表示される。

```
Header lines: 2,14
```

幅を文字数で指定する必要があるため、使いやすいとは言い難い。

#### [pspg](https://github.com/okbob/pspg)

`pspg`はpsql用に作られたPAGERで、テーブルを表示するのに便利な機能がある。psqlの出力をアスキーテーブルの形式に変換して、列名がヘッダーとして表示される。また、列を数字キー入力で簡単に固定表示できる（デフォルトで1が指定されているので、一番左の列が固定表示される）。

`pspg`はテーマがたくさん用意されていて変更できる。`pspg`のテーマは、`pspg --themes`で確認できる。

```console
PAGER=pspg psql
```

![psql-pspg](../psql-pspg.png)

#### [ov](https://github.com/noborus/ov)

`ov`は拙作の汎用PAGERでpsqlの表示を改善するために開発を開始したが、通常はそのまま表示し、オプションやキーにより切り替えられるようにしたため、汎用でありながらpsqlに向いた表示ができる。

```console
PAGER='ov -F -C -d "|" -H1 --column-rainbow' psql
```

折り返さない表示に切り替えることもできるが、ヘッダーを表示したまま折返し表示もできる。また、列の幅が揃っていなくても行と列がわかりやすく表示もできる。

詳細は[ovのpsqlのページ](/ov/psql/)を参照して下さい。
