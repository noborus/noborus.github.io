---
author: "Noboru Saito"
title: "pgcli"
date: 2024-02-28T06:00:00+09:00
description: "データベースクエリ結果の可視化を向上させるためにovをpgcliのページャーとして統合する"
tags: ["ov", "pgcli", "PostgreSQL"]
images: ["/ov/ov-pgcli-section.gif"]
categories: ["ov"]
weight: 5
---

`ov`は[pgcli](https://github.com/dbcli/pgcli)のページャーとしても使用可能です。

`~/.config/pgcli/config`に以下のように設定します。

```config
pager = 'ov -C -d "|" --skip-lines 1 -H1'
```

pgcliでは複数の結果を表示できます。
その場合は、固定ヘッダー行ではなくセクションヘッダーを使用すると便利です。
`table_format`を`psql_unicode`に設定するとUnicodeで枠が表示されるため、クエリ結果の区切りが指定できるようになります。
その枠の開始を指定してセクションヘッダーを設定します。

```config
pager = 'ov -C -d "│" --section-delimiter "^┌" --section-header-num 3 --column-rainbow --column-mode'
table_format = psql_unicode
```

![pgcli-section](/ov/ov-pgcli-section.gif)
