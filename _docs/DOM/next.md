---
layout: docs
category: DOM
title: next
tags: []
---

{% include docs-contents.html %}

### Example
```js
var nextNode = $B( '#box' ).next();

var node = $B( nextNode ).next( 'img[src$="_on.gif"]' );
```