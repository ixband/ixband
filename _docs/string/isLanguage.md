---
layout: docs
category: string
title: isLanguage
tags: []
---

{% include docs-contents.html %}

### Example
```js
var str = '동해물과 white head mountain이';

var result1 = $B.string.isLanguage( str, 'en' ); // true

var result2 = $B.string.isLanguage( str, 'number' ); // false

var result3 = $B.string.isLanguage( str, 'en', 'number' ); // true

var result4 = $B.string.isLanguage( str, 'en', 'ko' ); // true
```