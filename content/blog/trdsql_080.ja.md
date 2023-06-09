+++
author = "Noboru Saito"
title = "trdsql v0.8.0"
date = "2021-01-27T11:00:00+09:00"
description = ""
tags = [
    "trdsql",
]
categories = [
    "trdsql",
]
+++

# [trdsql v0.8.0をリリースしました。](https://github.com/noborus/trdsql/releases)

[リリース](https://github.com/noborus/trdsql/releases/tag/v0.8.0)のページから各バイナリがダウンロードできます。

## Contextを追加しました。

コマンドでは、killシグナルによって終了するので、変更はないですが、内部的にContextによるキャンセルを出来るようにしました。パッケージ使用する場合にプロセスの終了をせずにキャンセルする処理が書きやすく成ります。

## JSON出力でJSONオブジェクトだった場合にjson.RawMessageで返すようになりました。

JSONは入れ子で配列、オブジェクトを入れられますが、これまでのtrdsqlではフラットな文字列として扱うため、JSONの入れ子構造を作ることが出来ませんでした。
json.RawMessageとして返すことで、SQLのJSON関数でJSON化した列をJSONとして扱えるようになりました。

## JSON出力時にオブジェクトの順序が保持されるようになりました。

JSONのオブジェクト`{"a": "x", "b", "y"}`が並んだときには順序は無いことになっています。そのため、`{"a": "x", "b", "y"}`と`{"b", "y","a": "x",}`は同じものです。
そのため、trdsqlでJSONやJSONL出力するときに `"SELECT a,b FROM test.json"`のようなSQLでもJSONに変換された時点でaとbの順序は不定でした。
しかしながら、不便な場合があるのでこの順序を守るようにしました。

## ~(tilde) を $HOMEに展開するようにしました。

`~/test.csv`　などの `~(tilde)` の指定は通常shellがおこなうため、`"SELECT * FROM ~/test.csv"`のようにした場合は`~(tilde)`が展開されませんでした。trdsqlではファイル名だった場合に自前で置き換えするようにしたので展開されることになります。
