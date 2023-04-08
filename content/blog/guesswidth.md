---
title: "Guess the width of the width-specified format"
tags: ["guesswidth"]
categories: ["guesswidth"]
date: 2023-04-09T7:00:00+09:00
---
For a long time now, Unix-like commands and CLI have been outputting width-aligned output.
`ls`, `ps`, `df`, etc...

Such output can be produced by a printf format specification.

If this format specification is known, it can be read by `scanf`,
but it is not easy to recognize and read columns from "just the output".

If multiple spaces are considered as delimiters, it is possible to divide the output into columns,
but headers and values may cause unnecessary division.
We have created a library/tool to guess the column width so that this can be read by humans.

## [guesswidth](https://github.com/noborus/guesswidth)

Made by Go.

It is difficult to read perfectly, but I think it gives better results than space-separated regular expressions.

The main thing that can be read is if there is a header row and the width of the header column represents the width of the values in the rows that follow.

This is the case for `ps` and `df`. In `ls`, there is no header row, so the column delimiters are ambiguous.

In `ps`, "PID", "TTY", "TIME", and "CMD" represent the lower values, and can be divided into four parts:

![ps](https://storage.googleapis.com/zenn-user-upload/ca97c96cd09e-20230408.png)

In this example, multiple spaces can be split, but if the header or value contains spaces, it cannot be split correctly. guesswidth supports such formats.

To use guesswidth, simply pass in the pipe `|`. By default, `|` is inserted as a delimiter.

```console
ps |guesswidth
    PID| TTY     |     TIME|CMD 
1145448| pts/2   | 00:00:00|zsh
1158532| pts/2   | 00:00:00|ps
```

You can also separate them as CSV with "," separators; in CSV, extra spaces are stripped.

```console
ps |guesswidth csv
PID,TTY,TIME,CMD
1145448,pts/2,00:00:00,zsh
1158532,pts/2,00:00:00,ps
```

Support for `ps`, `df`, `docker ps` and many other outputs. The `ls` has no header,
so it is split based on the contents of the first line.
(The first line is a total display and must be removed from the criteria.)

```console
ls -l|guesswidth --header 2
合計 7900||||||||
-rw-r--r--|  1| noborus| noborus|    1078| Mar| 14| 05:48|LICENSE
-rw-r--r--|  1| noborus| noborus|     526| Mar| 16| 05:23|Makefile
-rw-r--r--|  1| noborus| noborus|    1751| Mar| 21| 16:49|README.md
````

The modern ls alternative, [exa](https://github.com/ogham/exa),
can add header lines, so it's more GUESSWIDTH oriented.

```console
$ exa -lh|guesswidth
Permissions| Size| User   | Date Modified|Name
drwxr-xr-x |    -| noborus| 14 Mar 16:30 |cmd
drwxr-xr-x |    -| noborus| 22 Mar 09:02 |dist
drwxr-xr-x |    -| noborus| 19 Mar 12:58 |docs
.rw-r--r-- | 3.0k| noborus| 21 Mar 16:39 |example_test.go
.rw-r--r-- |  285| noborus|  4 Apr 14:22 |go.mod
.rw-r--r-- | 1.2k| noborus|  4 Apr 14:22 |go.sum
```

## How do you do that?

### Guess where the split is?

The division method is not difficult, but it is a bit annoying, so I will explain it.

First, a reference line (header line) is determined. Without this base line,
some values will be incorrectly split there (as in the `ls` example)
because some formats have a space in the same position.

From that reference line, we create candidates for the delimiter position.
Simply convert to 1 (candidate) if it is a space, otherwise convert to 0 (not a delimiter position).

For simplicity, take `ps` as an example.

```
    PID TTY          TIME CMD
11110001000111111111100001000
```

Next, the values are candidates for spaces as well,
but exclude positions that are not candidates in the header and count up.

Value 1st line

```
1145448 pts/2    00:00:00 zsh
11110002000112222111100002000
```

Value 2nd line

```
1158532 pts/2    00:00:00 ps
11110003000113333111100003000
```

The first and last spaces are omitted due to the nature of the search for delimiters.
The largest number in the sequence of 0 (not a delimiter) numbers is the most likely
candidate for a delimiter position.If we consider that position as a delimiter,
we can guess the delimiter position.

If there is a sequence of even larger numbers in the same point,
it is not possible to make a judgment, but due to the characteristics of printf,
the numbers do not extend to the left but to the right,
so the rightmost number is guessed as the delimiter position.

If we leave the numbers only at the delimiter position, we get the following.

```
11110003000113333111100003000
                ↓
       3   1133331111    3
                ↓
       3        3        3
```

The accuracy is increased by reading as many lines of values as possible,
not just the header lines, before determining the value.

### Splitting process

If the position of the division can be guessed, that is not the end of the process.
As mentioned above, although the format outputs the data with a specified width,
it is often the case that the data does not fit into the specified width
and extends beyond the specified width.

For example, if you use the option ``ps``,
you can display more information, but there are many items that will be overflowed.

```console
$ ps aux
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.0 169004 11464 ?        Ss   Mar27   1:04 /sbin/init sp
root           2  0.0  0.0      0     0 ?        S    Mar27   0:00 [kthreadd]
root           3  0.0  0.0      0     0 ?        I<   Mar27   0:00 [rcu_gp]
```

and you think the vertical position is nicely displayed,

```console
noborus   619043  0.0  0.0  38992 28968 pts/4    Ss+  Apr04   0:02 zsh
noborus  1061523  2.2  1.8 34556112 591016 ?     SLl  Apr06  61:54 /opt/google/chrome/chrome
```

and ``VSZ`` and ``RSS`` are overhanging memory-intensive processes like chrome processes.

So if the delimiter position is not a space, many will shift to the right and look
for a space to compensate for the delimiter position
(in fact, they will even try to shift to the left to see if it fits,
in case they guessed the delimiter position wrong and shifted to the right).

### Other considerations

Although the header line is the standard, spaces are sometimes used in header line headings.

For example, in ``df`` the last ``Mounted on`` is a single column.

```
Filesystem     1K-blocks      Used Available Use% Mounted on
```

Therefore, if there is a space only in the header line position
and no space in the value below it, the delimiter position is prevented
by setting the threshold to 2 or more, because if the value is an array of numbers,
it will not be counted up and will remain at 1.

### library

The [guesswidth](https://github.com/noborus/guesswidth) is an independent version
originally created for use in another tool.

I also incorporated it into my [trdsql](https://github.com/noborus/trdsql),
so you can use `-iwidth` to output in various formats as follows.

```console
ps aux|trdsql -iwidth -ojson "SELECT * FROM - WHERE \"COMMAND\" = 'ps aux'"
```

```json
[
  {
    "USER": "noborus",
    "PID": "1166430",
    "%CPU": "0.0",
    "%MEM": "0.0",
    "VSZ": "13716",
    "RSS": "3520",
    "TTY": "pts/2",
    "STAT": "R+",
    "START": "17:56",
    "TIME": "0:00",
    "COMMAND": "ps aux"
  }
]
```

Also, this is actually the real deal,
but I have also incorporated it into my pager [ov](https://github.com/noborus/ov)
(still working on it before release), and by combining the options, you can display the following.

```console
ps aux| ov
```

![ps aux|ov](https://storage.googleapis.com/zenn-user-upload/24bf4ea05edb-20230408.gif)
