+++
author = "Noboru Saito"
title = "trdsql Window Functions"
date = "2024-04-16"
description = "This article introduces how to use window functions in trdsql."
weight = 19
tags = [
    "trdsql",
    "sql",
    "window functions",
]
categories = [
    "trdsql",
]
+++

So far, we have introduced aggregation by [grouping](/trdsql/07_group), which outputs rows for each group completely separate from the original rows. In other words, it was outputting the results of the aggregation separately from the original file.

However, there may be cases where you want to output the aggregation results in addition to the information in the original file. For example, in a column of scores, you can output the difference from the average score and perform flexible calculations. Until now, the only way to do this was to aggregate first and then JOIN, but with SQL's window functions, you can also output such aggregations.

In older versions, SQLite3 did not support window functions, but the SQLite3 included in the current trdsql does support them.

Window functions can also be used in PostgreSQL and MySQL, but be aware that MySQL supports them from version 8.0 onwards.

## Displaying the Total

The calculation of the total was output in [aggregate calculation](/trdsql/06_calculation), but it was only outputting the final result. With window functions, you can display the result for each row.

For example, let's display the results for the following CSV of scores.

```score.csv
id,class,name,score
1,A,bob,174
2,A,alice,248
3,A,carol,163
4,B,dave,289
5,B,eve,157
6,B,flank,272
```

Window functions perform calculations by specifying a range or order by adding an `OVER ()` clause to the function of the aggregation function.

If you specify an empty `OVER()` clause, all rows will be targeted.

```console
$ trdsql -ih -omd \
"SELECT id,name,score, SUM(CAST(score AS int)) OVER () FROM score.csv"
| id | name  | score | sum  |
|----|-------|-------|------|
|  1 | bob   |   174 | 1303 |
|  2 | alice |   248 | 1303 |
|  3 | carol |   163 | 1303 |
|  4 | dave  |   289 | 1303 |
|  5 | eve   |   157 | 1303 |
|  6 | flank |   272 | 1303 |
```

The total is calculated with `SUM()`, so the average can also be calculated with `AVG()`.

## Difference from the average

You can calculate the average using window functions and the target row.
When you display the difference, it will look like this.

```console
$ trdsql -ih -omd \
"SELECT id,name,score," \
        "score - round(AVG(score) OVER()) AS Difference from average"\
 " FROM score.csv"
| id | name  | score | Difference from average |
|----|-------|-------|------------|
|  1 | bob   |   174 |        -43 |
|  2 | alice |   248 |         31 |
|  3 | carol |   163 |        -54 |
|  4 | dave  |   289 |         72 |
|  5 | eve   |   157 |        -60 |
|  6 | flank |   272 |         55 |
```

round() is a function that rounds off the decimal part.

Until now, SQL was limited to processing one row at a time or grouping, but with window functions, you can specify a range of rows and perform calculations for each row.

The range of rows can be specified by columns similar to those specified by "GROUP BY" after "PARTITION BY".

Let's output the changes by class instead of the whole.

```console
$ trdsql -ih -omd \
"SELECT id,class,name,score," \
 "score - ROUND(avg(score) OVER(PARTITION BY class)) "\
  "AS Difference from average" \
  "FROM score.csv"
| id | class | name  | score | Difference from average |
|----|-------|-------|-------|------------|
|  1 | A     | bob   |   174 |        -21 |
|  2 | A     | alice |   248 |         53 |
|  3 | A     | carol |   163 |        -32 |
|  4 | B     | dave  |   289 |         50 |
|  5 | B     | eve   |   157 |        -82 |
|  6 | B     | flank |   272 |         33 |
```

In class A, the difference from the average of 195 is displayed, and in class B, the difference from the average of 239 is displayed.

You can also display the difference from the overall average by simply listing it.

```console
$ trdsql -ih -omd \
"SELECT id,class,name,score," \
  "score - ROUND(avg(score) OVER(PARTITION BY class)) "\
  "AS Difference from average, " \
  "score - round(AVG(score) OVER()) AS 全体Difference from average"\
  "FROM score.csv"
```

Assigning Row Numbers

Window functions can also be used to assign row numbers.

fruits.ltsv

```ltsv
name:grape	num:10
name:apple	num:3
name:banana	num:5
name:orange	num:2
```

The ROW_NUMBER() function is a window function unique to window functions that is not an aggregation function. When used with OVER(), it is used for the entire range without specifying an order, as shown below.

```console
$ trdsql "SELECT ROW_NUMBER() OVER(), name,num " \
       "FROM fruits.ltsv"
1,grape,10
2,apple,3
3,banana,5
4,orange,2
```

To specify the order, use "ORDER BY".

```console
$ trdsql "SELECT ROW_NUMBER() OVER(ORDER BY CAST(num AS int))," \
       " name,num FROM fruits.ltsv"
1,orange,2
2,apple,3
3,banana,5
4,grape,10
```

There are still many other types of functions in window functions. Please refer to the manual of each database.
