---
layout: docs
category: DOM
title: each
tags: []
---

{% include docs-contents.html %}

### Example
```js
//검색된 모든 개체에 background-color적용
$B( 'div.list' ).each( function ( el, idx, ary ) {
    $B( el ).css( 'background-color: #ffaaff' );
});

//검색된 모든 개체에서 짝수개체에 background-color적용하고 해당 개체 배열 반환.
var result = $B( '.list' ).each( function ( el, idx, ary ) {
    if ( idx%2 == 0 ) {
        $B( el ).css( 'background-color: #ffaaff' );
        return el;//return을 하지 않으면 result에도 결과가 반환되지 않는다.
    }
});
```