---
layout: docs
category: DOM
title: addEvent
tags: []
---

{% include docs-contents.html %}

### Example
```js
$B( '#box' ).addEvent( 'click', function (e) {
    console.log( e.type ); //click
    console.log( e.target ); //현재 이벤트가 발생한 대상
    console.log( e.currentTarget ); //이벤트가 등록된 대상
    console.log( e.relatedTarget );
    console.log( e.eventPhase ); 
    console.log( e.clientX, e.clientY ); //브라우저의 화면상 가장 위쪽 지점에서 부터 좌표. (스크롤된 부분 제외)
    console.log( e.pageX, e.pageY ); //clientX, clientY와 같지만, 문서가 스크롤되는 경우, 스크롤될 부분까지 포함한 좌표.(IE9~)
    console.log( e.offsetX, e.offsetY ); //이벤트가 발생한 개체 내부의 좌표. (파폭은 지원하지 않는다)
    console.log( e.screenX, e.screenY ); //Windows화면에서의 좌표
    console.log( e.shiftKey ); //shift키가 눌러져있는지 true, false
    console.log( e.charCode ); //keydown 같은 키보드 이벤트에서 제공, 키의 키값을 숫자로 반환.
    console.log( e.altKey ); //alt키가 눌러져있는지 true, false.
    console.log( e.ctrlKey ); //ctrl키가 눌러져있는지 true, false.
    console.log( e.delta ); //마우스휠이벤트에서 휠의 방향을 양수와 음수로 알수 있다.
    console.log( e.data); //"red box", 이벤트 등록시 설정한 데이타를 반환.
    e.stopPropagation(); //부모태그로의 이벤트 전파되는 것을 차단.
    e.preventDefault(); //이벤트가 브라우저에 전파되는 것을 차단.
}, 'red box' );


//※아래와 같이 event.pageX, event.offsetX 의 크로스브라우징 문제를 해결할 수 있다.
$B( '#box' ).addEvent( 'click', function (e) {
    var offsetX = $B.event.offsetX(e),
        offsetY = $B.event.offsetY(e);

    var pageX = $B.event.pageX(e),
        pageY = $B.event.pageY(e);
});
```