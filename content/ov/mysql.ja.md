---
author: "Noboru Saito"
title: "mysql"
date: 2024-11-11T09:00:00+09:00
description: "ovをmysqlのpagerとして使用する"
tags: ["ov"]
categories: ["ov"]
weight: 4
---

`ov` はmysqlクライアントやMySQL Shellのページャーとしても使用できます。
mysqlクライアントは`--pager`オプションで指定できます。

```console
mysql --pager='ov -w=f -H3 -F -C -d "|" --column-mode --column-rainbow --align'
```

`~/.my.cnf`設定ファイルに以下を書くことでも使用できます。

```ini
[client]
pager=ov -w=f -H3 -F -C -d "|" --column-mode --column-rainbow --align
```

![ov-mysql.png](/ov/ov-mysql.png)

mysqlのヘッダーは3行なので、`-H3`で指定していますが、うち2行は区切りの線です。
もし区切りの線を常に表示しておかなくてもよいのであれば、`-H1`を指定して、さらに`--skip-lines 1`で1行目をスキップするようにします。

```console
ov -w=f --skip-lines 1 -H1 -F -C -d "|"' --column-mode --column-rainbow --align'
```

![ov-mysql.gif](/ov/ov-mysql.gif)

mysqlshでは、`--pager`オプションを使うか、mysqlshが起動している間に設定します。
例えば、jsモードでは、以下のコマンドで永続的に設定できます。

```js
shell.options.setPersist("pager","ov -H1 --skip-lines 1 -C -w=false -d'|' -F --column-mode --column-rainbow --align")
```

SQLモードとPythonモードでは、以下のように設定します。

```console
\option --persist pager "ov -w=f -H1 --skip-lines 1 -F -C -d '|' --column-mode --column-rainbow --align"
```

また、v0.37.0からは、`--align`を使用している場合は、列の縮小（デフォルトキー`s`）が可能です。

![ov-mysql-shrink](/ov/ov-mysql2.gif)