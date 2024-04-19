+++
author = "Noboru Saito"
title = "trdsql CASE"
date = "2024-04-19T09:00:00+09:00"
description = "trdsql CASE"
weight = 32
tags = [
    "trdsql",
    "CASE",
]
categories = [
    "trdsql",
]
+++

`CASE` expression performs branching processing based on conditions like if statements or switch statements in programming languages. If you want to convert a simple 1 to 'A', you can do it by joining a temporary table or rewriting a string, but if you want to group by a range, it is convenient to use a CASE expression.

CASE expression can be used in either of the following two patterns.

* `CASE` is a pattern with `CASE expression (column) WHEN value THEN result` written after CASE, and a pattern with only values in WHEN.
* `CASE WHEN expression THEN result` is a pattern that omits the CASE expression and writes an expression in WHEN.

If necessary, write the case where it does not match with `ELSE result`, and indicate the end of the expression with `END`.

Let's display 'A' if the score is 80 or more, 'B' if it is 30 or more, and 'F' if it is less than 30 using a CSV like case.csv.

```CSV
id,name,score
1,bob,89
2,alice,75
3,dave,23
```

```console
trdsql -ih -oat \
"SELECT id,name,score, " \
"  CASE WHEN CAST(score AS int) >= 80 THEN 'A' " \
"       WHEN CAST(score AS int) >= 30 THEN 'B' " \
"       ELSE 'F' " \
"   END AS evaluation " \
"  FROM case.csv"
+----+-------+-------+------------+
| id | name  | score | evaluation |
+----+-------+-------+------------+
|  1 | bob   |    89 | A          |
|  2 | alice |    75 | B          |
|  3 | dave  |    23 | F          |
+----+-------+-------+------------+
```

The CASE expression is evaluated from where it is written.

Since the expression does not have to be a single column, it is also possible to add a condition such as `WHEN name = 'dave' THEN 'D'`.
