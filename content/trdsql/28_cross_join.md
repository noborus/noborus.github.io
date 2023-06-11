+++
author = "Noboru Saito"
title = "trdsql CROSS JOIN"
date = "2019-12-28"
description = "trdsqlでCROSS JOINを使ってみます。"
weight = 28
tags = [
    "trdsql",
    "CROSS",
    "JOIN",
]
categories = [
    "trdsql",
]
+++

`CROSS JOIN`は、総当りを簡単に作り出せる方法です。

a.csv

```CSV
aa
ab
ac
```

b.csv

```CSV
ba
bb
bc
```

の２つのCSVを`CROSS JOIN`すると 3×3で全ての組み合わせを出力できます。

```sh
trdsql "SELECT * FROM a.csv CROSS JOIN b.csv"
aa,ba
aa,bb
aa,bc
ab,ba
ab,bb
ab,bc
ac,ba
ac,bb
ac,bc
```

また一つのファイルに対して自己結合をすることもできます。
例えば、ホーム＆アウェーの総当り表を作成してみます。

cleague.csv

```CSV
team
巨人
DeNA
阪神
広島
中日
ヤクルト
```

単純に`CROSS JOIN`するには以下のようになります（JOIN条件は無いので書けません）。

```sh
trdsql -ih \
"SELECT h.team,a.team "\
"  FROM cleague.csv AS h "\
" CROSS JOIN cleague.csv AS a"
```

自分のチームとは対戦出来ないので、同じチームのときを`WHERE h.team != a.team`により除外します。

```sh
trdsql -ih -omd \
"SELECT h.team AS home,a.team AS aware " \
"  FROM cleague.csv AS h CROSS JOIN cleague.csv AS a "\
" WHERE h.team != a.team "
```

|   home   |  aware   |
|----------|----------|
| 巨人     | DeNA     |
| 巨人     | 阪神     |
| 巨人     | 広島     |
| 巨人     | 中日     |
| 巨人     | ヤクルト |
| DeNA     | 巨人     |
| DeNA     | 阪神     |
| DeNA     | 広島     |
| DeNA     | 中日     |
| DeNA     | ヤクルト |
| 阪神     | 巨人     |
| 阪神     | DeNA     |
| 阪神     | 広島     |
| 阪神     | 中日     |
| 阪神     | ヤクルト |
| 広島     | 巨人     |
| 広島     | DeNA     |
| 広島     | 阪神     |
| 広島     | 中日     |
| 広島     | ヤクルト |
| 中日     | 巨人     |
| 中日     | DeNA     |
| 中日     | 阪神     |
| 中日     | 広島     |
| 中日     | ヤクルト |
| ヤクルト | 巨人     |
| ヤクルト | DeNA     |
| ヤクルト | 阪神     |
| ヤクルト | 広島     |
| ヤクルト | 中日     |
