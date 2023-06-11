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

#### less

#### pspg

#### ov
