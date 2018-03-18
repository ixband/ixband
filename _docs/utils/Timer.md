---
layout: docs
category: utils
title: Timer
tags: []
---

{% include docs-contents.html %}

### Example
```js
var timer = new $B.utils.Timer( 1000, 5 )
        .addListener( 'timer', function (e) {
            //
        })
        .addListener( 'complete', function (e) {
            //
        }).start();

//타이머 정지
timer.stop();
```