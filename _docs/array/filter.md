---
layout: docs
category: array
title: filter
tags: []
---

{% include docs-contents.html %}

### Example
```js
var ary = [ {name: 'Tajan', age: 29}, {name: 'Cheeta', age: 12}, {name: 'Jane', age: 45} ];

var result = $B.array.filter( ary, function ( item, index, array ) {
    return item.age > 19;
}); // [ {name: 'Jim', age: 29}, {name: 'Jane', age: 45} ]
```