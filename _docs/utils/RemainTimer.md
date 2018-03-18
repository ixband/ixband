---
layout: docs
category: utils
title: RemainTimer
tags: []
---

{% include docs-contents.html %}

### Example
```js
var start = new Date().getTime(),
    finish = new Date().getTime() + (24 * (10 * (60 * 1000)));

var rTimer = new $B.utils.RemainTimer( start, finish )
        .addListener( 'timer', function (e) {
            console.log( e.second + '초' );
        })
        .addListener( 'complete', function (e) {
            //
        }).start();

//시간 재설정
rTimer.reset( 0, 5000 ).start();
```