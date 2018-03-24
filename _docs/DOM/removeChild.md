---
layout: docs
category: DOM
title: removeChild
tags: []
---

{% include docs-contents.html %}

### Example
```js
var el = $B( '#box' ).selector( 'div.child' );

$B( '#box' ).removeChild( el );
$B( '#wrap' ).removeChild( 2 );
```