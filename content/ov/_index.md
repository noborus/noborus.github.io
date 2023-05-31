+++
author = "Noboru Saito"
title = "ov - Feature-rich terminal pager"
date = "2022-05-20"
+++

[![ov](ov.gif)](https://github.com/noborus/ov)

[Download](https://github.com/noborus/ov/releases/latest)

Please refer to the [github site](https://github.com/noborus/ov) for **installation and settings.**

## Features

`ov` provides a more convenient function by separating text,
not only the pager function to display at the terminal size.

* Specify a fixed line to be displayed as a header.
* Table-formatted text can be interpreted as a column by the delimiter.
* Text can be interpreted as a section by splitting the line with a delimiter.

## Memory management

### Regular file

`ov` is managed by dividing it into Chunks for each ChunkSize (10,000) lines.
For example, a file with 73210 lines is divided into 7 chunks. Chunk

![file memory management](ov-file-mem.png)

The first Chunk (Chunk0) is always loaded into memory.
Chunk3 and Chunk4 must also be loaded into memory, as they may span two Chunks when displayed.
Chunk1 and Chunk2 have been used before and are loaded into memory, but can be freed if they exceed their limits.
For regular files, it is possible to save memory and speed by loading and freeing memory while seeking.

### Non-regular file

Files that cannot be `seek` (pipes and compressed files) are also managed in chunk units, but once released, they cannot be loaded into memory, so load them into memory as much as possible.
If there is a memory limit, read up to the memory limit and then pause reading.

![non-file memory management](ov-mem-mem.png)

Then, for example, when you go to line 41230, Chunk1, Chunk2, and Chunk3 are freed and read ahead from where they are now.

### memory limit

The default memory limit for regular files is 100 (1 million lines).
I don't think you need to change much, but you can specify it with `--memory-limit-file`.

```console
ov --memory-limit-file 10 large.log
```

The default memory limit for non-regular files is -1 ( unlimited).

It is recommended to limit this according to memory.
It is recommended to set `MemoryLimit: 10000(or 1000)` in `ov.yaml`.

```yaml
MemoryLimit: 10000
```

You can also use options like `--memory-limit 1000`.

```console
command | ov --memory-limit 1000
```

Even with the memory limit option specified, large files can still use a lot of memory.
Setting `GOMEMLIMIT` to run GC frequently will also suppress temporary memory increase.

```console
export GOMEMLIMIT=400MiB
ov --memory-limit-file 10 large.log
```
