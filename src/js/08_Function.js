/**
 * 매개변수로 함수를 사용할 수 있다.
 * 함수를 변수에 담을 수 있다.
 * 함수의 리턴 타입으로 함수를 사용할 수 있다.
 * 함수 안에 함수를 작성할 수 있다. (이 때 싱대적으로 바깥의 함수는 외부함수, 안쪽의 함수는 내부 함수가 된다.)
 *  1. 내부 함수에서 외부 함수의 지역 변수에 접근할 수 있다.
 *  2. 외부 함수의 실행이 끝나서 소멸된 후에도 내부 함수가 외부 함수의 변수에 접근할 수 있으며, 내부 함수가 소멸될 때까지 소멸되지 않는다. (이러한 매커니즘을 클로저(closure)라고 한다.
 * function.apply()와 function.call() 메소드가 있다.
 *  1. 공통점으론 첫번째 인자로 함수 내에서의 this를 변경한다. (함수 내부에서 this를 사용할 경우 매개변수의 객체를 가르킨다.)
 *  2. 두번째 인자로 arguments를 세팅한다. 이 부분에서 call은 배열을 전달하지만, apply는 그렇지 않다.
 *  3. 이 외 기능적 차이는 없다.
 */

function plus(a, b) {
    return a + b;
}

// 일급객체로써 변수에 담을 수 있다.
let minus = function (a, b) {
    return a - b;
};

console.log(plus(1, plus(5, 1)));   // 매개변수로 함수를 사용
console.log(minus(3, 1));           // 변수에 담은 함수를 사용


function functionParameter(func, a, b) {    // 매개변수로 함수를 받아서 실행된 결과를 리턴
    return func(a, b)
}


let plusValue = functionParameter(plus, 5, 8);      // 매개변수로 함수를 넘김
let minusValue = functionParameter(minus, 15, 4);   // 매개변수로 함수를 넘김

console.log("plusValue = " + plusValue);
console.log("minusValue = " + minusValue);

function returnPlusFunction() {     // 리턴 타입으로 함수를 넘김
    return plus
}

function returnMinusFunction() {    // 리턴 타입으로 함수를 넘김
    return minus
}

let resultPlusFunction = returnPlusFunction();      // 리턴 타입이 함수인 메소드를 실행해 변수에 저장
let resultMinusFunction = returnMinusFunction();    // 리턴 타입이 함수인 메소드를 실행해 변수에 저장

let resultPlusValue = resultPlusFunction(10, 5);    // 변수에 저장힌 함수를 실행
let resultMinusValue = resultMinusFunction(50, 4);  // 변수에 저장힌 함수를 실행

console.log("resultPlusValue = " + resultPlusValue);
console.log("resultMinusValue = " + resultMinusValue);


console.log();

function outter() {
    let value = "start outter function";
    let outterValue = "outterValue";

    console.log(value);

    inner();

    function inner() {
        let value = "start inner function";

        console.log(value);
        console.log("inner: " + outterValue);

        deepInner();

        function deepInner() {
            let value = "start deepInner function";
            console.log(value);
            console.log("deepInner: " + outterValue);
        }
    }
}

outter();


function closure() {
    let value = "start closureInner function";
    return function () {
        console.log(value);
    }
}

let closureInner = closure();
closureInner();

console.log("");

function movieFactory(title) {
    return {
        "getTitle": function () {
            return title;
        },
        "setTitle": function (_title) {
            if (typeof _title === 'string') {
                title = _title;
            } else {
                title = "error";
            }
        }
    }
}

let ghost = movieFactory("Ghost in the shell");
let matrix = movieFactory("Matrix");

console.log("ghost.title = " + ghost.getTitle());
console.log("matrix.title = " + matrix.getTitle());

ghost.setTitle("공각기동대");
matrix.setTitle("매트릭스");

console.log("ghost.title = " + ghost.getTitle());
console.log("matrix.title = " + matrix.getTitle());

console.log("");

let o1 = {
    "val1": 1,
    "val2": 2,
    "val3": 3
};

let o2 = {
    "val1": 10,
    "val2": 50,
    "val3": 100,
    "val4": 25
};

function sum() {
    let _sum = 0;
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            _sum += this[key];
        }
    }
    for (let value of arguments) {
        _sum += value;
    }
    return _sum;
}

console.log("sum result = " + sum.call(o1, 1, 2));
console.log("sum result = " + sum.apply(o2, [1, 2]));
