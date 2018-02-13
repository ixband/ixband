---
layout: docs
category: event
title: Rotation
tags: []
---

{% include docs-contents.html %}

### Example
```js
var _rotation = new $B.event.Rotation( '.area', {
            datumPoint: ['50%', '50%'],
            radius: [200, 200],
            baseAngle: 90
        })
        .addListener( 'rotationstart', rotationHandler )
        .addListener( 'rotationmove', rotationHandler )
        .addListener( 'rotationend', rotationHandler )
        .addListener( 'rotation', rotationHandler )
        .addListener( 'resize', rotationHandler )
        .min( -465 )
        .max( 465 )
        .rotation( 0 );


$( window ).on( 'resize', function (e) {
    //대상 사이즈 변경시 포지션 재설정
    _rotation.resize();
});


function rotationHandler (e) {
    switch ( e.type ) {
        case 'rotationstart':
        case 'resize':
        case 'rotation':
        case 'rotationmove':
            $( '.point' ).css({
                'left': e.pointX + 'px',
                'top': e.pointY + 'px'
            });
            break;
        case 'rotationend':
        //
        break;
    }
}
```