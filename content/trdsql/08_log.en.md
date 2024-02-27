+++
author = "Noboru Saito"
title = "trdsql Log aggregation"
date = "2024-01-27"
description = "trdsql Log aggregation"
weight = 8
tags = [
    "trdsql",
    "log",
    "ltsv",
]
categories = [
    "trdsql",
]
+++

## Log aggregation

Apache and nginx Log are also becoming established in the way of outputting in [LTSV](http://ltsv.org) format.

An example of analyzing such Log with trdsql.

The output side customizes the apache LogFormat setting to the following custom format.

```
LogFormat "host:%h\tident:%l\tuser:%u\ttime:%t\treq:%r\tstatus:%>s\tsize:%b\treferer:\%{Referer}i\tua:%{User-Agent}i" combined_ltsv
```

The items host, ident, user, time, req, status, size, referer, ua are output.

The actual Log looks like this.

```
host:176.99.192.42	ident:-	user:-	time:[21/Oct/2019:21:33:53 +0900]	req:GET /category/software HTTP/1.1	status:200	size:138	referer:-	ua:Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)
host:192.54.157.102	ident:-	user:-	time:[21/Oct/2019:21:33:53 +0900]	req:GET /item/electronics/4478 HTTP/1.1	status:200	size:60	referer:/category/sports	ua:Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0.1) Gecko/20100101 Firefox/9.0.1
host:88.60.137.115	ident:-	user:-	time:[21/Oct/2019:21:33:53 +0900]	req:POST /search/?c=Games+Electronics HTTP/1.1	status:200	size:98	referer:/item/networking/929	ua:Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3
...
```

## analysis

First, try -a of trdsql.

```
The table name is log.ltsv.
The file type is LTSV.

Data types:
+-------------+------+
| column name | type |
+-------------+------+
| \`host\`    | text |
| ident       | text |
| \`user\`    | text |
| \`time\`    | text |
| req         | text |
| \`status\`  | text |
| \`size\`    | text |
| referer     | text |
| ua          | text |
+-------------+------+

Data samples:
+---------------+-------+----------+------------------------------+--------------------------------+------------+----------+---------+--------------------------------+
|   \`host\`    | ident | \`user\` |           \`time\`           |              req               | \`status\` | \`size\` | referer |               ua               |
+---------------+-------+----------+------------------------------+--------------------------------+------------+----------+---------+--------------------------------+
| 176.99.192.42 | -     | -        | [21/Oct/2019:21:33:53 +0900] | GET /category/software         |        200 |      138 | -       | Mozilla/5.0 (compatible; MSIE  |
|               |       |          |                              | HTTP/1.1                       |            |          |         | 9.0; Windows NT 6.1; WOW64;    |
|               |       |          |                              |                                |            |          |         | Trident/5.0)                   |
+---------------+-------+----------+------------------------------+--------------------------------+------------+----------+---------+--------------------------------+

Examples:
trdsql "SELECT \`host\`, ident, \`user\`, \`time\`, req, \`status\`, \`size\`, referer, ua FROM log.ltsv"
trdsql "SELECT \`host\`, ident, \`user\`, \`time\`, req, \`status\`, \`size\`, referer, ua FROM log.ltsv WHERE \`host\` = '176.99.192.42'"
trdsql "SELECT \`host\`, count(\`host\`) FROM log.ltsv GROUP BY \`host\`"
trdsql "SELECT \`host\`, ident, \`user\`, \`time\`, req, \`status\`, \`size\`, referer, ua FROM log.ltsv ORDER BY \`host\` LIMIT 10"
```

Execute the Examples as a hint and execute it using the SQL introduced so far.

### Output the top 5

Output the top 5 hosts with the most requests.

```console
trdsql -oat "SELECT \`host\`, count(\`host\`) as count FROM log.ltsv GROUP BY \`host\` ORDER BY count DESC LIMIT 5"
```

```
+----------------+-------+
|      host      | count |
+----------------+-------+
| 36.69.176.222  |     5 |
| 92.132.226.51  |     4 |
| 76.222.144.225 |     4 |
| 28.63.137.225  |     4 |
| 28.57.188.28   |     4 |
+----------------+-------+
```

Output the top 5 hosts with the most requests

```console
trdsql -oat "SELECT req, count(req) as count FROM log.ltsv GROUP BY req ORDER BY count DESC LIMIT 5"
```

```
+--------------------------------+-------+
|              req               | count |
+--------------------------------+-------+
| GET /category/software         |    74 |
| HTTP/1.1                       |       |
| GET /category/electronics      |    73 |
| HTTP/1.1                       |       |
| GET /category/games HTTP/1.1   |    66 |
| GET /category/books HTTP/1.1   |    44 |
| GET /category/office HTTP/1.1  |    30 |
+--------------------------------+-------+
```

### Output with search condition

Output requests and counts other than status 200

```console
trdsql -oat "SELECT req, status,count(req) as count FROM log.ltsv WHERE status != '200' GROUP BY req, status ORDER BY count DESC"
```

```
+-------------------------------+--------+-------+
|              req              | status | count |
+-------------------------------+--------+-------+
| GET /item/books/3230 HTTP/1.1 |    404 |     1 |
| GET /item/games/4672 HTTP/1.1 |    404 |     1 |
+-------------------------------+--------+-------+
```
