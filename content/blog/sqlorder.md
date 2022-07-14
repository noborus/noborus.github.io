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

tom__boさんが書かれた[8.0.22でのprepared statementの挙動変化](https://tombo2.hatenablog.com/entry/2020/10/29/135053) で、`ORDER BY` に列番号を指定する問題に注目が集まりました。

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

## ORDER BYの列番号指定

そして、厄介なのはここからです。`ORDER BY`は列番号を使用できる実装が多く存在します。
これは、一旦SQL-92で標準に入った（その後削除されたらしい）ので、大抵の実装では使えてしまいます。

{{< tweet user="noborus" id="1232944202075426816" >}}

```SQL
SELECT c1,c2 FROM test_table ORDER BY 1;
// c1でソートされる
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
Error 1054: Unknown column '4' in 'order clause'
```

```SQL
SELECT c2 FROM test_table ORDER BY 4+0;
Orange
Melon
Apple
```

しかしながら、PostgreSQLとMySQL、SQLite3ではちょっと挙動が違う場合があります。
整数値以外の値（文字列等）定数を入れた場合には、PostgreSQLでは「non-integer constant」でエラーになりますが、MySQL、SQLite3では式と同じ扱いになります。

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

動作を推測するに、ORDER BY は、まず列番号かどうかを判別して列番号ではないと解釈したら、通常の（他のところでも使える）式の評価に移るのでしょう。

その際、恐らくPostgreSQLでは、`ORDER BY '1'`や `ORDER BY 'name'`を間違って入れた人がいて「ソートされない？？ 」となって、
こんなの入れる訳ないからエラーにしてよ！というツッコミがあったのでしょう。 ← 勝手に推測

## まとめ

ということで、最初の [8.0.22でのprepared statementの挙動変化](https://tombo2.hatenablog.com/entry/2020/10/29/135053) は「prepared statement」によって列番号で解釈していたのを式評価になったと考えれば納得できます。

しかし、そうすると「the results are no longer ordered, as is expected with ORDER BY constant.」はちょっと誤解を招くと思います。
実際、誤解しましたし。
{{< tweet user="noborus" id="1322178409074618368" >}}

つまり、これは「列番号」ではなく「列番号と解釈されない固定値」（しかし直接、整数を指定すると列番号と解釈されちゃう）ということではないかと。
