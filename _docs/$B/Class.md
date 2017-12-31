---
layout: docs
category: $B
title: Class
---

{{ page.title }}
---

> _**Type :** Object_  
> _**Support version :** 1.0_  
> _**Extend :** [CustomEvents]({{ site.baseurl }}/docs/event/CustomEvents/)_

<br/>
<p class="indent">
    Constructor 객체의 이벤트 관리 및 상속을 지원.
</p>
<p class="indent">
    CustomEvents를 상속하여 리스너 관리기능을 사용한다.<br/>
    ※주의 : instance 를 extend 하게되면 오류가 발생한다.
</p>




### Methods
<div class="methods">
**extend\(** _methods, className_ **\)** : `Class` `1.0~`
> Methods 상속

- **methods** : `Object`
methods
- **className** : `String`
Class 객체의 name, console에서 확일할수 있는 name, 설정하지 않으면 랜덤한 값이 들어간다.
</div>

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