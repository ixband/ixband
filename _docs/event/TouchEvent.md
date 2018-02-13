---
layout: docs
category: event
title: TouchEvent
tags: []
---

{% include docs-contents.html %}

### Example
```js
var touchEvent = new $B.event.TouchEvent( '#wrap > div.banner' )
   .addListener( 'touchstart', function (e) {
      console.log( e.type );
      console.log( e.touches ); //배열로 전달되는 터치 객체
         //touches[0] = {target, pageX, pageY, clientX, clientY, screenX, screenY, pointerType}
         //pointerType = 'touch', 'pen', 'mouse'
         //IE이외의 브라우저에서는 'touch'만 반환

      e.stopPropagation(); //부모태그로의 이벤트 전파되는 것을 차단.
      e.preventDefault(); //이벤트가 브라우저에 전파되는 것을 차단.
   });
```