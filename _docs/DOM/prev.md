---
layout: docs
category: DOM
title: prev
tags: []
---

{% include docs-contents.html %}

### Example
```js
var prevNode = $B( '#box' ).prev();

var node = $B( prevNode ).prev( 'img[src$="_on.gif"]' );
```