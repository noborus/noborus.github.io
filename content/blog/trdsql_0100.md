---
title: "trdsql v0.10.0"
date: 2022-05-03T09:29:54+09:00
tags: ["trdsql"]
categories: ["trdsql"]
---

# [trdsql v0.10.0をリリースしました。](https://github.com/noborus/trdsql/releases)

[リリース](https://github.com/noborus/trdsql/releases/tag/v0.10.0)のページから各バイナリがダウンロードできます。

## NULLの扱い変更

今回はNULLの扱いを変更しました。

JSONには`null`がありましたが、CSV等のテキストフォーマットには無いため、
すべて空文字として扱っていましたが、JSONの`null`をSQLの`NULL`として扱うようにしました。

JSONの文字列とみなせる箇所が`null`の場合は、それほど問題ではありませんでしたが、
配列（"[]"）のようなJSONが入る箇所が`null`の場合に空文字（""）にしてしまうと、
SQLのJSON関数に渡しづらい問題があったためSQLの`NULL`にするようにしました。

これによりJSONの集計問題が解きやすくなっていると思います。

[Introducing zq](https://www.brimdata.io/blog/introducing-zq/)で示されている問題にSQLで解くときにスッキリ書けるようになっています。

上記の"A Practical Example"は、以下のSQLで解けます。

```SQL
SELECT json(author_name)->>0 AS author_name, count(*) AS count 
FROM openlibrary.json::.docs
WHERE author_name IS NOT NULL AND publish_year IS NOT NULL
GROUP BY json(author_name)->>0
ORDER BY count DESC LIMIT 3;
```

```JSON
{"author_name":"S. Stepniak","count":38}
{"author_name":"Władysław Stępniak","count":7}
{"author_name":"Władysław Stępniak","count":4}
```

Unicodeの正規化はPostgreSQLエンジンを使用する場合は`normalize()`関数があるため、間に入れれば可能です。SQLite3エンジンを使用する場合は、
別のコマンドで正規化してからパイプで使用する必要があります。

```console
jq .docs openlibrary.json| uconv norm | trdsql -driver sqlite3 -ijson -ojsonl 
"SELECT json(author_name)->>0 AS author_name, count(*) AS count
FROM - WHERE author_name IS NOT NULL AND publish_year IS NOT NULL 
GROUP BY json(author_name)->>0
ORDER BY count DESC LIMIT 3"
```

## NULLオプション追加

また、`-inull`と`-onull`オプションを追加しました。`-inull`はSQLのNULLに変換する文字列を指定し、
`-onull`はSQLのNULLを指定された文字列に変換します。

CSV等のフォーマットでは、主に空文字（""）をNULLにするときに使用します。
また、出力するときに `-onull "\N"`にしておくとPostgreSQLのCOPY文に適したフォーマットにできます。

JSONで`-inull ""`は`null`に加えて空文字をNULLに変換することもできます。`-onull ""`にするとnullを止めて空文字（""）で出力されます。
