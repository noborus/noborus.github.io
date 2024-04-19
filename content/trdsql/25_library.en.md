+++
author = "Noboru Saito"
title = "trdsql library"
date = "2024-04-18"
description = "trdsql library usage."
weight = 25
tags = [
    "trdsql",
    "sql",
    "library",
]
categories = [
    "trdsql",
]
+++


trdsql was initially composed of the main package, but now it is configured to call the trdsql package from main, and the trdsql package can be used as a library.

The trdsql package is configured as follows and can be called individually.

Here is a simple example.

```go
package main

import (
        "log"

        "github.com/noborus/trdsql"
)

func main() {
        trd := trdsql.NewTRDSQL(
                trdsql.NewImporter(trdsql.InDelimiter(":")),
                trdsql.NewExporter(trdsql.NewWriter()),
        )
        err := trd.Exec("SELECT c1 FROM /etc/passwd")
        if err != nil {
                log.Fatal(err)
        }
}
```

The above program executes an SQL statement against /etc/passwd.
Give the Importer (interface to import to the database) and Exporter (interface to output results from the database) to New TRDSQL and execute it with Exec.

```go
func NewTRDSQL(im Importer, ex Exporter) *TRDSQL
```

These Importer and Exporter can be replaced as long as they conform to the interface (for example, to import files not in SQL, create a function that conforms to the Importer interface).

## Importer

The default Importer can be created by calling trdsql.NewImporter().
The default Importer takes options from [ReadOpts](https://godoc.org/github.com/noborus/trdsql#ReadOpts) in trdsql.Import(). Here you pass the format and other options.

Importing and using "/etc/passwd" in SQL is the default behavior, so only the delimiter is changed to ":".

trdsql.Import() takes an SQL statement and imports the necessary files into the database. At that time, it is imported from the trdsql.Reader interface (Reader for each CSV, LTSV, JSON, TBLN) according to the file format.

Also, depending on the database to be imported, it selects bulk insert or COPY for import.

## Exporter

The default Exporter can be created by calling trdsql.NewExporter().
In SQL, there is only one output, so we pass the function to output (trdsql.NewWriter()).
trdsql.NewWriter() sets the format and operation options with [WriteOpts](https://godoc.org/github.com/noborus/trdsql#WriteOpts) and writes the results of executing SQL with the actual Writer function (CSV, LTSV, JSON, TBLN, AT, VF...).

## Exec

If the Importer and Exporter are ready, execute the SQL with Exec.

1. Database connection
2. Start transaction
3. Execute import with Importer
4. Execute the specified SQL with Exporter and output
5. End transaction
6. Disconnect database

## References

trdsql has functions to import from slices as well as from files.
There is a sample using it in [_example/slice/](https://github.com/noborus/trdsql/blob/master/_example/slice/main.go "github.com/noborus/trdsql/blob/master/_example/slice/main.go").

Using the trdsql package, you can get the results of [shirou/gopsutil](https://github.com/shirou/gopsutil "github.com/shirou/gopsutil")
with SQL in [noborus/psutilsql](https://github.com/noborus/psutilsql "github.com/noborus/psutilsql").

Please also refer to the [godoc](https://godoc.org/github.com/noborus/trdsql "godoc.org/github.com/noborus/trdsql") of trdsql.
[]
