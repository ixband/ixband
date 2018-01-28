---
layout: docs
category: event
title: ParallaxScroll
tags: []
---

{% include docs-contents.html %}

### Example
```js
var positions = [{min:100, max:300, data:'test1'}, {min:310, max:500}];

var pScroll = new $B.event.ParallaxScroll( positions )
        .addListener( 'activate', pScrollHandler )
        .addListener( 'between', pScrollHandler )
        .addListener( 'deactivate', pScrollHandler );


function pScrollHandler (e) {
    console.log( e.type, e.index );
}
```