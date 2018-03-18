---
layout: docs
category: utils
title: cookie
tags: []
---

{% include docs-contents.html %}

### Example
```js
//setter
$B.utils.cookie( 'myNick', 'tomas14' );

//getter
var cookie = $B.utils.cookie( 'myNick' ); // tomas14

//cookie삭제 (시간을 "0"으로 설정하면 해당 쿠키값이 삭제된다.)
$B.utils.cookie( 'myNick', '', 0 );
```