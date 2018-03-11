---
layout: docs
category: object
title: extend
tags: []
---

{% include docs-contents.html %}

### Example
```js
var obj1 = {a: 'Kim', b: 'Lee', c: 'Park'};
var obj2 = {c: 2, d: 'Soo'};
var objValues = $B.object.extend( obj1, obj2 ); //{a: 'Kim', b: 'Lee', c: 2, d: 'Soo'};
```