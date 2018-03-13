function plus(a, b) {
    return a + b;
}

// 일급객체
let minusFunc = function intValue(a, b) {
    return a - b;
};

console.log(plus(1, minusFunc(5, 1)));

console.log(minusFunc(3, 1));

