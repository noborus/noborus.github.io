---
author: "Noboru Saito"
title: "メモリ管理"
date: 2023-07-07T06:00:00+09:00
description: "ovを使用してメモリ使用量を効果的に管理する"
tags: ["ov", "memory"]
categories: ["ov"]
weight: 100
---

## メモリ管理

### 通常ファイル

 `ov` はChunkSize（10,000行）毎にChunkに分けて管理しています。
 たとえば、73,210行のファイルは以下の図のように7つのChunkに分割されます。

![file memory management](../ov-file-mem.png)

最初のChunk (Chunk0) は常にメモリにロードされたままになります。
Chunk3とChunk4もメモリにロードされます。表示時に2つのChunkにまたがる可能性があるためです。
Chunk1とChunk2は以前に使用されていてメモリにロードされていますが、制限を超えると解放されます。
通常のファイルの場合、シークしながらメモリをロードして解放することで、メモリと速度を節約できます。

### 通常ファイル以外

`seek` できないファイル（パイプや圧縮ファイル）もChunk単位で管理していますが、一度解放するとメモリにロードすることはできないため、できるだけメモリにロードします。
メモリ制限がある場合は、メモリ制限まで読み込んでから読み込みを一時停止します。

![non-file memory management](../ov-mem-mem.png)

たとえば、41230行に移動すると、Chunk1、Chunk2、Chunk3が解放され、現在の位置から先読みされます。

### メモリ制限

通常ファイルのデフォルトのメモリ制限は100（100万行）です。
あまり変更する必要はないと思いますが、`--memory-limit-file` で指定できます。

```console
ov --memory-limit-file 10 large.log
```

通常ファイル以外のメモリ制限のデフォルトは-1（無制限）です。

メモリ不足を避けるためにメモリに応じて制限したほうがよいでしょう。
`ov.yaml` に `MemoryLimit: 10000(or 1000)` のように設定することをオススメします。

```yaml
MemoryLimit: 10000
```

コマンドラインオプションでも `--memory-limit 1000` のように指定できます。

```console
command | ov --memory-limit 1000
```

メモリ制限オプションを指定しても、大きなファイルはメモリを多く使用します。
GCを頻繁に実行するために `GOMEMLIMIT` を設定すると、一時的なメモリの増加も抑制されます。

```console
export GOMEMLIMIT=400MiB
ov --memory-limit-file 10 large.log
```
