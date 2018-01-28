---
layout: docs
category: color
title: hslToRgb
tags: []
---

{% include docs.html %}

### Example
```js
//Return Type : String
var strColor = $B.color.hslToRgb( 'hsl(240, 30%, 70%)' ); //rgb(156,156,201)

//Return Type : Object
var objColor = $B.color.hslToRgb( 'hsl(240, 30%, 70%)', true ); //{ r: 156, g: 156, b: 201, a: 1 }
```