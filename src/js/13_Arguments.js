/**
 * 매개변수를 정의하지 않아도 값을 전달할 수 있다.
 * 전달된 값은 함수 내에서 arguments라는 유사 배열 객체에 인덱스로 접근할 수 있다.
 **/

function sum(a, b) {
    let _sum = 0;
    for (let value of arguments) {
        _sum += value;
    }
    return _sum;
}

console.log("sum = " + sum(1, 2, 3, 4));
