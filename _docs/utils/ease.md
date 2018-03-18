---
layout: docs
category: utils
title: ease
tags: []
---

{% include docs-contents.html %}

### Example
```js
var tweener = new $B.utils.TweenCSS( el, 0.3, 'left: 20px', 'left: 1000px', {
    ease: $B.utils.ease.backOut 
}).start();
```