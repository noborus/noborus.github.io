---
title: "trdsql v0.11.1"
date: 2023-03-19T07:17:08+09:00
tags: ["trdsql"]
categories: ["trdsql"]
---

# [trdsql v0.11.1をリリースしました。](https://github.com/noborus/trdsql/releases)

[リリース](https://github.com/noborus/trdsql/releases/tag/v0.11.1)のページから各バイナリがダウンロードできます。

[guesswidth](https://github.com/noborus/guesswidth)を使用して、幅が固定長の列をテーブルとして扱えるようにしました。

これまでは`ps`の出力等をスペース（複数の連続スペースがあっても1つとみなす）区切りで、`CSV`として解釈するといったことをしてきましたが、スペースの規則が決まっているわけではなく不正確でした。

完璧ではありませんが、幅を推測することでより良く解釈することが可能です。

```console
ps|trdsql -iwidth "SELECT * FROM -"
1067693,pts/0,00:00:08,zsh
1123441,pts/0,00:00:00,ps
1123442,pts/0,00:00:00,trdsql
```

例えば、`ps`の出力をjsonにしたり、`docker ps`の出力をアスキーテーブルで表示できたりします。
