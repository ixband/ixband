---
layout: docs
category: color
title: toHsla
tags: []
---

{% include docs.html %}

### Example
```js
//Return Type : String
var strColor = $B.color.toHsla( '#FFFFFF' ); //hsla(0, 0%, 100%, 1)

//Return Type : Object
var objColor = $B.color.toHsla( '#FFFFFF', true ); //{ h: 0, s: 0%, l: 100%, a: 1 }
```