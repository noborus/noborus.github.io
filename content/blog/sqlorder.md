+++
author = "Noboru Saito"
title = "SQLのORDER BY 列番号と式"
date = "2020-10-31T12:53:00+09:00"
description = ""
tags = [
    "sql",
    "order by",
]
categories = [
    "sql",
]
+++

## きっかけ

きっかけはtom__boさんの[8.0.22でのprepared statementの挙動変化](https://tombo2.hatenablog.com/entry/2020/10/29/135053) で、ORDER BY に列番号を指定する問題に注目が集まったことです。

その中で紹介されていた、

{{< blockquote >}}
For a prepared statement of the form SELECT expr1, expr2, ... FROM table ORDER BY ?, passing an integer value N for the parameter no longer causes ordering of the results by the Nth expression in the select list; the results are no longer ordered, as is expected with ORDER BY constant.
{{< /blockquote >}}

「the results are no longer ordered, as is expected with ORDER BY constant.」を見て？？なったので、ちょっと調べてみることに。

## SQLのORDER BY

SQLでは「ORDER BY」に列名を指定して出力順をソートさせるのが一般的な使い方です。

```SQL
SELECT * FROM test_table ORDER BY c1;
1,Orange
2,Melon
3,Apple
```

SELECTのリストに含まれていなくても列名は指定できます。

```SQL
SELECT c2 FROM test_table ORDER BY c1;
Orange
Melon
Apple
```

さらに列名だけでなく「式」も使用できます。

```SQL
SELECT c1%2, c1, c2 FROM test_table ORDER BY c1%2;
0,2,Melon
1,1,Orange
1,3,Apple
```

そして、厄介なのはここからです。ORDER BYは列番号を使用できる実装が多く存在します。
これは、SQL-92で標準に入って、その後削除されたとのことなので、大抵の実装では使えてしまいます。

```SQL
SELECT c1,c2 FROM test_table ORDER BY 1;
// <-- c1でソートされる
1,Orange
2,Melon
3,Apple
```

使えてしまいますが、大抵は非推奨になっています。混乱をもたらしますし、実装的にも厄介そうです。
列番号と「式」が使えるようにするには「式の結果」と列番号は別にしないとなりません。

つまり

```SQL
SELECT c2 FROM test_table ORDER BY 2;
```
と
```SQL
SELECT c2 FROM test_table ORDER BY 1+1;
```

は別物になるわけです。そして後者は1+1の結果（全部の行が同じ結果になるのでソートされない）でソートと考えればスッキリします。

```SQL
SELECT 1+1, c2 FROM test_table ORDER BY 1+1;
2,Orange
2,Melon
2,Apple
```

PostgreSQL、MySQL、SQLite3でしか試していませんが、だいたい同じ挙動になるのではないかと思います。

そして、無い列番号を指定した場合はエラーとなり、式で解釈された場合はエラーとならない訳です。

```SQL
SELECT c2 FROM test_table ORDER BY 4;
export: Error 1054: Unknown column '4' in 'order clause'
```

```SQL
SELECT c2 FROM test_table ORDER BY 4+0;
Orange
Melon
Apple
```

しかしながら、PostgreSQLとMySQL、SQLite3ではちょっと挙動が違う場合があって、整数値以外の値（文字列等）定数を入れた場合には、PostgreSQLでは「non-integer constant」でエラーに成りますが、MySQL、SQLite3では式と同じ扱いになります。

```SQL
SELECT c2 FROM test_table ORDER BY '1';
ERROR:  42601: non-integer constant in ORDER BY
```

これも式として解釈されるようにすれば、PostgreSQLでも同じ挙動になります。

```SQL
SELECT c2 FROM test_table ORDER BY '1'||'';
Orange
Melon
Apple
```

ということで、最初の [8.0.22でのprepared statementの挙動変化](https://tombo2.hatenablog.com/entry/2020/10/29/135053) は「prepared statement」によって列番号で解釈していたのを式評価になったと考えれば納得できます。

そうすると「the results are no longer ordered, as is expected with ORDER BY constant.」はちょっと誤解を招くと思います。
「列番号」ではなく「式と解釈される固定値」（ただし直接指定すると列番号と解釈されちゃう）ということではないかと。
