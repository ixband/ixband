---
layout: docs
category: event
title: GestureAxis
tags: []
---

{% include docs-contents.html %}

### Example
```js
var gAxis = new $B.event.GestureAxis( '#wrap > div.banner' )
        .addListener( 'axis', function (e) {
            console.log( e.type );//axis
        });
```