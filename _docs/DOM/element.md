---
layout: docs
category: DOM
title: element
tags: []
---

{% include docs-contents.html %}

### Example
```js
//아래와 같이 주로 Method를 상속할때 해당 Method의 대상개체를 반환 받을때 사용한다.
$B.extend({
    testFc: function () {
        var el = this.element();// "#box > a"

        //다른 Methods를 실행한 다음 다시 this.element()를 호출하면 
        //대상이 바뀔수 있으니 항상 처음에 대상 개체를 구해놓고 시작하자.
    }
});

$B( '#box > a' ).testFc();
```