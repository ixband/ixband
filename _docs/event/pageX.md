---
layout: docs
category: event
title: pageX
tags: []
---

{% include docs-contents.html %}

### Example
```js
$B( '#box' ).addEvent( 'click', function (e) {
    var pageX = $B.event.pageX(e);
});
```