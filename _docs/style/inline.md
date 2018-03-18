---
layout: docs
category: style
title: inline
tags: []
---

{% include docs-contents.html %}

### Example
```js
//getter
var cssText = $B.style.inline( el );//대상개체의 style.cssText를 문자열로 반환.
var css = $B( el ).css( 'opacity' );//대상개체의 computed style반환.

//setter (아래 두가지 Method는 동일하게 동작한다.)
$B.style.inline( el, 'opacity: 0.5' );
$B( el ).css( 'opacity: 0.5' );
```