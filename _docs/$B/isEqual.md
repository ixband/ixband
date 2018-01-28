---
layout: docs
category: B
title: isEqual
tags: []
---

{% include docs-contents.html %}

### Example
```js
var data1 = {age: '24', name: 'Jene'},
    data2 = {age: 24, name: 'Jene'};

var isEqual = $B.isEqual( data1, data2 );//false
```