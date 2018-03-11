---
layout: docs
category: B
title: isEqual
tags: []
---

{% include docs-contents.html %}

### Example
```js
var data1 = {age: '24', name: 'Jene', items: [0, 1, 2]},
    data2 = {age: 24, name: 'Jene', items: [0, 1, 2]},
    data3 = {age: 24, name: 'Jene', items: [0, 1, 2]};

$B.isEqual( data1, data2 );//false
$B.isEqual( data2, data3 );//true
```