+++
author = "Noboru Saito"
title = "trdsql SQL file"
date = "2024-04-18"
description = "trdsql SQL file"
weight = 26
tags = [
    "trdsql",
    "sql",
    "file",
]
categories = [
    "trdsql",
]
+++

## SQL file name option "-q"

When using the trdsql "SQL command" format, it can be difficult to write long SQL commands, and there may be characters that need to be escaped for the shell, making it difficult to read.

trdsql has an option to write SQL to a file and execute the SQL in that file.

Save the SQL written as follows in test.sql.

test.sql

```SQL
SELECT id, `name` FROM testsql.csv
```

When passing it as an argument to the command, you needed to escape the backticks like "\\\`", but you don't need to do that when executing SQL from a file.

testsql.csv is the target CSV file.

```CSV
id,name
1,tarou
2,jirou
```

Instead of "SQL command", execute it with "-q file name.sql". No other options are replaced.

```console
trdsql -ih -oat -q test.sql
```

```ascii table
+----+-------+
| id | name  |
+----+-------+
|  1 | tarou |
|  2 | jirou |
+----+-------+
```
