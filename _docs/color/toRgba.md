---
layout: docs
category: color
title: toRgba
tags: []
---

{% include docs-contents.html %}

### Example
```js
//Return Type : String
var strColor = $B.color.toRgba( '#FFFFFF' ); //rgba(255, 255, 255, 1)

//Return Type : Object
var objColor = $B.color.toRgba( '#FFFFFF', true ); //{ r: 255, g: 255, b: 255, a: 1 }
```