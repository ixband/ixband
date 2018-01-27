---
layout: docs
category: $B
title: Class
tags: []
---

{% include docs.html title=page.title category=page.category model=site.data.B.Class %}

### Example
```js
var FirstClass = $B.Class.extend({
    /**
     * Class 선언부 변수에는 instance를 대입할 경우 상속시 제대로 상속되지 않는다.
     * instance의 경우 methods 내부에서 선언하여 사용 하도록 한다. ex) this.age = 20;
     */
    firstName: '',
    
    /**
     * initialize는 Class의 기본 생성자 함수이다.
     * 함수명은 반듯이 initialize 여야한다.
     */
    initialize: function ( name ) {
        this.firstName = name;
    },
    
    getName: function () {
        return this.firstName;
    }
});
```

**Class 상속**

```js
var SecondClass = FirstClass.extend({
    secoundName: 'Mori',
    
    //@override
    getName: function () {
        return this.firstName + ' ' + this.secoundName;
    }
});

var first = new FirstClass( 'Jim' );
var secound = new SecondClass( 'Jim' );

console.log( first.getName() );//Jim
console.log( secound.getName() );//Jim Mori
```

**부모 Class methods 활용**

```js
var ThirdClass = FirstClass.extend({
    secoundName: 'Mori',
    
    //@override
    getName: function () {
        var name = FirstClass.prototype.getName.call( this );
        return name + ' (Junior)';
    }
});

var third = new ThirdClass( 'Jim' );
console.log( third.getName() );//Jim Mori (Junior)
```



<br/>
**※ console 에서 instance를 확인해 보면 아래와 같이 기본으로 제공하는 methods와 properties를 확인할 수 있다.**  


![ex]({{ site.baseurl }}/assets/images/class.png)