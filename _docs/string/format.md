---
layout: docs
category: string
title: format
tags: []
---

{% include docs-contents.html %}

### Example
```js
var str = 135;
var result1 = $B.string.format( str, 5 ); // 00135
var result2 = $B.string.format( str, 5, 'X' ); // XX135
```