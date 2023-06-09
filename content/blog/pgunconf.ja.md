---
title: "第32回 PostgreSQLアンカンファレンス@オンラインで発表しました"
date: 2022-04-01T09:54:52+09:00
tags: ["pgunconf", "postgresql"]
---

## 「作ったツール紹介」というタイトルで発表しました

[https://pgunconf.connpass.com/event/240528/](https://pgunconf.connpass.com/event/240528/)

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/96b804d0032740c2b1a16dd90c23d8f9" title="作ったツールの紹介" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 560px; height: 314px;" data-ratio="1.78343949044586"></iframe>

自分で作った以下のツールを紹介してます。

* [trdsql](https://github.com/noborus/trdsql)
* [ov](https://github.com/noborus/ov)
* [pgsp](https://github.com/noborus/pgsp)
* [jpug-doc-tool](https://github.com/noborus/jpug-doc-tool)

また、ovの関連でページャーとして、[less](https://github.com/gwsw/less)と[pspg](https://github.com/okbob/pspg)も紹介してます。

とくに、[less](https://github.com/gwsw/less)はまだ正式リリース版ではないですが、ヘッダーオプションが追加されるということで、PostgreSQLに限らず全DBのCLIを使っている人にとって、朗報だと思います。

また、ヘッダー固定が可能なことを前提にすると他のアプリケーションの作り方も変わっていくものだと思っています。

[jpug-doc-tool](https://github.com/noborus/jpug-doc-tool)で[みんなの自動翻訳＠TexTra](https://mt-auto-minhon-mlt.ucri.jgn-x.jp/)を使用できるようにしていることを紹介しました。

みんなの自動翻訳の説明はだいぶ省略しましたが、対訳語の登録や対訳集を学習させる等によりカスタマイズエンジンをみんなで育てることができれば、PostgreSQL向けの翻訳精度が上がっていくと思うので、利用者を増やしたいところです。