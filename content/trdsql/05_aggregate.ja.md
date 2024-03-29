+++
author = "Noboru Saito"
title = "trdsql 集計"
date = "2019-12-05"
description = "trdsqlの集計"
weight = 5
tags = [
    "trdsql",
    "sql",
    "count",
]
categories = [
    "trdsql",
]
+++

## COUNT(*)

最初はCOUNT(*)です。全体の件数を数えることが出来ます。

集計関数を使用すると元の行と列のデータは出力されず、そこから集計された結果が出力されます。

以下の例は結果が１行なので、CSVの様に見えませんが、1行1列(ヘッダー付き)のCSVとして出力されています。

{{% notice %}}
単純に件数を数えるだけですが、ヘッダーと解釈して数に含まないか等の注意が必要です。
{{% /notice %}}

```console
trdsql -icsv -ih -oh "SELECT COUNT(*) FROM header.csv"
```

```
count(*)
3
```

検索条件の指定が出来ます。検索条件にあてはまる件数を知りたい時に使用します。

```console
trdsql -icsv -ih -oh "SELECT COUNT(*) FROM header.csv WHERE id<'1'"
```

```
count(*)
2
```

## COUNT(列名)

COUNT(列名) もよく使用します。RDBMSではNULLが除外されるので、COUNT(*)とは区別して使われます。

また、COUNTとDISTINCTを組み合わせると重複を省いた件数を出力できます。

以下のようなCSVファイルで実行してみます。

```abc.csv
id,name
1,aaa
2,bbb
3,ccc
4,aaa
```

```console
trdsql -icsv -ih -oh "SELECT COUNT(name) FROM abc.csv"
```

```
count(name)
4
```

```console
trdsql -ih -oh "SELECT COUNT(DISTINCT name) FROM abc.csv"
```

```
COUNT(DISTINCT name)
3
```

集計関数は一度に実行することもできます。

```console
trdsql -ih -oh "SELECT COUNT(name), COUNT(DISTINCT name) FROM abc.csv"
```

```
COUNT(name),COUNT(DISTINCT name)
4,3
```
