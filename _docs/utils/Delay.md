---
layout: docs
category: utils
title: Delay
tags: []
---

{% include docs-contents.html %}

### Example
```js
var delay = new $B.utils.Delay();

//3초후에 실행되게 설정
var id1 = delay.start( 3000,  function (e) {
    console.log( e.data );//my_test1
}, 'my_test1' );

var id2 = delay.start( 5000,  function (e) {
    console.log( e.data );//my_test2
}, 'my_test2' );

//실행전에 삭제하기 위해서는
delay.clear();// delay에 등록된 모든 Delay 삭제
delay.clear( id2 );//  delay에 해당 id2로 등록된 Delay 만 삭제
```