---
title: "Another way to aggregate json(jq + SQL)"
date: 2022-05-03T12:58:24+09:00
tags: ["trdsql","jq", "SQL","zq"]
---

## Aggregate json with trdsql

I agree that the aggregation of **jq** described in the [Introducing zq](https://www.brimdata.io/blog/introducing-zq/) is not easy.

I've seen [A Practical Example of zq](https://www.brimdata.io/blog/introducing-zq/#a-practical-example), **zq** was not easy for me.

**SQL** is not easy for everyone, but it is a language that many people can use.
I am one of them.

Of course, it is difficult to process all JSON with SQL.
But what about using them in combination?

Recent versions of [trdsql](https://github.com/noborus/trdsql) allow the use of **jq syntax**, including [gojq](https://github.com/itchyny/gojq).

In addition, I've improved the handling of null in JSON in the latest version,
making it easier to aggregate JSON.

Let's try with the e jq and zq examples.

### jq

```console
jq '[.docs[] | {title,author_name: .author_name[0], publish_year: .publish_year[0]} |
select(.author_name!=null and .publish_year!=null)] |
group_by(.author_name)| [.[] |{author_name: .[0].author_name, count: . | length}] |
sort_by(.count) | reverse |
limit(3;.[])' openlibrary.json
```

```json
{
  "author_name": "S. Stepniak",
  "count": 38
}
{
  "author_name": "Władysław Stępniak",
  "count": 7
}
{
  "author_name": "Władysław Stępniak",
  "count": 4
}
```

### zq

```console
zq -j "over docs | {title, author_name: author_name[0], publish_year: publish_year[0]}|
has(author_name) and has(publish_year)| count() by author_name |
sort -r count | head 3" openlibrary.json
```

```json
{"author_name":"S. Stepniak","count":38}
{"author_name":"Władysław Stępniak","count":11}
{"author_name":"Andrzej Stępniak","count":4}
```

### trdsql

trdsql treats JSON(jq processed JSON) as a **table** and executes SQL.

```console
trdsql -driver sqlite3 -ojsonl 
"SELECT json(author_name)->>0 AS author_name, count(*) AS count
FROM openlibrary.json::.docs 
WHERE author_name IS NOT NULL AND publish_year IS NOT NULL
GROUP BY json(author_name)->>0 ORDER BY count DESC LIMIT 3"
```

```json
{"author_name":"S. Stepniak","count":38}
{"author_name":"Władysław Stępniak","count":7}
{"author_name":"Władysław Stępniak","count":4}
```

The ".docs" after the "::" in "openlibrary.json::.docs" is the **jq syntax**.
Only this part is jq syntax, and the others are SQL.

trdsql just includes the gojq library, which eliminates the need for the jq command.
This is the same as passing jq as a filter.

```console
jq .docs openlibrary.json| trdsql -driver sqlite3 -ijson -ojsonl 
"SELECT json(author_name)->>0 AS author_name, count(*) AS count 
FROM - WHERE author_name IS NOT NULL AND publish_year IS NOT NULL 
GROUP BY json(author_name)->>0 ORDER BY count DESC LIMIT 3"
```

sqlite3 does not yet have a standard unicode normalization function.
However, PostgreSQL has a normalize function.

```console
trdsql  -driver postgres -dsn "dbname=trdsql" -ojsonl 
"SELECT json(normalize(author_name))->>0 AS author_name, count(*) AS count
FROM openlibrary.json::.docs WHERE author_name IS NOT NULL AND publish_year IS NOT NULL
GROUP BY json(normalize(author_name))->>0 ORDER BY count DESC LIMIT 3"
```

```json
{"author_name":"S. Stepniak","count":38}
{"author_name":"Władysław Stępniak","count":11}
{"author_name":"Andrzej Stępniak","count":4}
```

I don't think it's right to use SQL for everything,
but I'd like to argue that there are enough problems with people who are good at SQL.

## Link

* [trdsql](https://github.com/noborus/trdsql)(github)
* [gojq](https://github.com/itchyny/gojq)(github)
* [zed](https://github.com/brimdata/zed(github)(zq)
* [jq](https://github.com/stedolan/jq)(github)
