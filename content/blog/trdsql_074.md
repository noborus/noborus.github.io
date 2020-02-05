+++
author = "Noboru Saito"
title = "trdsql 0.7.4"
date = "2020-02-05T10:00:00+09:00"
description = ""
tags = [
    "trdsql",
]
categories = [
    "trdsql",
]
+++

# [trdsql 0.7.4をリリースしました。](https://github.com/noborus/trdsql/releases)

[リリース](https://github.com/noborus/trdsql/releases)のページから各バイナリがダウンロードできます。

## 全ての項目を二重引用符（”）で囲うオプション(-oaq)を追加

今回は、CSV出力に全ての項目を二重引用符（”）で囲うオプション(-oaq)を追加しました。

goの[encoding/csv](https://golang.org/pkg/encoding/csv/)はRFC 4180に沿って実装されていますが、必要な項目を二重引用符（”）で囲うようになっていますが、全ての項目を囲う方法は用意されていません。要望はありましたが、却下されています。

trdsqlにも[要望](https://github.com/noborus/trdsql/issues/33)が以前より来ていましたが、encoding/csvが対応していないので、対応出来ないとして、カスタマイズする方法を提示していました。
今回別の方からも要望が来たので、実装しました。

encoding/csvでは対応出来ないので、別の方法で実装する必要がありますが、定番と言えるモジュールは無く実装自体は難しくないので、自前で実装することにしました。と言ってもencoding/csvのコードから少し変更しているだけです。

その際に、関連する箇所を見直して、全体の出力が速くなるように改善しました。多くの出力をする場合でないと違いは出ませんが、手元では317万行(145MB)あるファイルを `"SELECT * FROM 〜"`で出力してみたら、全体で10%ほど高速化していました。

またその他に、二重引用符（”）以外の引用符が使用できる(-oq)と改行文字をCRLFに変更する(-ocrlf)を追加しました。
CRLFはRFC 4180にあり、encoding/csvでも対応していたのですが、入れそびれていたので今回入れました。
引用符は変更してしまうとtrdsqlで読めないCSVになってしまうので注意が必要です。普通は使わないと思うのでかなり特殊用途だと思います。

## GitHub Actions でのバイナリ作成に変更

これまで [travis-ci](https://travis-ci.org/noborus/trdsql)でリリース時にビルドして[アップロード](https://github.com/noborus/trdsql/releases)していましたが、GitHub Actionsに変更しました。
途中まではtravis-ciと同様に各環境でビルドしてアップロードしていましたが、[crazy-max/xgo](https://github.com/crazy-max/xgo)(https://github.com/karalabe/xgoのfork版ですが、こちらでないとまだ問題がありました)で、クロスビルドが出来たので、こちらでビルドしてアップロードしています。

[crazy-max/ghaction-xgo](https://github.com/crazy-max/ghaction-xgo)を使用した場合は、ビルドからアップロードまで簡単に出来るようになっていますが、zipでアーカイブしてアップロードしたかったため、Makefileでビルドまでおこないアップロードをおこなっています。

対応環境数が大幅に増えたため、ワイルドカードでファイルが指定できる[AButler/upload-release-assets](https://github.com/AButler/upload-release-assets)を使用してアップロードしています。

armやmipsは環境が無いので自分では動かして試して見ることが出来ません。問題がありましたらお知らせ下さい。