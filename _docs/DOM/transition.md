---
layout: docs
category: DOM
title: transition
tags: []
---

{% include docs-contents.html %}

### Example
```js
//대상개체 Transition
$B( '.slider' ).transition( 'left:90%', 'left 0.6s ease' );

//대상개체 Transition, 완료이벤트 받기
$B( '.slider' ).transition( 'left:90%', 'left 0.6s ease', {onTransitionEnd: function (e) {
    console.log( e.type );//transitonend
}} );

//대상개체 Transition 중지후 리셋
$B( '.slider' ).transition( 'none' );

//대상개체 Transition 중지후 리셋, 스타일은 적용.
$B( '.slider' ).transition( 'left:200px', 'none' );
```