---
title: "trdsql v0.12.0"
date: 2023-09-30T08:45:00+09:00
tags: ["trdsql"]
categories: ["trdsql"]
---

# [trdsql v0.12.0をリリースしました。](https://github.com/noborus/trdsql/releases)

[リリース](https://github.com/noborus/trdsql/releases/tag/v0.12.0)のページから各バイナリがダウンロードできます。

## YAMLサポート

YAML形式のファイルを読み込み、出力できるようになりました。

読み込みは`YAML`, または`YML`の拡張子であれば自動判別させるか、`-iyaml`を指定します。

```test.yaml
- id: 1
  name: Orange
- id: 2
  name: Melon
- id: 3
  name: Apple
```

```console
$ trdsql -oh "SELECT id,name FROM test.yaml"
id,name
1,Orange
2,Melon
3,Apple
```

出力は`-oyaml`を指定します。

```console
trdsql -oyaml "SELECT * FROM KEN_ALL.CSV LIMIT 1"
```

```yaml
- c1: 577
  c2: 48
  c3: 196608
  c4: ホッカイドウ
  c5: サッポロシチュウオウク
  c6: イカニケイサイガナイバアイ
  c7: 北海道
  c8: 札幌市中央区
  c9: 以下に掲載がない場合
  c10: 0
  c11: 0
  c12: 0
  c13: 0
  c14: 0
  c15: 0
```

YAMLの読み込みは内部的にはJSONに変換してから読み込んでいます。そのため階層構造のあるYAMLの値はJSONになります。

```test2.yml
- id: 1
  name: Drolet
  attribute:
    color: burlywood
    country: Maldives
- id: 2
  name: Shelly
  attribute:
    color: plum
    country: Yemen
- id: 3
  name: Tuck
  attribute:
    color: antiquewhite
    country: Mayotte
```

```console
$ trdsql "SELECT * FROM test2.yml" 
1,Drolet,"{""color"": ""burlywood"", ""country"": ""Maldives""}"
2,Shelly,"{""color"": ""plum"", ""country"": ""Yemen""}"
3,Tuck,"{""color"": ""antiquewhite"", ""country"": ""Mayotte""}"
```

JSONで出力すると下の階層までJSONになります。

```console
$ trdsql -ojson "SELECT * FROM test2.yml"
[
  {
    "id": "1",
    "name": "Drolet",
    "attribute": {
      "color": "burlywood",
      "country": "Maldives"
    }
  },
  {
    "id": "2",
    "name": "Shelly",
    "attribute": {
      "color": "plum",
      "country": "Yemen"
    }
  },
  {
    "id": "3",
    "name": "Tuck",
    "attribute": {
      "color": "antiquewhite",
      "country": "Mayotte"
    }
  }
]
```

内部がJSONなのでJSONと同じくjq構文が使用可能です。

```console
$ trdsql "SELECT * FROM test2.yml::.[].attribute.color"
burlywood
plum
antiquewhite
```

## markdown出力のときにエスケープ追加

markdown出力のときに`|`をエスケープするようにしました。
前は`|`があるときに自分で変換しておかないとHTML変換時に列がずれていました。

```console
$ trdsql -omd "SELECT 'a','b', 'c|d'"
| ?column? | ?column? | ?column? |
|----------|----------|----------|
| a        | b        | c\|d     |
```
