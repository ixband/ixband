---
layout: docs
category: array
title: map
tags: []
---

{% include docs.html %}

### Example
다음 예제에서는 배열을 테스트하여 각 배열의 모든 항목의 단어 첫글짜를 대문자로 변환.
```js
var ary = [ 'name', 'age' ];

var result = $B.array.map( ary, function ( item, index, array ) {
    return $B.string.capitalize( item );
}); // Name, Age
```