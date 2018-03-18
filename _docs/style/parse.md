---
layout: docs
category: style
title: parse
tags: []
---

{% include docs-contents.html %}

### Example
```js
var propObj = $B.style.parse( 'background-color: rgb(255, 255, 25)' );
//{ backgroundColor: {name: 'background-color', value: 'rgb(255, 255, 25)', unit: ''} }

var propObj = $B.style.parse( 'z-index: 3; left: 100px' );
//{ zIndex:{name:'z-index', value:3, unit:''}, left:{name:'left', value:100, unit:'px'} }
```