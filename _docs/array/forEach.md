---
layout: docs
category: array
title: forEach
tags: []
---

{% include docs-contents.html %}

### Example
```js
var ary = [ {name: 'Tajan', age: 29}, {name: 'Cheeta', age: 12}, {name: 'Jane', age: 45} ];
var result = 0;

$B.array.forEach( ary, function ( item, index, array ) {
    result += item.age;
}); 

console.log( result );// 86
```