---
layout: docs
category: DOM
title: removeEvent
tags: []
---

{% include docs-contents.html %}

### Example
```js
//대상 개체의 등록된 click이벤트 해제.
$B( '#box' ).removeEvent( 'click', mouseHandler );

//대상 개체의 등록된 모든 click이벤트 해제.
$B( '#box' ).removeEvent( 'click' );

//대상 개체의 등록된 모든 이벤트 해제.
$B( '#box' ).removeEvent();
```