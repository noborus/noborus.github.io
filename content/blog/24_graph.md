+++
author = "Noboru Saito"
title = "trdsql グラフ"
date = "2019-12-24"
description = ""
tags = [
    "trdsql",
    "sql",
    "graph",
]
categories = [
    "trdsql",
    "advent calendar 2019",
]
+++

trdsqlは、グラフ作成機能は持っていないためグラフを作成したいときには別のツールを使用して作成することになります。

ExcelやLibreOfficeで描画するのが定番でしょうが、ここでは[marianogappa/chart](https://github.com/marianogappa/chart)でグラフを描画する方法を紹介します。

[marianogappa/chart](https://github.com/marianogappa/chart)は、Goで作られていて、や多くのプラットフォームで動作して、標準入力から受け取ったデータをブラウザに描画します。

複雑なグラフには向いていませんが、簡単なグラフを少ないオプションを指定するだけで描画できます。

chartに与えるデータは表示したいグラフによりますが、1列又は2列のデータです。

例えばchartのデフォルトの`pie`では、以下のような文字列が並んでいるようなデータを集計して円グラフにしてくれます。

```CSV
aaa
bbb
ccc
aaa
aaa
aaa
```

```sh
cat aaa.csv|chart
```

（ブラウザが開いて表示されます）

![pie.png](../pie.png)

これを使用して例えば、[ログ集計](../08_log)で使用したログのリクエストをグラフにすると以下のようになります。

```sh
trdsql "SELECT req FROM log.ltsv"|chart
```

![logpie.png](../logpie.png)

また、他のグラフでは、1列目がx項目名で、2列目が値として与えます。デフォルトはタブ区切りのデータを受け取るので、タブ区切りで出力します。

[ログ集計](../08_log)のリクエストが多い順をTOP 20に変えて出力すると以下のようになります。

```sh
trdsql -od "\t" \
  "SELECT req, count(req) as count " \
    "FROM log.ltsv " \
"GROUP BY req " \
"ORDER BY count DESC LIMIT 20" |chart bar
```

![bar.png](../bar.png)

[marianogappa/chart](https://github.com/marianogappa/chart)は、[Chart.js](https://www.chartjs.org/)を使用してグラフを描画しています。Chart.js自体が簡単なJavaScriptを用意すれば描画してくれるので、もう少し複雑なグラフを描きたい場合は直接利用するのが良いでしょう。

