+++
author = "Noboru Saito"
title = "trdsql CROSS JOIN"
date = "2024-04-18"
description = "trdsql CROSS JOIN"
weight = 28
tags = [
    "trdsql",
    "CROSS",
    "JOIN",
]
categories = [
    "trdsql",
]
+++

`CROSS JOIN` is an easy way to create a total.

a.csv

```CSV
aa
ab
ac
```

b.csv

```CSV
ba
bb
bc
```

When you `CROSS JOIN` two CSV files, a 3x3 output is possible for all combinations.

```console
trdsql "SELECT * FROM a.csv CROSS JOIN b.csv"
aa,ba
aa,bb
aa,bc
ab,ba
ab,bb
ab,bc
ac,ba
ac,bb
ac,bc
```

You can also self-join a single file.
For example, let's create a home and away total table.

cleague.csv

```CSV
team
Giants
DeNA
Tigers
Carp
Dragons
Swallows
```

To simply `CROSS JOIN`, it looks like this (you can't write JOIN conditions because there are none).

```console
trdsql -ih \
"SELECT h.team,a.team "\
"  FROM cleague.csv AS h "\
" CROSS JOIN cleague.csv AS a"
```

You can't play against your own team, so exclude the same team with `WHERE h.team != a.team`.

```console
trdsql -ih -omd \
"SELECT h.team AS home,a.team AS aware " \
"  FROM cleague.csv AS h CROSS JOIN cleague.csv AS a "\
" WHERE h.team != a.team "
```

|   home   |  aware   |
|----------|----------|
| Giants     | DeNA     |
| Giants     | Tirgers     |
| Giants     | Carp     |
| Giants     | Dragons     |
| Giants     | Swallows |
| DeNA     | Giants     |
| DeNA     | Tirgers     |
| DeNA     | Carp     |
| DeNA     | Dragons     |
| DeNA     | Swallows |
| Tirgers     | Giants     |
| Tirgers     | DeNA     |
| Tirgers     | Carp     |
| Tirgers     | Dragons     |
| Tirgers     | Swallows |
| Carp     | Giants     |
| Carp     | DeNA     |
| Carp     | Tirgers     |
| Carp     | Dragons     |
| Carp     | Swallows |
| Dragons     | Giants     |
| Dragons     | DeNA     |
| Dragons     | Tirgers     |
| Dragons     | Carp     |
| Dragons     | Swallows |
| Swallows | Giants     |
| Swallows | DeNA     |
| Swallows | Tirgers     |
| Swallows | Carp     |
| Swallows | Dragons     |
