---
layout: docs
category: color
title: parseHsla
tags: []
---

{% include docs.html %}

### Example
```js
// {h: 360, s: 90, l: 10, a: 1 }
var objColor1 = $B.color.parseHsla( 'hsl(360, 90%, 10%)' ); 

// {h: 360, s: 90, l: 10, a: 0.5}
var objColor2 = $B.color.parseHsla( 'rgba(360, 90%, 10%, 0.5)' );
```