---
layout: docs
category: event
title: CustomEvents
tags: []
---

{% include docs-contents.html %}

### Example
```js
var cs = new $B.event.CustomEvents()
    .addListener( 'test', function (e) {
        console.log( e.myId );
    });

cs.dispatch( 'test', {myId: 'TEST_ID'} );
```