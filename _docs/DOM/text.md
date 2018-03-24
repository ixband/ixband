---
layout: docs
category: DOM
title: text
tags: []
---

{% include docs-contents.html %}

### Example
```js
//setter
$B( '#box' ).text( '<span>홍길동</span>' );
//.html( '<span>홍길동</span>' )과 차이점은 해당문자열을 태그로 인식하지 않고 문자열로 인식한다.

//getter
var text = $B( '#box' ).text();
```