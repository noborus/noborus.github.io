+++
author = "Noboru Saito"
title = "ov"
menuPre = "<i class='fab fa-github'></i> "
description = "ov - 機能豊富なページャー"
tags = "ov"
weight = 3
linktitle = "ov"
+++

# 機能豊富なターミナルページャー

[![ov](ov.gif)](https://github.com/noborus/ov)

<div id="download">
{{% button icon="download" style="info" href="https://github.com/noborus/ov/releases/latest" %}}Download{{% /button %}}
</div>

{{% notice style="note" title="Note" %}}
[<i class="fab fa-github"></i>インストール、設定についてはgithubを参照してください。](https://github.com/noborus/ov)
{{% /notice %}}

## 特徴

`ov` は端末サイズで表示するページャー機能だけでなく、テキストを区切ることでより便利な機能を提供します。
そのため、特に表形式のテキストを表示するのに適しています。

* 大きなファイルでも素早く開くことができます。
* 固定ヘッダー行表示をサポート（折り返し/折り返さない両方）。
* 区切り文字による列を認識する列モードをサポート。
* また、列モードでは、各列を色付けする列レインボーモードがあります。
* 区切り文字の代わりに固定幅の列をサポート。
* 区切り文字によるセクション分割、セクションごとの移動をサポート。
* セクションのヘッダー行をサポート、ヘッダー行は複数行にできます。
* 動的に折り返し/折り返さないを切り替え可能。
* 交互の行スタイリングをサポート。
* ショートカットキーはカスタマイズ可能。
* 装飾のスタイルはカスタマイズ可能。
* フォローモードをサポート（tail -fのような）。
* ファイル名によるフォローモードをサポート（tail -Fのような）。
* セクションが更新されたときに表示されるフォローセクションをサポート。
* 複数のファイルをフォローし、更新時に切り替える（follow-all）をサポート。
* stdoutとstderrを個別に表示するコマンドの実行(exec)をサポート。
* 定期的にファイルを読み込むウォッチモードをサポート。
* execモードでのウォッチをサポート（watchコマンドと同等）。
* インクリメンタル検索と正規表現検索をサポート。
* 複数の単語を個別にハイライトするマルチカラーをサポート。
* Unicodeと東アジアの幅に対するより良いサポート。
* 圧縮ファイル（gzip、bzip2、zstd、lz4、xz）をサポート。

## 使用事例

{{% children containerstyle="div" description="true" style="h3" depth="1" sort="weight" %}}
