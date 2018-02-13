---
layout: docs
category: event
title: Responsive
tags: []
---

{% include docs-contents.html %}

### Example
```js
var responsive = new $B.event.Responsive( 'width', [
        {
            type: 'S',
            min: 0,
            max: 800
        },
        { //801 ~ 1024
            type: 'M',
            min: 800,
            max: 1024
        },
        { //1025 ~ 20000
            type: 'L',
            min: 1024,
            max: 20000
        }
    ])
    .addListener( 'responsive', function (e) {
        console.log( e.responsiveType );//L
    })
    .addListener( 'resize', function (e) {
        console.log( e.responsiveType );//L
    });
```