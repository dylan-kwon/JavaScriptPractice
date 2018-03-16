/**
 * 함수 내에서 함수 호출 맥락(context)을 의미한다.
 * 주의할 점은 함수를 어떻게 호출하느냐에 따라서 this가 가르키는 대상이 달라진다는 점이다.
 * 객체와 함수의 관계가 느슨한 자바 스크립트에서 this는 이 둘을 연결시켜주는 실질적은 연결점의 역할을 한다.
 * 함수가 포함된 상위(부모) 객체의 인스턴스와 같다.
 **/

let value = 10;

function getThis() {
    return this;
}

function thisTest(thisKeyword) {
    console.log("global === this : " + (global === this));
    console.log("thisKeyword === this : " + (thisKeyword === this));
}

console.log("");

/**
 * 기본적인 방법으로 this 호출 시, 상위 Object의 인스턴스르 가르킨다.
 * Object에 포함되지 않은 함수의 경우 global(혹은 window)과 같다.
 */
thisTest(getThis());


let object1 = {
    "func": function () {
        console.log("o === this : " + (object1 === getThis()))
    }
};

object1.func();

console.log("");

/**
 * 생성자로 사용된 함수의 this는 생성된 객체를 가르킨다.
 */

let funcThis = null;

function func() {
    funcThis = this;
}

let object2 = func();
if (funcThis === global) {
    console.log("object2.funcThis === global");
}

let object3 = new func();
if (funcThis === global) {
    console.log("object3.funcThis === global");
} else if (funcThis === object3) {
    console.log("object3.funcThis === object3");
}

console.log("");

/**
 *  함수는 여러 객체와 대등한 관계에서 여러 객체에서 사용될 수 있다.
 *  메소드가 객체에 포함되어 있는 점을 생각했을 때, 좀 더 유연하다 할 수 있다.
 **/
let o = {};
let p = {};

function func2() {
    switch (this) {
        case o:
            console.log("func2.switch: o");
            break;

        case p:
            console.log("func2.switch: p");
            break;

        case global:
            console.log("func2.switch: global");
            break;
    }
}

func2.apply();
func2.apply(o);
func2.apply(p);
func2.apply(global);