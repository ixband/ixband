---
layout: docs
category: color
title: mix
tags: []
---

{% include docs.html %}

### Example
```js
//#7f117f
var mixColor1 = $B.color.mix( '#ff22ff', '#000', 0.5 );

//rgb(255, 144, 255)
var mixColor2 = $B.color.mix( '#ff22ff', 'rgb(255, 255, 255)', 0.5, 'rgb' );

//rgba(255, 144, 255, 0.85)
var mixColor3 = $B.color.mix( '#ff22ff', 'rgba(255, 255, 255, 0.7)', 0.5, 'rgba' );
```