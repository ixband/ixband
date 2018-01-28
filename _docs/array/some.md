---
layout: docs
category: array
title: some
tags: []
---

{% include docs-contents.html %}

### Example
```js
var ary1 = [ '0', 1, '2', '3' ],
    ary2 = [ 0, 1, 2, 3 ];

var result1 = $B.array.some( ary1, isNumeric ); // true

var result2 = $B.array.some( ary2, isNumeric ); // true

function isNumeric ( item, index, array ) {
    return typeof item === 'number';
}
```