+++
author = "Noboru Saito"
title = "trdsql convert log"
date = "2019-12-30"
description = ""
tags = [
    "trdsql",
    "apache",
    "nginx",
    "log",
    "ltsv",
]
categories = [
    "trdsql",
]
+++

## 既存のログをLTSVに変換する

既存のログをLTSVに変換にしてみます。

[mingrammer/flog](https://github.com/mingrammer/flog) を使用するとフェイクのログが簡単に出力できるので、
これで出力されるログをLTSV形式に変換する方法を紹介します。

### Apache common log

以下のコマンドにより `apache_common`形式のログをaccess.common.logとして保存します。

```sh
flog -f apache_common -t log -o access.common.log 
```

内容は、以下のようになります。

```
92.129.44.198 - metz3917 [30/Dec/2019:17:02:27 +0900] "DELETE /infomediaries/e-markets HTTP/2.0" 500 24843
246.54.243.199 - - [30/Dec/2019:17:02:27 +0900] "POST /24%2f7 HTTP/1.1" 302 8879
9.172.27.159 - - [30/Dec/2019:17:02:27 +0900] "DELETE /convergence/best-of-breed HTTP/1.1" 203 3252
49.129.77.219 - kozey2248 [30/Dec/2019:17:02:27 +0900] "PUT /embrace HTTP/1.1" 301 2812
216.42.120.216 - - [30/Dec/2019:17:02:27 +0900] "HEAD /infomediaries HTTP/2.0" 204 12516
```

これを `trdsql`の -id " " によりスペース区切りで解析すると c4とc5でタイムが分かれてしまいますが、それ以外は問題無さそうです。

```
+---------------+----+----------+-----------------------+--------+--------------------------------+-----+-------+
|      c1       | c2 |    c3    |          c4           |   c5   |               c6               | c7  |  c8   |
+---------------+----+----------+-----------------------+--------+--------------------------------+-----+-------+
| 92.129.44.198 | -  | metz3917 | [30/Dec/2019:17:02:27 | +0900] | DELETE                         | 500 | 24843 |
|               |    |          |                       |        | /infomediaries/e-markets       |     |       |
|               |    |          |                       |        | HTTP/2.0                       |     |       |
+---------------+----+----------+-----------------------+--------+--------------------------------+-----+-------+
```

適切なラベルを付けるようにしてLTSVで出力します。

```sh
trdsql -id " " -oltsv \
"SELECT c1 AS host, c2 AS ident, c3 as user, c4||' '||c5 AS time, c6 AS req, c7 AS status, c8 as size "\ 
"  FROM access.common.log"
```

```ltsv
host:92.129.44.198	ident:-	user:metz3917	time:[30/Dec/2019:17:02:27 +0900]	req:DELETE /infomediaries/e-markets HTTP/2.0	status:500	size:24843
host:246.54.243.199	ident:-	user:-	time:[30/Dec/2019:17:02:27 +0900]	req:POST /24%2f7 HTTP/1.1	status:302	size:8879
host:9.172.27.159	ident:-	user:-	time:[30/Dec/2019:17:02:27 +0900]	req:DELETE /convergence/best-of-breed HTTP/1.1	status:203	size:3252
host:49.129.77.219	ident:-	user:kozey2248	time:[30/Dec/2019:17:02:27 +0900]	req:PUT /embrace HTTP/1.1	status:301	size:2812
host:216.42.120.216	ident:-	user:-	time:[30/Dec/2019:17:02:27 +0900]	req:HEAD /infomediaries HTTP/2.0	status:204	size:12516
```

### Apache Combined Log

Combined Log も項目が増えるだけで基本的に同じです。

作成は以下で行いました。

```sh
flog -f apache_combined -t log -o access.combined.log
```

```sh
trdsql -id " " -oltsv \
"SELECT c1 AS host, c2 AS ident, c3 AS user ,c4||' '||c5 AS time, c6 AS req , c7 AS status, c8 AS size, c9 AS refer, c10 AS ua "\
 " FROM access.combined.log"
```

```ltsv
host:25.54.196.41	ident:-	user:-	time:[30/Dec/2019:17:13:22 +0900]	req:POST /harness/deliver HTTP/2.0	status:204	size:8501	refer:https://www.directconvergence.biz/real-time/web-readiness/models/facilitate	ua:Opera/9.84 (X11; Linux x86_64; en-US) Presto/2.10.211 Version/12.00
host:60.50.255.15	ident:-	user:-	time:[30/Dec/2019:17:13:22 +0900]	req:PATCH /end-to-end HTTP/2.0	status:405	size:3834	refer:http://www.district24/365.net/schemas	ua:Mozilla/5.0 (iPad; CPU OS 7_2_1 like Mac OS X; en-US) AppleWebKit/532.17.5 (KHTML, like Gecko) Version/5.0.5 Mobile/8B119 Safari/6532.17.5
host:56.46.161.47	ident:-	user:-	time:[30/Dec/2019:17:13:22 +0900]	req:PATCH /architect/turn-key/clicks-and-mortar/killer HTTP/1.1	status:304	size:63656	refer:http://www.principalbest-of-breed.com/morph/magnetic/turn-key/cross-media	ua:Mozilla/5.0 (Windows NT 5.2; en-US; rv:1.9.3.20) Gecko/1931-04-08 Firefox/36.0
host:48.195.162.51	ident:-	user:-	time:[30/Dec/2019:17:13:22 +0900]	req:PATCH /enhance/extend HTTP/2.0	status:405	size:13091	refer:http://www.districtmorph.name/customized/cutting-edge	ua:Opera/10.97 (X11; Linux i686; en-US) Presto/2.8.259 Version/10.00
```
