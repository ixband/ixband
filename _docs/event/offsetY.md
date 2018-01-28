---
layout: docs
category: event
title: offsetY
tags: []
---

{% include docs-contents.html %}

### Example
```js
$B( '#box' ).addEvent( 'click', function (e) {
    var offsetY = $B.event.offsetY(e);
});
```