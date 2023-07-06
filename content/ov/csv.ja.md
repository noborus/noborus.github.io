---
author: "Noboru Saito"
title: "view csv"
date: 2023-06-30T06:00:00+09:00
tags: ["ov", "csv"]
categories: ["ov"]
weight: 10
---

`ov`をCSV Viewerとして使うことができます。
ヘッダーの有無や区切りも文字を指定できます。

```console
ov -H1 -C -d',' -c --column-rainbow MOCK_DATA.csv
```

![ov-csv.gif](/ov/ov-csv.gif)
