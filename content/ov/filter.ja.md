---
author: "Noboru Saito"
title: "フィルターサーチの使い方"
date: 2024-04-22T08:00:00+09:00
lastmod: 2025-12-09T15:40:00+09:00
description: "ovの高度な検索機能を使用して検索結果を効率的にフィルタリングする"
tags: ["ov", "search", "filter", "grep"]
categories: ["ov"]
weight: 91
---
検索してマッチした行のみを表示できます。

## マッチした行のみを表示

前方検索（/）、後方検索（?）と同様に（&）を入力すると検索語の入力モードになります。
このとき「正規表現」や「大文字小文字の区別」などの入力モードは検索と共通になっていて引き継れます。

ovのフィルターサーチは、元のドキュメントを変更するのではなく、「新しいドキュメント」を作成して移動し、そこにマッチした行のみを表示します。
このときヘッダー行の指定をしていた場合は、そのヘッダー行も表示されます。

ドキュメント間は移動できるため、フィルターの結果を残したまま元もドキュメントに戻ることもできます。
複数ファイルを開いている場合と同様にドキュメントを`[`と`]`で切り替えることができます。

また、フィルターサーチの結果から、さらにフィルターサーチを行うこともできます。

![filter](/ov/ov-filter.gif)

## マッチしない行を表示

(&)で検索語の入力モードのときに、`!`を入力するとマッチしない行を表示する（Non-match）モードになります（トグル）。

## フィルターサーチの終了

フィルターサーチで作成されたドキュメントは`K`（大文字）ですべて閉じます。
そのドキュメントのみを閉じる`ctrl+k`も使用できます。

## 行番号連動

フィルターサーチで表示されている行番号は、元のドキュメントの行番号と連動しています。
フィルターサーチで表示されている行（一番上にある行）で前のドキュメントに`[`で移動すると、元のドキュメントのその行に移動します。
検索の場合は、複数のヒットがあったときに1つづつ移動していく必要がありますが、フィルターでは検索のヒットを全体で見渡してから必要な場所に移動できるため、効率的に移動できます。

## フィルターと`--quit-if-one-screen`の併用

`--quit-if-one-screen`と併用すると、フィルターで1画面に収まる場合はそのまま終了します。
`--header`を指定している場合は、ヘッダー行も表示されます。

これらを併用すると、便利な`grep`として使用できます。

```console
ps aux|ov --quit-if-one-screen --header --filter "postgres"
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
postgres    1589  0.0  0.0 221992 29952 ?        Ss   Jul24   0:05 /usr/lib/postgresql/14/bin/postgres -D /var/lib/postgresql/14/main -c config_file=/etc/postgresql/14/main/postgresql.conf
postgres    1624  0.0  0.0 222104 11336 ?        Ss   Jul24   0:00 postgres: 14/main: checkpointer
postgres    1626  0.0  0.0 221992  8904 ?        Ss   Jul24   0:01 postgres: 14/main: background writer
postgres    1627  0.0  0.0 221992 11464 ?        Ss   Jul24   0:01 postgres: 14/main: walwriter
postgres    1628  0.0  0.0 222560  9928 ?        Ss   Jul24   0:02 postgres: 14/main: autovacuum launcher
postgres    1629  0.0  0.0  76728  7112 ?        Ss   Jul24   0:02 postgres: 14/main: stats collector
postgres    1631  0.0  0.0 222420  8904 ?        Ss   Jul24   0:00 postgres: 14/main: logical replication launcher
noborus   747819  0.0  0.0 1603756 7552 pts/0    Rl+  15:50   0:00 ov -H1 --filter postgres --quit-if-one-screen
```
