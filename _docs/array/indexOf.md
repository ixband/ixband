---
layout: docs
category: array
title: indexOf
tags: []
---

{% include docs-contents.html %}

### Example
```js
var ary = [ 'Tajan', 23, 'Cheeta', 'Jane' ];

var result1 = $B.array.indexOf( ary, '23' ); // -1
var result2 = $B.array.indexOf( ary, 23 ); // 1
```