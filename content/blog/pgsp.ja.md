---
author: "Noboru Saito"
title: "pgsp"
date: 2021-07-14T15:00:00+09:00
tags: ["pgsp", "PostgreSQL", "bubbletea"]
categories: ["pgsp"]
---

[pgsp](https://github.com/noborus/pgsp) は PostgreSQLの pg_stat_progress viewを監視して表示するCLIツールです。

## pg_stat_progress

PostgreSQLでは、いくつか時間がかかる処理に対して進捗状況が見られるViewがあります。
Viewの名前は pg_stat_progressではじまり、analyze, cluster, create_index, vacuum, basebackup (version 14からは copyが追加される予定)などが取得できます。

詳しくは [progress-reporting](https://www.postgresql.jp/document/current/html/progress-reporting.html)を参照してください。

これらのViewは処理が始まったときにレコードが追加されて、変化する処理状況（フェーズや処理した数）を更新していき、終了するとレコードが消えます。SQLで簡単に確認できるので便利ですが、常に更新されていくため、状況を逐一見たいときにはpsqlでは`\watch`等を利用してSELECTを繰り返して見る必要があります。

```SQL
SELECT * FROM pg_stat_progress_analyze; 
```

## pgsp

pgspはこれらのViewを監視して表示する専用のCLIツールです。Go製です。
やっていることはシンプルでpg_stat_progress_* のViewを定期的に`SELECT`で取得し、レコードが追加、更新されたら進捗に相当する数値でプログレスバーを更新します。

![pgsp](https://raw.githubusercontent.com/noborus/pgsp/master/docs/pgsp.png)

PostgreSQLに普通に接続にいくので接続情報（ホスト、ポート、ユーザー、パスワード等）が必要です。
`--dsn`で設定してください。


```console
pgsp --dsn 'host=ホスト名 port=ポート番号 user=ユーザー名 password=パスワード'
```

UNIXドメインソケットを使用する場合はhostにpathを書きます。

```console
pgsp --dsn 'host=/var/run/postgresql'
```

設定ファイルとして $HOME/.pgsp.yaml に書くこともできます。

```pgsp.yaml
dsn: host='/var/run/postgresql/' user='postgres'
```

起動すると定期的にViewにSELECTを実行します。レコードがなければスピンが回るだけです。

何らかの処理が走ってViewにレコードが追加されるとViewの内容とプログレスバーが表示されます。Viewの内容はTerminalの表示域によって変わるようになっています。

また、Viewは処理が終わるとレコードが削除されますが、pgspでは少しの間（デフォルトで10秒）表示し続けるようになっています。この時間は `-a` `--AfterCompletion`により調整できます。

10分経過まで表示しておきたい場合は以下のようにします。

```console
pgsp -a 600
```

更新間隔は`-i` `--Interval`によって指定できます（デフォルトは 0.5秒)。処理によってはすぐに終わってしまうので、0.5秒間隔だと、実際には処理が行われていたにも関わらず捕捉出来ない場合があります。その場合は更新間隔を0.1秒等にしてみてください。

逆に負荷が気になる場合は1以上に設定すると良いでしょう。

## Bubble Tea

CLIツールの表示は[Bubble Tea](https://github.com/charmbracelet/bubbletea) を使用しておこなっています。

Bubble TeaではTerminal上で、その場で表示するアプリケーションが簡単に作成出来るようになっています。その例でもあるプログレスバーをシンプルに利用しています。

また、Terminal全体を使用してのアプリケーションも作成出来るため、pgspでも`-f` `--fullscreen`オプションによりTerminal全体を表示できるようになっています。

fullscreenで表示した場合は起動前の表示内容はそのまま、別途別のコンソールが開かれ、終了後は元の画面に戻ります。お好みで使い分けてください。

