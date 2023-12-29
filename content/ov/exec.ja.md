---
author: "Noboru Saito"
title: "コマンド実行"
description: "ovからコマンドを実行する"
date: 2023-07-21T06:00:00+09:00
tags: ["ov", "exec"]
categories: ["ov"]
weight: 90
---


通常ページャーは実行した出力をパイプで`ov`に渡しますが、`stdout`と`stderr`をどちらか、または両方を混在させて表示することになります。

```console
make |ov
```

```console
make 2>&1 |ov
```

Execモードは`ov`からコマンドを実行します。
`ov`から実行することで、`stdout`と`stderr`を別々のドキュメントとして表示できます。

さらに`--follow-all`と同時に使うことで、最後に出力された方を表示できます。

つまり、makeの標準出力とエラー出力を別々に表示しながら、エラーがあれば画面を切り替えできます。

```console
ov --follow-all --exec -- make
```

![ov-exec](/ov/ov-exec.gif)
