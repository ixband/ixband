---
layout: docs
category: DOM
title: scrollLeft
tags: []
---

{% include docs-contents.html %}

### Example
```js
//setter
$B( window ).scrollLeft( 100 );

//getter
var scrollX = $B( window ).scrollLeft();


//다른페이지로 이동했다 "이전페이지" 버튼을 이용해 돌아올시 $B(target).scrollLeft( 0 ) 설정이 되지 않을수 있다.
//이때는 아래처럼 설정하면 된다.
$B( target ).scrollLeft( 1 );
$B( target ).scrollLeft( 0 );
```