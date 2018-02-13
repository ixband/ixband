---
layout: docs
category: event
title: Swipe
tags: []
---

{% include docs-contents.html %}

### Example
```js
var swipe = new $B.event.Swipe( '#wrap > div.banner' )
        //Swipe가 어느방향축으로 발생할지를 알수 있다, 가장먼저 dispatch된다.
        .addListener( 'axis', function (e) {
            console.log( e.type );//axis
        })
        //Touch Move가 발생할때 호출된다.
        .addListener( 'move', function (e) {
            console.log( e.type );//move
            console.log( e.growX, e.growY );//현재 Touch가 움직인양
        })
        //swipe가 발생할때 호출된다.
        .addListener( 'swipe', function (e) {
            console.log( e.type );//move
            console.log( e.swipe );
        });
```