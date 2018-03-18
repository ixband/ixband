---
layout: docs
category: utils
title: TweenCore
tags: []
---

{% include docs-contents.html %}

### Example
```js
var tweener = new $B.utils.TweenCore( 0.3, 10, 200 )
        .addListener( 'tween', function (e) {
            //
        })
        .addListener( 'complete', function (e) {
            //
        })
        .addListener( 'seekcomplete', function (e) {
            //
        }).start();

//TweenCore 정지
tweener.stop();
```