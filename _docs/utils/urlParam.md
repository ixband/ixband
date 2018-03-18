---
layout: docs
category: utils
title: urlParam
tags: []
---

{% include docs-contents.html %}

### Example
```js
//url : http://test.com/test.html?page=2

$B.utils.urlParam( 'page' );//2

$B.utils.urlParam({test:'aaa', aaa:10});//?page=2f&test=aaa&aaa=10
```