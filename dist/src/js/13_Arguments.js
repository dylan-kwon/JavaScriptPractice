"use strict";

/**
 * 매개변수를 정의하지 않아도 값을 전달할 수 있다.
 * 전달된 값은 함수 내에서 arguments라는 유사 배열 객체에 인덱스로 접근할 수 있다.
 **/

function sum(a, b) {
    var _sum = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            _sum += value;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return _sum;
}

console.log("sum = " + sum(1, 2, 3, 4));
//# sourceMappingURL=13_Arguments.js.map