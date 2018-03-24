---
layout: docs
category: DOM
title: insertSWF
tags: []
---

{% include docs-contents.html %}

### Example
```js
var params = { myName: '홍길동', age: 24 };
$B( '#box' ).insertSWF( 'files/test.swf', '200', '100', params );

//
var attr = {
    id: 'mySWF',
    wmode: 'window',
    info: 'Adobe Flash Player가 필요한 콘텐츠 입니다.'
};

$B( '#box' ).insertSWF( 'files/test.swf', '400', '300', params, {onReady: function (e) {
    console.log( e.type ); //ready
    console.log( e.id );
    console.log( e.target );
    console.log( value );
}}, attr );
```