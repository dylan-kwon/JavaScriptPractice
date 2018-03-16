'use strict';

/**
 * Prototype: 객체에 기본적으로 포함된 원형 정보를 가지고 있는 <객체> 이다.
 * Object 객체의 확장은 지양한다. (모든 객체에 영향을 주기 때문이다.)
 **/

function Ultra() {}

Ultra.prototype.ultraProp = true;

function Super() {}

Super.prototype = new Ultra();

function Sub() {}

Sub.prototype = new Super();

var _sub = new Sub();
console.log("_sub.ultraProp = " + _sub.ultraProp);

/**
 * 함수 확장
 */
var arr = ['seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba'];

Array.prototype.random = function () {
    var index = Math.floor(this.length * Math.random());
    return this[index];
};

console.log("random = " + arr.random(arr));

/**
 * ObjectTest 생성자
 */
function ObjectTest() {}

/**
 * Object 함수 정의
 */
ObjectTest.ObjectFunc = function () {
    console.log("ObjectTest.ObjectFunc()");
};

/**
 * Instance 함수 정의
 */
ObjectTest.prototype.prototypeFunc = function () {
    console.log("ObjectTest.prototype.prototypeFunc()");
};

ObjectTest.ObjectFunc(); // 오브젝트 함수 호출

var _objectTest = new ObjectTest(); // 인스턴스 생성
_objectTest.prototypeFunc(); // 인스턴스 함수 호출

/**
 * contain 함수 정의
 */
Object.prototype.contain = function (needle) {
    for (var name in this) {
        if (this[name] === needle) {
            return true;
        }
    }
    return false;
};

var array = [1, 2, 3, 4, 5];
var object = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5
};

console.log("array.contain(1) = " + array.contain(4));
console.log("object.contain(5) = " + object.contain(5));
//# sourceMappingURL=18_Prototype.js.map