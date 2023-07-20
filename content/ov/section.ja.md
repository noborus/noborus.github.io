---
author: "Noboru Saito"
title: "How to use section"
date: 2023-07-21T06:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 99
---

`ov`は複数行のブロックをセクションとして表示できます。
セクションのブロックはセクション区切り行で区切られます。
セクション区切り行は`StyleSectionLine`のスタイル(背景色緑)で表示されます。

The section delimiter is optionally specified as a regular expression string at startup.
セクション区切りは、起動時に正規表現文字列としてオプションで指定できます。

```console
ov --section-delimiter "^$"
```

起動後は、セクション区切りを入力モードで入力することで設定できます。
セクション区切りの入力モードは、section_delimiterのキーバインディング(alt + d)で入力できます。

```input
Section delimiter: ^$
```

![start0](/ov/start0.png)

セクション区切りが不要な場合(空行など)は、`--section-start 1`を使うことで次の行から表示できます。

![start1](/ov/start1.png)

`--follow-section`は、フォローモードの行の代わりにセクションを使用します。

[\watch of psql](/ov/psql/#watchpostgresql-15)との併用に適しています。
