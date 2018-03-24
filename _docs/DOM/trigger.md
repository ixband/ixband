---
layout: docs
category: DOM
title: trigger
tags: []
---

{% include docs-contents.html %}

### Example
```js
$B( '#box' ).addEvent( 'click', function (e) {
    console.log( e.data ); //test-name
});

$B( '#box' ).trigger( 'click', 'test-name' );

//Custom Event
$B( '#box' ).addEvent( 'myEvent', function (e) {
    console.log( e.data ); //my-name
});

$B( '#box' ).trigger( 'myEvent', 'my-name' );
```