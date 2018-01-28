---
layout: docs
category: event
title: DoubleTab
tags: []
---

{% include docs-contents.html %}

### Example
```js
var doubleTab = new $B.event.DoubleTab( '#wrap > div.banner' )
    .addListener( 'doubletab', function (e) {
        console.log( e.type );//doubletab
        console.log( e.target );//TouchEvent가 발생한 대상
        console.log( e.currentTarget );//최초에 등록한 대상
        e.preventDefautl();
        e.stopPropagation();
    });
```