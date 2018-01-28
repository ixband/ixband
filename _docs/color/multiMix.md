---
layout: docs
category: color
title: multiMix
tags: []
---

{% include docs-contents.html %}

### Example
```js
//#65ff00
var mixColor1 = $B.color.multiMix( ['#ff22ff', '#00ff00', '#ffff00'], 0.7 );

//rgb(101, 153, 101)
var mixColor2 = $B.color.multiMix( ['#ff22ff', '#00ff00', 'rgb(255, 0, 255)'], 0.7, 'rgb' );

//rgba(255, 153, 101, 0.7)
var colors = ['#ff22ff', 'rgba(255, 255, 0, 0.5)', 'rgb(255, 0, 255)'];
var mixColor3 = $B.color.multiMix( colors, 0.7, 'rgba' );
```