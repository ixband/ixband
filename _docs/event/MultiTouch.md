---
layout: docs
category: event
title: MultiTouch
tags: []
---

{% include docs-contents.html %}

### Example
```js
var multiTouch = new $B.event.MultiTouch( '#wrap > div.banner' )
        .addListener( 'multitouchstart', touchHandler )
        .addListener( 'multitouchmove', touchHandler )
        .addListener( 'multitouchend', touchHandler );

function touchHandler (e) {
    var pointer1 = e.pointers[0],
        pointer2 = e.pointers[1];

    switch ( e.type ) {
        case 'multitouchstart':
            //
            break;
        case 'multitouchmove':
            $( '.pointer1' ).css({
                'left': pointer1.clientX + 'px',
                'top': pointer1.clientY + 'px'
            });

            $( '.pointer2' ).css({
                'left': pointer2.clientX + 'px',
                'top': pointer2.clientY + 'px'
            });

            $( '.center' ).css({
                'left': e.clientX + 'px',
                'top': e.clientY + 'px',
                '-webkit-transform': 'rotate(' + e.angle + 'deg)'
            });

            if ( e.pan ) {
                //
            }

            break;
        case 'multitouchend':
            //
            break;
    }
}
```