---
layout: docs
category: event
title: offsetX
tags: []
---

{% include docs-contents.html %}

### Example
```js
$B( '#box' ).addEvent( 'click', function (e) {
    var offsetX = $B.event.offsetX(e);
});
```