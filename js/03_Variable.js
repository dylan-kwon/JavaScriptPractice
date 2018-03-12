/**
 * 특이사항
 * 1. 변수명의 사직으로 $, _를 포함할 수 있다.
 * 2. undefined: 변수가 정의되었지만 아무 값도 할당받지 않은 상태
 * 3. null: null을 명시적으로 할당받은 상태. (null은 객체로 취급된다.)
 *
 * var: 일반적인 변수, 재선언과 재할당 모두 가능
 * let: 변수지만 값은 재할당 가능 (Java: public static int i = 10)
 * const: 재선언과 재할당 모두 불가능 (Java: public static final int i = 10)
 **/

var undefinedValue;
let intValue = 1;
let strValue = "string";
let nullValue = null;
const boolValue = true;

console.log("print undefinedValue = " + undefinedValue);
console.log("print nullValue = " + nullValue);
console.log("print intValue = " + intValue);
console.log("print strValue = " + strValue);
console.log("print boolValueValue = " + boolValue);


