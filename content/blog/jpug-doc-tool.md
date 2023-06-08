---
author: "Noboru Saito"
title: "Jpug-doc-tool"
date: 2021-12-31T13:14:37+09:00
tags: ["jpug-doc", "jpug-doc-tool"]
categories: ["jpug-doc"]
---

## PostgreSQLの日本語マニュアルのヘルパーツール

[PostgreSQLのマニュアルの日本語への翻訳](https://github.com/pgsql-jp/jpug-doc/)に参加していますが、その翻訳に役立つツールとして[jpug-doc-tool](https://github.com/noborus/jpug-doc-tool)を公開しました。

### 基本的な方針

[PostgreSQL日本語マニュアルについては前に書いた手順](https://qiita.com/noborus/items/03f98e43c216d7e23767)と大きく変わっていませんが、SGMLの拡張子のままですがXMLとして解釈されるように変わっています。

XMLのライブラリを利用して読むことは可能になっていますが、PostgreSQLに入っているドキュメントは自動フォーマットされてレポジトリに入っていないため、XMLの処理系で処理して書き出すと元ドキュメントの比較が難しくなってしまいます。

そのため、XMLライブラリは使用せず、正規表現を使用し、必要なら最小限の書き換えをする作りになっています。

### 使い方

サブコマンドにより文書のチェックや抽出、書き換えができます。

```console
$ jpug-doc-tool
jpug-doc の翻訳を補助ツール。
前バージョンの翻訳を新しいバージョンに適用したり、
翻訳のチェックが可能です。

Usage:
  jpug-doc-tool [command]

Available Commands:
  check       文書をチェックする
  completion  Generate the autocompletion script for the specified shell
  extract     英語と日本語翻訳を抽出する
  help        Help about any command
  list        辞書から英語と日本語訳のリストを出力する
  mt          APIを使用して文字列を翻訳する
  replace     英語のパラグラフを「<!--英語-->日本語翻訳」に置き換える

Flags:
      --config string   config file (default is $HOME/.jpug-doc-tool.yaml)
  -h, --help            help for jpug-doc-tool
  -t, --toggle          Help message for toggle

Use "jpug-doc-tool [command] --help" for more information about a command.
```

jpug-doc-toolは`postgresql/doc/src/sgml/`で実行します。拡張子sgmlのファイルを指定するとそのファイルを対象にします。指定しなかった場合はドキュメントを全て対象とします。

### check

PostgreSQLの文書で翻訳対象となる箇所の多くは以下のようになっています。

```xml
<para>
  This is original document.
</para>
```

jpug-docの翻訳をおこなう場合以下のように追加して日本語訳を入れます。

```xml
<para>
<!--
  This is original document.
-->
これは翻訳した文です。
</para>
```

上記のように`<para>`内にコメントが無いとまだ翻訳が済んでいない可能性があるため、それをチェックします。

翻訳抜けだけでなく、翻訳が古いままになっている場合があるため、日本語訳の数値と日本語訳に含まれる英単語が英語の原文にあるかどうかをチェックできます。

以下のように使用します。`-w`が英単語のチェック、`-n`が数値のチェックです。

```console
$ jpug-doc-tool -w -n catalogs.sgml
````

よくあるのが、意味自体は変わらなくてもタグが変更になっている場合です。

元々は`<command>ANALYZE</command>`だったのが`<xref linkend="sql-analyze"/>`に変更される場合があります。この場合同様の変更がいっぺんに変更されるので、日本語訳の修正が漏れてしまうことがあります。

```text
<========================================
[command ｜ /command]が含まれていません
Custom <xref linkend="sql-analyze"/> function, or zero to use the standard function
-----------------------------------------
独自の<command>ANALYZE</command>関数。標準関数を使用する場合はゼロ
========================================>
```

また、英語の原文に数値が含まれていた場合は、日本語訳にもその数値が含まれているはずなので、その数値が含まれていない場合や違う数値になっていた場合は、日本語訳の更新が漏れている可能性があります。

```text
<========================================
原文にある[2003 ｜ 1999]が含まれていません
Extracts the first substring matching <acronym>SQL</acronym> regular expression; see <xref linkend="functions-similarto-regexp"/>. The first form has been specified since SQL:2003; the second form was only in SQL:1999 and should be considered obsolete.
-----------------------------------------
<acronym>SQL</acronym>正規表現にマッチする部分文字列を返します。<xref linkend="functions-similarto-regexp"/>を参照してください。
========================================>
```

2003、1999といった数値はバージョンアップで追加された文書なので翻訳側でも追加されている必要があります。
