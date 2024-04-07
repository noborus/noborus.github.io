---
title: "trdsql v1.0.0"
date: 2024-4-08T06:00:00+09:00
tags: ["trdsql"]
categories: ["trdsql"]
---

# [trdsql v1.0.0をリリースしました。](https://github.com/noborus/trdsql/releases)

[リリース](https://github.com/noborus/trdsql/releases/tag/v1.0.0)のページから各バイナリがダウンロードできます。

安定して動作していると判断してv1.0.0としました。

## 変更点

v0.20.0で複数のSQLを実行できるようになりました。`Update`して`SELECT`できるようになりました。
https://github.com/noborus/trdsql?tab=readme-ov-file#multiple-queries-(v0.20.0-or-later) を参照してください。

SQLの解釈を少し柔軟にしました。

```sql
SELECT*FROM test.csv;
```

のようなSQLもエラーとならずに実行できるようになりました。