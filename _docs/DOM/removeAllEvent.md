---
layout: docs
category: DOM
title: removeAllEvent
tags: []
---

{% include docs-contents.html %}

### Example
```js
//대상 개체의 등록된 모든 이벤트 해제.
$B( '#box' ).removeAllEvent();

//대상 개체와 자식요소의 등록된 모든 이벤트 해제.
$B( '#box' ).removeAllEvent( true );
```