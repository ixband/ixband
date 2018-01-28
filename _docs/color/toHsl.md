---
layout: docs
category: color
title: toHsl
tags: []
---

{% include docs-contents.html %}

### Example
```js
//Return Type : String
var strColor = $B.color.toHsla( '#FFFFFF' ); //hsl(0, 0%, 100%)

//Return Type : Object
var objColor = $B.color.toHsla( '#FFFFFF', true ); //{ h: 0, s: 0%, l: 100% }
```