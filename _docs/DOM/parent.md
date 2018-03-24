---
layout: docs
category: DOM
title: parent
tags: []
---

{% include docs-contents.html %}

### Example
```js
var parentNode = $B( '#box' ).parent();

var node = $B( parentNode ).parent( 'div[alt*=good]' );
```