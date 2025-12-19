---
author: "Noboru Saito"
title: "フォローモードの使い方"
date: 2023-07-21T06:00:00+09:00
lastmod: 2025-12-19T15:00:00+09:00
description: "リアルタイム更新のためにovのフォローモードを使用する方法"
tags: ["ov", "tail"]
categories: ["ov"]
weight: 90
---

出力されたデータを追加して、最下行に移動します（tail -fのように）。

`ov`はfollowモードで入力検索などの操作が可能です（インクリメンタルサーチも！）。

```console
docker run chentex/random-logger:latest 100 400 |ov --follow-mode
```

![ov-tail](/ov/ov-tail.gif)

## Follow Name

`--follow-name` オプションは、ファイル名が変更された場合に新しいファイルをフォローします。これはログローテーションに便利です。

```console
ov --follow-name /var/log/myapp.log
```

## Sticky Follow

v0.44.0 で追加された Sticky Follow は、フォローモードで下端から上にスクロールしたときに自動的に一時停止する動作です。これにより、監視中に過去の出力を調べても位置が失われず、最下部に戻ると自動的にフォローが再開されます。

特徴:

- デフォルトで有効：フォローモードは Sticky Follow を使用します。
- 一時停止中はステータス行の先頭に `||` が表示されます。
- 一時停止した行は `PauseLine` スタイルでハイライトされます。

![sticky-follow](/ov/sticky-follow.gif)

無効化するには設定ファイルに次を追加します。

```yaml
General:
    DisableStickyFollow: true
```
