---
author: "Noboru Saito"
title: "csvの表示"
description: "ovをCSVビューアとして使う"
date: 2024-11-10T11:00:00+09:00
tags: ["ov", "csv"]
categories: ["ov"]
weight: 10
---

`ov`をCSVビューアとして使うことができます。
ヘッダーの有無や区切りも文字を指定できます。

```console
ov -H1 -C -d',' -c --column-rainbow MOCK_DATA.csv
```

![ov-csv.gif](/ov/ov-csv.gif)

v0.37.0からは`--align`オプションを追加することで、列を整列できます。

```console
ov -H1 -C -d',' -c --column-rainbow --align=right MOCK_DATA.csv
```

### 整列なし

![整列なし](/ov/ov-csv1.png)

### 整列あり(align)

![整列あり](/ov/ov-csv2.png)

###  整列あり(align)折返しなし(wrap=false)

![整列あり折返しなし](/ov/ov-csv3.png)

### 列の縮小

さらに整列(align)を有効にしていると列を縮小することができます。列の縮小は列を選択しているときにsキー（デフォルト）を押すことでトグルで切り替えられます。

![列の縮小](/ov/ov-csv4.png)
