+++
author = "Noboru Saito"
title = "trdsql internal processing overview"
date = "2024-03-08"
description = "This is a brief overview of the internal processing of trdsql."
weight = 11
tags = [
    "trdsql",
]
categories = [
    "trdsql",
]
+++

This is a brief overview of the internal processing of trdsql.

The internal processing of trdsql is as follows:

1. Interpretation of options and SQL commands
2. Import file names in SQL commands into the database
3. Execution of SQL
4. Output the execution result in the specified output format

![format](../format.png)

The execution of SQL is actually performed using an RDBMS (by default, a memory database of SQLite3).

trdsql is a tool that simply formats import and export formats and throws them into the database.

Therefore, unlike tools that can stream one line at a time, trdsql takes time to import all the data before executing SQL.

However, you can use real SQL, not SQL-like.

It is a good idea to use it based on these features.