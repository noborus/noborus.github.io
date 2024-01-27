+++
author = "Noboru Saito"
title = "trdsql GROUP aggregation"
date = "2019-12-07"
description = "trdsql GROUP aggregation"
weight = 7
tags = [
    "trdsql",
    "group by",
]
categories = [
    "trdsql",
]
+++

## GROUP BY

When aggregating, you may want to calculate the total of the entire table, but you may also want to output the total of each group.

For example, if you have a CSV file like the following.

```sample.csv
name,price
apple,100
orange,50
melon,500
apple,90
apple,90
orange,40
orange,40
```

If you want to calculate the total of each name, you can do the following.

```console
trdsql -ih "SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv WHERE name='apple'"
```

```
apple,280
```


```console
trdsql -ih "SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv WHERE name='orange'"
```

```
orange,130
```

However, if you want to calculate the total of each name at once, you can use GROUP BY.

```console
trdsql -ih "SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv GROUP BY name"
```

```

apple,280
melon,500
orange,130
```

Let's change the previous aggregation a little and output it for each name.

```console
trdsql -ih -oat \
"SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min, MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum,  AVG(CAST(price AS INT)) as avg  FROM sample.csv GROUP BY name"
```

```
+--------+-------+-----+-----+-----+--------------------+
|  name  | count | min | max | sum |        avg         |
+--------+-------+-----+-----+-----+--------------------+
| apple  |     3 |  90 | 100 | 280 |  93.33333333333333 |
| melon  |     1 | 500 | 500 | 500 |                500 |
| orange |     3 |  40 |  50 | 130 | 43.333333333333336 |
+--------+-------+-----+-----+-----+--------------------+
```



```console
trdsql -ih -oat "SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min, MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, AVG(CAST(price AS INT)) as avg  FROM sample.csv GROUP BY name ORDER BY sum DESC"
```

```
+--------+-------+-----+-----+-----+--------------------+
|  name  | count | min | max | sum |        avg         |
+--------+-------+-----+-----+-----+--------------------+
| melon  |     1 | 500 | 500 | 500 |                500 |
| apple  |     3 |  90 | 100 | 280 |  93.33333333333333 |
| orange |     3 |  40 |  50 | 130 | 43.333333333333336 |
+--------+-------+-----+-----+-----+--------------------+
```

## HAVING

You can also use HAVING to filter the results of GROUP BY.

```console
trdsql -ih -oat "SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min, MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, AVG(CAST(price AS INT)) as avg  FROM sample.csv  GROUP BY name  HAVING COUNT(name) > 1 ORDER BY sum DESC"
```

```
+--------+-------+-----+-----+-----+--------------------+
|  name  | count | min | max | sum |        avg         |
+--------+-------+-----+-----+-----+--------------------+
| apple  |     3 |  90 | 100 | 280 |  93.33333333333333 |
| orange |     3 |  40 |  50 | 130 | 43.333333333333336 |
+--------+-------+-----+-----+-----+--------------------+
```
