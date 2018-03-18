---
layout: docs
category: utils
title: TweenCSS
tags: []
---

{% include docs-contents.html %}

### Example
```js
var tweener = new $B.utils.TweenCSS( '#box', 0.3, 'left: 0px', 'left: 200px' )
        .addListener( 'tween', function (e) {
            //
        })
        .addListener( 'complete', function (e) {
            //
        })
        .addListener( 'seekcomplete', function (e) {
            //
        }).start();

//TweenCSS 정지
tweener.stop();

//Tween시킬 CSS속성 추가
tweener.addProp( 'color: #ff00ff; left:20px', 'color: #004400; left:100px' ).start();

//TweenCSS에 등록된 CSS속성 삭제
tweener.removeProp( 'color', 'left' );
```