---
layout: docs
category: string
title: isWholeWord
tags: []
---

{% include docs-contents.html %}

### Example
```js
var result1 = $B.string.isWholeWord( 'Hello World', 'Hello' ); // true

var result2 = $B.string.isWholeWord( 'Hello World', 'He' ); // false

var result3 = $B.string.isWholeWord( 'Hello World', 'hello', 'i' ); // true

var result4 = $B.string.isWholeWord( 'Hello World', ['World', 'hello'] ); // false

var result5 = $B.string.isWholeWord( 'Hello World', ['World', 'Hello'] ); // true
```