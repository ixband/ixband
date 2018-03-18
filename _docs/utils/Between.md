---
layout: docs
category: utils
title: Between
tags: []
---

{% include docs-contents.html %}

### Example
```js
var positions = [{min:100, max:300, data:'test1'}, {min:310, max:500}];

var between = new $B.utils.Between( positions )
        .addListener( 'activate', betweenHandler )
        .addListener( 'between', betweenHandler )
        .addListener( 'deactivate', betweenHandler )
        .trigger( 120 );

function betweenHandler (e) {
    console.log( e.data );//test1
}
```