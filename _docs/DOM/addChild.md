---
layout: docs
category: DOM
title: addChild
tags: []
---

{% include docs-contents.html %}

### Example
```js
var child = document.createElement( 'div' );
$B( '#box' ).addChild( child, 3 );

var el = $B( '#box' ).selector( 'div.child' );
$B( '#wrap' ).addChild( el );
```