/**
 * 상속
 **/

function Person(name) {
    this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function () {
    return "My name is " + this.name
};

let _person = new Person("seokchan.kwon");
console.log(_person.introduce());

console.log("");


/**
 * Person을 상속받아 Programmer 생성
 */
function Programmer(name) {
    this.name = name;
    this.develop = function () {
        return "Hello World"
    };
}

Programmer.prototype = new Person();

let _programmer = new Programmer("seokchan.kwon", 10);

console.log(_programmer.introduce());
console.log(_programmer.develop());

console.log("");


/**
 * Person을 상속받아 Designer 생성
 */
function Designer(name) {
    this.name = name;
    this.design = function () {
        return "Design"
    }
}

Designer.prototype = new Person();
let _designer = new Designer("seokchan.kwon");

console.log(_designer.design());

