---
layout: docs
category: DOM
title: selector
tags: []
---

{% include docs-contents.html %}

### Example
```js
var el1 = $B( document ).selector( '#wrap > div.box' );
var el2 = $B( el1 ).selector( 'a img' );
var el3 = $B( '#wrap' ).selector( 'p.box.green' );
```