---
layout: default
---

## trdsql example

### [taiyaku](https://github.com/pgsql-jp/taiyaku)

PostgreSQL Japanese manual with multiple translations to Japanese.

```shell
trdsql -omd -ih "SELECT en,group_concat(ja)
                   FROM jpug-doc.en.ja.csv
                  GROUP BY en HAVING COUNT(en) > 1"
```

|               en               |      group_concat(ja)    |
|----------------------|-----------------------------------------|
| French                         | フランス,フランス語                 |
| Unicode                        | Unicode,ユニコード            |
| Unicode escape                 | Unicodeエスケープ,ユニコードエスケープ     |
| abort                          | アボート,中断       |
| abstract                       | アブストラクト,理論   |

....
[All results](taiyaku-dup.html)

### Similar to [alp](https://github.com/tkuchiki/alp)

The following data

```ltsv
time:2015-09-06T05:58:05+09:00	method:POST	uri:/foo/bar?token=xxx&uuid=1234	status:200	size:12	apptime:0.057
time:2015-09-06T05:58:41+09:00	method:POST	uri:/foo/bar?token=yyy	status:200	size:34	apptime:0.100
time:2015-09-06T06:00:42+09:00	method:GET	uri:/foo/bar?token=zzz	status:200	size:56	apptime:0.123
```

Similar to alp.

```shell
trdsql -oat "SELECT CASE INSTR(uri, '?')
                    WHEN 0 THEN uri
                    ELSE SUBSTR(uri, 0, INSTR(uri, '?')) END AS url,
                    method,
                    status,
                    count(uri),
                    round(min(apptime),3) as min,
                    round(max(apptime),3) as max,
                    round(sum(apptime),3) as sum,
                    round(avg(apptime),3) as avg,
                    min(size),max(size),
                    sum(size),avg(size)
               FROM log.ltsv
              WHERE apptime != '-'
              GROUP BY url,method"
```

### distro-info

Distro-info csv in Debian and Ubuntu.

```shell
trdsql -omd -ih "SELECT version, codename, series, created, \`release\`, eol
                   FROM /usr/share/distro-info/debian.csv"
```

| version |   codename   |    series    |  created   |  release   |    eol     |
|---------|--------------|--------------|------------|------------|------------|
|     1.1 | Buzz         | buzz         | 1993-08-16 | 1996-06-17 | 1997-06-05 |
|     1.2 | Rex          | rex          | 1996-06-17 | 1996-12-12 | 1998-06-05 |
|     1.3 | Bo           | bo           | 1996-12-12 | 1997-06-05 | 1999-03-09 |
|     2.0 | Hamm         | hamm         | 1997-06-05 | 1998-07-24 | 2000-03-09 |
|     2.1 | Slink        | slink        | 1998-07-24 | 1999-03-09 | 2000-10-30 |
|     2.2 | Potato       | potato       | 1999-03-09 | 2000-08-15 | 2003-07-30 |
|     3.0 | Woody        | woody        | 2000-08-15 | 2002-07-19 | 2006-06-30 |
|     3.1 | Sarge        | sarge        | 2002-07-19 | 2005-06-06 | 2008-03-30 |
|     4.0 | Etch         | etch         | 2005-06-06 | 2007-04-08 | 2010-02-15 |
|     5.0 | Lenny        | lenny        | 2007-04-08 | 2009-02-14 | 2012-02-06 |
|     6.0 | Squeeze      | squeeze      | 2009-02-14 | 2011-02-06 | 2014-05-31 |
|       7 | Wheezy       | wheezy       | 2011-02-06 | 2013-05-04 | 2016-04-26 |
|       8 | Jessie       | jessie       | 2013-05-04 | 2015-04-25 | 2018-06-06 |
|       9 | Stretch      | stretch      | 2015-04-25 | 2017-06-17 |            |
|      10 | Buster       | buster       | 2017-06-17 |            |            |
|      11 | Bullseye     | bullseye     | 2019-08-01 |            |            |
|      12 | Bookworm     | bookworm     | 2021-08-01 |            |            |
|         | Sid          | sid          | 1993-08-16 |            |            |
|         | Experimental | experimental | 1993-08-16 |            |            |

```shell
trdsql -omd -ih "SELECT version, codename, series, created, \`release\`, eol
                   FROM /usr/share/distro-info/ubuntu.csv"
```

|  version  |     codename      |  series  |  created   |  release   |    eol     |
|-----------|-------------------|----------|------------|------------|------------|
|      4.10 | Warty Warthog     | warty    | 2004-03-05 | 2004-10-20 | 2006-04-30 |
|      5.04 | Hoary Hedgehog    | hoary    | 2004-10-20 | 2005-04-08 | 2006-10-31 |
|      5.10 | Breezy Badger     | breezy   | 2005-04-08 | 2005-10-12 | 2007-04-13 |
| 6.06 LTS  | Dapper Drake      | dapper   | 2005-10-12 | 2006-06-01 | 2009-07-14 |
|      6.10 | Edgy Eft          | edgy     | 2006-06-01 | 2006-10-26 | 2008-04-25 |
|      7.04 | Feisty Fawn       | feisty   | 2006-10-26 | 2007-04-19 | 2008-10-19 |
|      7.10 | Gutsy Gibbon      | gutsy    | 2007-04-19 | 2007-10-18 | 2009-04-18 |
| 8.04 LTS  | Hardy Heron       | hardy    | 2007-10-18 | 2008-04-24 | 2011-05-12 |
|      8.10 | Intrepid Ibex     | intrepid | 2008-04-24 | 2008-10-30 | 2010-04-30 |
|      9.04 | Jaunty Jackalope  | jaunty   | 2008-10-30 | 2009-04-23 | 2010-10-23 |
|      9.10 | Karmic Koala      | karmic   | 2009-04-23 | 2009-10-29 | 2011-04-29 |
| 10.04 LTS | Lucid Lynx        | lucid    | 2009-10-29 | 2010-04-29 | 2013-05-09 |
|     10.10 | Maverick Meerkat  | maverick | 2010-04-29 | 2010-10-10 | 2012-04-10 |
|     11.04 | Natty Narwhal     | natty    | 2010-10-10 | 2011-04-28 | 2012-10-28 |
|     11.10 | Oneiric Ocelot    | oneiric  | 2011-04-28 | 2011-10-13 | 2013-05-09 |
| 12.04 LTS | Precise Pangolin  | precise  | 2011-10-13 | 2012-04-26 | 2017-04-26 |
|     12.10 | Quantal Quetzal   | quantal  | 2012-04-26 | 2012-10-18 | 2014-05-16 |
|     13.04 | Raring Ringtail   | raring   | 2012-10-18 | 2013-04-25 | 2014-01-27 |
|     13.10 | Saucy Salamander  | saucy    | 2013-04-25 | 2013-10-17 | 2014-07-17 |
| 14.04 LTS | Trusty Tahr       | trusty   | 2013-10-17 | 2014-04-17 | 2019-04-25 |
|     14.10 | Utopic Unicorn    | utopic   | 2014-04-17 | 2014-10-23 | 2015-07-23 |
|     15.04 | Vivid Vervet      | vivid    | 2014-10-23 | 2015-04-23 | 2016-01-23 |
|     15.10 | Wily Werewolf     | wily     | 2015-04-23 | 2015-10-22 | 2016-07-22 |
| 16.04 LTS | Xenial Xerus      | xenial   | 2015-10-22 | 2016-04-21 | 2021-04-21 |
|     16.10 | Yakkety Yak       | yakkety  | 2016-04-21 | 2016-10-13 | 2017-07-20 |
|     17.04 | Zesty Zapus       | zesty    | 2016-10-13 | 2017-04-13 | 2018-01-13 |
|     17.10 | Artful Aardvark   | artful   | 2017-04-13 | 2017-10-19 | 2018-07-19 |
| 18.04 LTS | Bionic Beaver     | bionic   | 2017-10-19 | 2018-04-26 | 2023-04-26 |
|     18.10 | Cosmic Cuttlefish | cosmic   | 2018-04-26 | 2018-10-18 | 2019-07-18 |
|     19.04 | Disco Dingo       | disco    | 2018-10-18 | 2019-04-18 | 2020-01-18 |
|     19.10 | Eoan Ermine       | eoan     | 2019-04-18 | 2019-10-17 | 2020-07-17 |
| 20.04 LTS | Focal Fossa       | focal    | 2019-10-17 | 2020-04-23 | 2025-04-23 |

### ps output

```
ps aux|trdsql -ih -ir 10 -id " " -omd "SELECT * FROM - "
```

|   USER   |  PID  | %CPU | %MEM |   VSZ    |  RSS   |  TTY  | STAT | START |  TIME  |                                 COMMAND                                 |                                   c12                                    |
|----------|-------|------|------|----------|--------|-------|------|-------|--------|-------------------------------------------------------------------------|--------------------------------------------------------------------------|
| root     |     1 |  0.0 |  0.0 |   226828 |  10032 | ?     | Ss   | Oct28 | 0:11   | /sbin/init                                                              | splash                                                                   |
| root     |     2 |  0.0 |  0.0 |        0 |      0 | ?     | S    | Oct28 | 0:00   | [kthreadd]                                                              |                                                                          |
| root     |     4 |  0.0 |  0.0 |        0 |      0 | ?     | I<   | Oct28 | 0:00   | [kworker/0:0H]                                                          |                                                                          |
| root     |     6 |  0.0 |  0.0 |        0 |      0 | ?     | I<   | Oct28 | 0:00   | [mm_percpu_wq]                                                          |                                                                          |
| root     |     7 |  0.0 |  0.0 |        0 |      0 | ?     | S    | Oct28 | 0:15   | [ksoftirqd/0]                                                           |                                                                          |
| root     |     8 |  0.3 |  0.0 |        0 |      0 | ?     | I    | Oct28 | 31:02  | [rcu_sched]                                                             |                                                                          |
| root     |     9 |  0.0 |  0.0 |        0 |      0 | ?     | I    | Oct28 | 0:00   | [rcu_bh]                                                                |                                                                          |
| root     |    10 |  0.0 |  0.0 |        0 |      0 | ?     | S    | Oct28 | 0:00   | [migration/0]                                                           |                                                                          |


### /etc/passwd

```
trdsql -omd -id ":" "SELECT c1, c2, c3, c4, c5, c6, c7 FROM /etc/passwd"
```

|         c1          | c2 |  c3   |  c4   |               c5               |             c6             |        c7         |
|---------------------|----|-------|-------|--------------------------------|----------------------------|-------------------|
| root                | x  |     0 |     0 | root                           | /root                      | /bin/bash         |
| daemon              | x  |     1 |     1 | daemon                         | /usr/sbin                  | /usr/sbin/nologin |
| bin                 | x  |     2 |     2 | bin                            | /bin                       | /usr/sbin/nologin |
| sys                 | x  |     3 |     3 | sys                            | /dev                       | /usr/sbin/nologin |
| sync                | x  |     4 | 65534 | sync                           | /bin                       | /bin/sync         |
| games               | x  |     5 |    60 | games                          | /usr/games                 | /usr/sbin/nologin |
| man                 | x  |     6 |    12 | man                            | /var/cache/man             | /usr/sbin/nologin |
| lp                  | x  |     7 |     7 | lp                             | /var/spool/lpd             | /usr/sbin/nologin |

