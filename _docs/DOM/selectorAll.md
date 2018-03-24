---
layout: docs
category: DOM
title: selectorAll
tags: []
---

{% include docs-contents.html %}

### Example
```js
var el1 = $B( document ).selectorAll( '#wrap > div.box' );
var el2 = $B( el1[0] ).selectorAll( 'a img' );
var el3 = $B( '#wrap' ).selectorAll( 'p.box.green' );
```