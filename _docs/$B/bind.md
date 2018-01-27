---
layout: docs
category: B
title: bind
tags: []
---

{% include docs.html %}

### Example
```js
var people = {
    age: 21,
    setEvents: function () {
        node.addEventListener( 'click', $B.bind(function (e) {
            console.log( this.age );//21
        }, this));
    }
};
```