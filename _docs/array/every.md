---
layout: docs
category: array
title: every
tags: []
---

{% include docs-contents.html %}

### Example
다음 예제에서는 두 배열을 테스트하여 각 배열의 모든 항목이 숫자인지 확인.
```js
var ary1 = [ '0', 1, '2', '3' ],
    ary2 = [ 0, 1, 2, 3 ];

var result1 = $B.array.every( ary1, isNumeric ); // false

var result2 = $B.array.every( ary2, isNumeric ); // true

function isNumeric ( item, index, array ) {
    return typeof item === 'number';
}
```