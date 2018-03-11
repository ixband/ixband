---
layout: docs
category: net
title: ImageLoader
tags: []
---

{% include docs-contents.html %}

### Example
```js
var imgLoader = new $B.net.ImageLoader( null, 'images/thumb.jpg' )
        .addListener( 'complete', function (e) {
            $B( '#box > a' ).addChild( e.img );
        })
        .addListener( 'error', function (e) {
            //
        }).load();

//로드 취소
imgLoader.unload();
```