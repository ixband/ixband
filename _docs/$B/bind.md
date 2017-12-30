---
category: $B
title: bind()
---

{{ page.title }}
---

> _**Type :** public method_  
> _**Support version :** 1.0_  
> _**Return :** Function_

<br/>
<p class="indent">
    호출될 때 그 this 키워드를 제공된 값으로 설정하고 새로운 함수가 호출될 때 제공되는 주어진 순서의 선행 인수가 있는 새로운 함수를 생성.<br>
    <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" target="_blank">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/bind 참조</a>
</p>
<p class="indent">
    ~IE7 Cross Browsing 처리
</p>


### Methods

**bind\(** _fnc, thisArg_ **\)** : `Function` `1.0~`
- **fnc** : `Function`
대상 함수
- **thisArg** : `Function`
바인딩된 함수가 호출될 때 대상 함수에 this 매개변수로서 전달되는 값


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