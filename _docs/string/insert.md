---
layout: docs
category: string
title: insert
tags: []
---

{% include docs-contents.html %}

### Example
```js
var str = 'ABCDEFGHIJK';
var result1 = $B.string.insert( str, 3, '-' ); // ABC-DEFGHIJK
var result2 = $B.string.insert( str, 3, '+', 'left', true ); // AB+CDE+FGH+IJK
```