---
layout: docs
category: event
title: pageY
tags: []
---

{% include docs-contents.html %}

### Example
```js
$B( '#box' ).addEvent( 'click', function (e) {
    var pageY = $B.event.pageY(e);
});
```