+++
author = "Noboru Saito"
title = "trdsql v0.9.0"
date = "2021-05-24T16:47:00+09:00"
description = ""
tags = [
    "trdsql",
]
categories = [
    "trdsql",
]
+++

# [trdsql v0.9.0をリリースしました。](https://github.com/noborus/trdsql/releases)

[リリース](https://github.com/noborus/trdsql/releases/tag/v0.9.0)のページから各バイナリがダウンロードできます。

## JSONに対してjq式でフィルタを掛けられるようになりました。

JSONに対してtrdsqlでは最初のオブジェクトや配列をテーブルとみなして処理します。
JSONは階層構造に出来るため、その中のオブジェクトをテーブルとしたい場合にはSQLのJSON関数を使うか、jqを使用してフィルタリングしてパイプで受け取る等の処置が必要でした。

これが面倒だったため、JSONファイルに対して[jq](https://stedolan.github.io/jq/)式を書けるようにしました。

この実装には[gojq](https://github.com/itchyny/gojq)を利用しています。

例えば以下のようなJSONファイルがあった場合に、

```json
{
	"menu": {
		"id": "file",
		"value": "File",
		"popup": {
			"menuitem": [
				{
					"value": "New",
					"onclick": "CreateDoc()"
				},
				{
					"value": "Open",
					"onclick": "OpenDoc()"
				},
				{
					"value": "Save",
					"onclick": "SaveDoc()"
				}
			]
		}
	}
}
```

これにより`jq ".menu.popup.menuitem" menu.json | trdsql -oat -ijson "SELECT * FROM -`
のように書かなければできなかった`menuitem`に対して以下のようにすればSQLを書けるようになります。

```console
trdsql -oat "SELECT * FROM menu.json::.menu.popup.menuitem"
```

```
+-------+-------------+
| value |   onclick   |
+-------+-------------+
| New   | CreateDoc() |
| Open  | OpenDoc()   |
| Save  | SaveDoc()   |
+-------+-------------+
```

jqが含まれているため必要なくなって標準入力を使用しないために複数のファイル又は一つのJSONファイルの中の複数のテーブルを使用できるようになります。

jq式は非常に強烈でSQL相当のこともjq式で出来てしまいます。SQLでやるかjq式でやるかはお好みですが、適正を考えるのが良いと思います。
またjq式を書く場合はjq式をダブルクオートでくくる必要があるかもしれません。 `"SELECT * FROM menu.json::\".menu.popup.menuitem\""` のように。

trdsqlのjson出力は中身がjsonであればjsonとして扱うようになっているため、以下のように`-ojson "SELECT * FROM jsonファイル名::(jq式)`とするとjqの代わりにもなります。

```console
trdsql -ojson "SELECT * FROM menu.json::.menu"
```

```json
[
  {
    "id": "file",
    "popup": {
      "menuitem": [
        {
          "onclick": "CreateDoc()",
          "value": "New"
        },
        {
          "onclick": "OpenDoc()",
          "value": "Open"
        },
        {
          "onclick": "SaveDoc()",
          "value": "Save"
        }
      ]
    },
    "value": "File"
  }
]
```

## JSONの数値をfloat64にマッピングされていたのを修正

以下のような大きな数値が入ったJSONが、goのjson の実装としてfloat64にマッピングされていました。そのためJSONを介すと指数表記になったりして、嬉しくないことがありました。

```json
{
    "float": 1000000000
}
```

```console
trdsql "SELECT * FROM float.json"
1e+09
```

https://golang.org/pkg/encoding/json/#Decoder.UseNumber を有効にして Number として扱われるようにしました。

## TSV,PSVを拡張子として認識

tsvやpsvという拡張子のファイルだった場合は、tsvはTAB区切りのCSV、psvはパイプ(|)区切りのCSVとして扱うようにしました。区切り文字のオプションを付けなくてもよくなります。
