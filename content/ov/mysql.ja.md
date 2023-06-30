---
author: "Noboru Saito"
title: "mysql"
date: 2023-06-30T09:00:00+09:00
tags: ["ov"]
categories: ["ov"]
weight: 4
---

`ov` はmysqlクライアントやMySQL Shellのページャーとしても使用できます。
mysqlクライアントは`--pager`オプションで指定できます。

```console
mysql --pager='ov -w=f -H3 -F -C -d "|"'
```

`~/.my.cnf`設定ファイルに以下を書くことでも使用できます。

```ini
[client]
pager=ov -w=f -H3 -F -C -d "|"
```

![ov-mysql.png](/ov/ov-mysql.png)

mysqlのヘッダーは3行なので、`-H3`で指定していますが、うち2行は区切りの線です。
もし区切りの線を常に表示しておかなくてもよいのであれば、`-H1`を指定して、さらに`--skip-lines 1`で1行目をスキップするようにします。

```console
ov -w=f --skip-lines 1 -H1 -F -C -d "|"'
```

![ov-mysql.gif](/ov/ov-mysql.gif)

mysqlshでは、`--pager`オプションを使うか、mysqlshが起動している間に設定します。
例えば、jsモードでは、以下のコマンドで永続的に設定できます。

```js
shell.options.setPersist("pager","ov -H1 --skip-lines 1 -C -w=false -d'|' -F")
```

日本語：SQLモードとPythonモードでは、以下のように設定します。

```js

```console
\option --persist pager "ov -w=f -H1 --skip-lines 1 -F -C -d '|'"
```
