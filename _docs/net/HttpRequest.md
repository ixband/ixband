---
layout: docs
category: net
title: HttpRequest
tags: []
---

{% include docs-contents.html %}

### Example
```js
var ajax = new $B.net.HttpRequest( 'data.php' )
        .addListener( 'complete', function (e) {
            //
        })
        .addListener( 'error', function (e) {
            //
        }).load( 'page=5&id=105' );
```

# JS 로드
```js
var ajax = new $B.net.HttpRequest( 'js/test.js' )
        .addListener( 'complete', function (e) {
            jsNode.text = e.text;
        }).load();
```

# progress 이벤트 적용
```js
var ajax = new $B.net.HttpRequest( 'js/test.js' );

//progress 이벤트등록
$B( ajax.xhr.upload ).addEvent( 'progress', progressHandler );
$B( ajax.xhr ).addEvent( 'progress', progressHandler );

ajax.load();

function progressHandler (e) {
    console.log( e.total );//파일전체크기
    console.log( e.loaded );//다운받은 파일크기
};
```

progress 이벤트는 upload, downloa시에 지원하며, XMLHttpRequest Level2 를 지원하는 브라우저에서만 지원한다.<br>
※ XMLHttpRequest Level2 를 지원하는 브라우저정보 (<a href="http://caniuse.com/#feat=xhr2" target="_blank">http://caniuse.com/#feat=xhr2</a>)