---
layout: docs
category: color
title: parseRgba
tags: []
---

{% include docs.html %}

### Example
```js
// { r: 255, g: 255, b: 255, a: 1 }
var objColor1 = $B.color.parseRgba( 'rgb(255, 255, 255)' ); 

// { r: 255, g: 255, b: 255, a: 0.5 }
var objColor2 = $B.color.parseRgba( 'rgba(255, 255, 255, 0.5)' );
```