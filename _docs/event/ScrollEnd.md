---
layout: docs
category: event
title: ScrollEnd
tags: []
---

{% include docs-contents.html %}

### Example
```js
var winScrollend = new $B.event.ScrollEnd( window )
        .gap({top:100})
        .addListener( 'scrollbottom', winScrollHandler )
        .addListener( 'scrolltop', winScrollHandler )
        .trigger();

function winScrollHandler (e) {
    console.log( e.type );
}
```