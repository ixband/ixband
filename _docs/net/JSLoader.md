---
layout: docs
category: net
title: JSLoader
tags: []
---

{% include docs-contents.html %}

### Example
```js
var jsLoader = new $B.net.JSLoader( 'js/test.js' )
        .addListener( 'complete', function (e) {
            $B( '#box' ).addChild( e.script );
        }).load();

//로드 취소
jsLoader.unload();
```