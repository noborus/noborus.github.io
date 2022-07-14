---
author: "Noboru Saito"
title: "0列の扱い"
date: 2022-07-14T20:00:00+09:00
tags: ["sql"]
categories: ["sql"]
---

## きっかけ

現在のバージョンのPostgreSQLでは`SELECT ;`というSQL文を実行してもエラーになりません。
試してみると`(1 row)`と返ってきたので、あれ？なんで？となりました。

{{< tweet user="noborus" id="1547166536779313152" >}}

列数が0という指摘を受けて、一応0列があることを理解していたつもりだったのですけど、
勘違いしていたことに気づきました。

## テーブルを省略したSELECTの扱い

全部のSQL実装では無いですが、SQLの`SELECT`はFROM句がなくても動作する実装が多いです。
pqlで実行すると以下のようになります。

```SQL
SELECT '1';
 ?column? 
----------
 1
(1 row)
```

のようにすれば文字列1が返ってきます。列名は無いので`?column?`で表されていますが、1行1列のテーブルと同じ扱いになります。

`SELECT ;`はこの流れで**列数が0のテーブル**ということになります。

psqlでは実行すると以下のように行が（改行も含めて）表示されないまま 1 row と表示されるのでちょっと変な感じがしたのですが、これはpsql側でどう表示するかの問題であって、0列1行のテーブルと同じ扱いになっています。

```SQL
SELECT ;
--
(1 row)
```

## PostgreSQLは0列のテーブルが作れる

twitterで石井さんから指摘があったのですが、最近のPostgreSQLでは0列のテーブルが作成できるようになっています。

```SQL
CREATE TABLE empty ();
```

元からSQLでは行をINSERTしなければ0行のテーブルになるので、0列のテーブルを作っただけだと0列0行のテーブルになります。

```SQL
SELECT * FROM empty;
--
(0 rows)
```

psqlの表示では0列の場合(1 row)と(0 rows)の表示でしか区別出来ないですが、0行と1行でちゃんと違いがあって整合が取れている動作になっています。

現在進行形でも0列を許可するように修正されているので、前はエラーになったものが通るようになっていたり、これから通るようになったりする可能性があります。

## 0列のテーブル操作

### INSERT

0列のテーブルにINSERTしようとすると素直にできませんでした。

```SQL
INSERT INTO empty () VALUES ();
ERROR:  42601: syntax error at or near ")"
```

### SELECT

列が0のテーブルだけでなく、列が1つ以上のテーブルであっても`SELECT FROM one`で列0で返すことができます。

```SQL
 \d one
                 Table "public.one"
 Column |  Type   | Collation | Nullable | Default 
--------+---------+-----------+----------+---------
 i      | integer |           |          | 
```

```SQL
SELECT FROM one;
--
(2 rows)
```

### INSERT INTO SELECT

ということは`INSERT INTO table SELECT`ならINSERTが可能になります。

```SQL
# INSERT INTO empty SELECT FROM one;
INSERT 0 2
```

行数が0のときとは明確に区別されます。行数0でも`SELECT i FROM`にしてしまうとちゃんとエラーになります。

```SQL
# INSERT INTO empty SELECT FROM one WHERE false;
INSERT 0 0
```

0列テーブルにもINSERT出来てます。

```SQL
SELECT * FROM empty;
--
(2 rows)
```
