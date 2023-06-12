---
title: "psqlのPAGERを設定する"
tags: ["psql", "pager", "less", "more", "pspg", "ov", "postgresql"]
categories: ["psql"]
date: 2023-06-11T07:00:00+09:00
---

## psqlのPAGERを設定する

### PAGERをoff/onにする

psqlでは `pset`値により、PAGERをon/off/alwaysにすることができます。alwaysにすると、psql起動時に出力が画面に収まっても常にPAGERが起動します。

オプションで一時的にPAGERをoffにするには以下のようにします（以降`off`の部分は`on`や`always`が指定できる）。

```console
psql -P pager=off
```

`.psqlrc`ファイルに設定すれば以後ずっとPAGERをoffになります。

```~/.psqlrc
\pset pager off
```

起動後にPAGERをoffにする（psqlで接続後に実行する）には`\pset`コマンドを使用します。

```
# \pset pager off
```

`\pset pager`を引数なしで実行するとトグルになり、実行するとon/offが切り替わります。

```
# \pset pager
Pager usage is off.
# \pset pager
Pager is used for long output.
```

#### PostgreSQL 15.0からの追加機能

PostgreSQL 15.0からは、`pager_min_lines`が追加され、画面に収まらない場合に何行以上だったらPAGERを起動するか行数を指定できます。デフォルトは`0`で、画面に収まらない場合にPAGERを起動します（画面に収まる行数を指定しても無効になる）。
`pager_min_lines`よりも`pset pager=always`の方が優先されます。
ターミナルのスクロール等でさかのぼれない場合のみPAGERを起動したい場合に便利です。

```console
psql -P pager_min_lines=10000
```

`pset`値なので、`.psqlrc`や起動後に実行することもできます。

```~/.psqlrc
\pset pager_min_lines 10000
```

```
# \pset pager_min_lines 10000
```

`pset`の値は、`\pset`を実行すると表示されます。pagerの値はoff=0, on=1, always=2になります。

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

psqlでは、`PSQL_PAGER`又は`PAGER`環境変数により、PAGERを変更することができます。`PAGER`は汎用的な環境変数なので、psql以外のコマンドでも使用されるのでpsqlのみに適用したい場合は、`PSQL_PAGER`を使用します。
`PSQL_PAGER`と`PAGER`環境変数がセットされていない場合は、`more`又は`less`がデフォルトのPAGERになる。`less`がある場合は、`less`が優先されます。

```console
PSQL_PAGER=less psql
```

`.psqlrc`ファイルの中で環境変数をセットできるので、以下の設定を入れると恒久的にPAGERを変更できます。

```~/.psqlrc
\setenv PSQL_PAGER less
```

### PAGERの種類

`psql`向きのPAGERは、以下のようなものがあります。

* [less](https://www.greenwoodsoftware.com/less/)
* [pspg](https://github.com/okbob/pspg)
* [ov](https://github.com/noborus/ov)

`more`は、多くの環境で入っているが、psqlのPAGERとしては使いにくいのでおすすめしません。

#### [less](https://github.com/gwsw/less)

`less`は古くからあるPAGERで、大抵はディストリビューションのパッケージになっているので簡単にインストールできます。
`less`は、安定していて、これまで開発にそれほど変化はありませんでしたが、最近になってヘッダーオプションが追加されました。

バージョン600で、`less`のヘッダーを表示するオプションが追加されたので、それ以降のバージョンであれば、以下のように設定するとpsqlのヘッダー（列名）の表示を固定できます。

```console
PSQL_PAGER="less --header 2" psql
```

`--header 2`は、ヘッダーを2行固定表示するオプションです。`--header`オプションを使用したときには、折返し表示をしないモードになります（`-S`相当）。

![psql-less](../psql-less.png)

また、`--header 2,14`のように、2番目の引数を渡すと2行のヘッダーの固定表示に加えて、横スクロールするときに左側を幅14まで固定表示してスクロールできます。ただ、この左側の固定はテーブルによって列の幅は変わるので、オプションで渡すのは望ましくありません。
`less`で表示しているときに、`--header`と入力すると入力モードに切り替わるため、そのときに文字数を入力すると、その文字数で固定表示されます。

```
Header lines: 2,14
```

ただ幅を文字数で指定する必要があるため、使いやすいとは言い難いです。

#### [pspg](https://github.com/okbob/pspg)

`pspg`はpsql用に作られたPAGERで、テーブルを表示するのに便利な機能があります。psqlの出力をアスキーテーブルの形式に変換して、列名がヘッダーとして表示されます。また、列を数字キー入力で簡単に固定表示できる（デフォルトで1が指定されているので、一番左の列が固定表示される）。

`pspg`はテーマがたくさん用意されていて変更できます。`pspg`のテーマは、`pspg --themes`で確認できます。

```console
PSQL_PAGER=pspg psql
```

![psql-pspg](../psql-pspg.png)

#### [ov](https://github.com/noborus/ov)

`ov`は拙作の汎用PAGERでpsqlでの使用を想定して開発を開始しましたが、他の用途でも使えるようにオプションやキーにより必要な機能が切り替えられるようにしたため、汎用でありながらpsqlに向いた表示ができます。

```console
PSQL_PAGER='ov -C -d "|" -H1 --column-mode --column-rainbow' psql
```

ヘッダー行の行数を指定('-H1')して、ヘッダー行を固定表示しています。ヘッダー行に対してスタイルを指定できるため、区切り文字('-')をヘッダーとして扱わなくても済むために1行のみにしています。
またColumn Modeを区切り文字('-d "|"')とともに指定することで、列の選択ハイライト表示が可能です。さらに`--column-rainbow`を追加すると列をそれぞれ別の色で表示できます。

![psql-ov](../psql-ov.png)

`--column-mode`があるためヘッダー行と折り返す表示の両方を同時に使用することができます。

`ov`で区切り文字で列を認識した場合は、縦に揃っていなくてもよいため、以下のように`\a`でalignを切り替えても問題ありません。

![psql-ov2](../psql-ov2.png)

詳細は[ovのpsqlのページ](/ov/psql/)を参照して下さい。

### PSQL_WATCH_PAGER

PostgreSQL 15.0からは`PSQL_PAGER`とは別に`PSQL_WATCH_PAGER`が追加されました。

psqlには`\watch`コマンドがあり、この前に実行したSQLを定期的に実行して結果を表示することができます。このときの表示には`PSQL_PAGER`は使われません。通常PAGERは終了しないと次のSQLの結果を受け取れないため、`\watch`の自動で実行は相性が悪いためです。

ただPAGER側で終了しなくても`\watch`の結果を受け付け続けることができれば、`\watch`の結果をPAGERで表示できます。そのために`PSQL_WATCH_PAGER`が追加されました。

`PSQL_WATCH_PAGER`には`pspg`と`ov`が指定できます。

#### pspgのWATCH対応

pspgを`PSQL_WATCH_PAGER`に指定するときに`--stream`オプションを付けます。

```console
PSQL_WATCH_PAGER='pspg --stream' psql
```

```sql
SELECT * FROM pg_stat_activity;
\watch 1
```

`\watch`により pg_stat_activityの結果が1秒ごとに更新されます。

![psql-pspg-stream](../psql-pspg-stream.png)

#### ovのWATCH対応

ovを`PSQL_WATCH_PAGER`に指定するときに`--follow-section`オプションと`--section-delimiter "^$"`を付けます。

`--follow-section`はovのオプションで、`--section-delimiter`で指定した区切り文字で区切られたセクションでフォローモードを有効にします。
`--section-delimiter`はovのオプションで、`^$`は空行を区切り文字として指定しています。

つまり空行がある位置までをスクロールして表示し、その後は空行がある位置までスクロールして表示を繰り返します。

```console
PSQL_WATCH_PAGER='ov -w=f --follow-section --section-delimiter "^$" -d "|" --column-mode --column-rainbow' psql
```

さらに section-start(`alt+s`) でセクションの開始位置を指定することができます。セクションの開始位置を指定すると、その位置からスクロールして表示を繰り返します。

![psql-ov-watch](../psql-ov-watch.png)
