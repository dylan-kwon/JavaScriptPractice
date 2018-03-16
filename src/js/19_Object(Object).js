/**
 * 모든 객체는 Object를 상속받는다.
 * Object의 property를 추가하면, 모든 객체에서 해당 property를 사용할 수 있다. (ㄷㄷ)
 **/

Object.prototype.print = function () {
    console.log(this.toString());
};

[1, 2, 3].print();