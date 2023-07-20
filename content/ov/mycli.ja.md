---
author: "Noboru Saito"
title: "mycli"
date: 2023-07-08T15:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 6
---

`ov`は[mycli](https://github.com/dbcli/mycli)のページャーとしても使用できます。

`mycli`はmysqlの`~/.my.cnf`ファイルを使用して設定できます。
[https://www.mycli.net/config](https://www.mycli.net/config)を参照してください。

```ini
[client]
pager="ov -C --skip-lines 1 --header 1 -d'|'"
```
