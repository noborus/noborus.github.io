---
author: "Noboru Saito"
title: "execute command"
date: 2023-07-21T06:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 90
---

Exec mode executes commands from ov. In Exec mode,
`stdout` and `stderr` can be displayed as separate documents.

Execモードはovからコマンドを実行します。Execモードでは、
`stdout`と`stderr`を別々のドキュメントとして表示できます。

`--follow-all`と同時に使うことで、最後に出力された方を表示することができます。

例えば、makeの標準出力とエラー出力を別々に表示しながら、
エラーがあれば画面を切り替えることができます。

```console
ov --follow-all --exec -- make
```

![ov-exec](/ov/ov-exec.gif)
