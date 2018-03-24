---
layout: docs
category: DOM
title: rect
tags: []
---

{% include docs-contents.html %}

### Example
```js
var rect = $B( '#box' ).rect();
var vrect = $B( '#box' ).rect( true );

console.log( rect.left, rect.top, rect.width, rect.height );
```