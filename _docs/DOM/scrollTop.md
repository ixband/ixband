---
layout: docs
category: DOM
title: scrollTop
tags: []
---

{% include docs-contents.html %}

### Example
```js
//setter
$B( window ).scrollTop( 100 );

//getter
var scrollY = $B( window ).scrollTop();


//다른페이지로 이동했다 "이전페이지" 버튼을 이용해 돌아올시 $B(target).scrollTop( 0 ) 설정이 되지 않을수 있다.
//이때는 아래처럼 설정하면 된다.
$B( target ).scrollTop( 1 );
$B( target ).scrollTop( 0 );
```