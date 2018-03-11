---
layout: docs
category: object
title: toArray
tags: []
---

{% include docs-contents.html %}

### Example
```js
var obj = {a: 'Kim', b: 'Lee', c: 'Park'};
var objValues = $B.object.toArray( obj ); //['Kim', 'Lee', 'Park']
var objKeys = $B.object.toArray( obj, 'key' ); //['a', 'b', 'c']
```