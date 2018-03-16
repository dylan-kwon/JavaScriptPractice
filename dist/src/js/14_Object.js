"use strict";

/**
 * 10_Object에서 사용된 방법으로 정의한 객체.
 */
// let person = {
//
//     "setName": function (_name) {
//         this.name = _name;
//     },
//
//     "getName": function () {
//         return this.name;
//     },
//
//     "introduce": function () {
//         console.log("My name is " + this.getName());
//     }
// };
//
// person.setName("seokchan.kwon");
// person.introduce();


/**
 * 생성자를 사용한 객체 생성
 */
function Person(name) {
  this.name = name;
  this.introduce = function () {
    return "My name is " + this.name;
  };
}

var person = new Person("seokchan.kwon");
console.log("person = " + person.introduce());
//# sourceMappingURL=14_Object.js.map