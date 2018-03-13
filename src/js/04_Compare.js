/**
 * =: 다른 프로그래밍 언어와 같이 우항을 좌항으로 대입하는 대입 연산자다.
 * ==: 단순히 값을 비교하는 동등 연산자다. (Java의 .equals()나 Python의 ==와 같다. 또한 1(int)와 "1"(str)을 비교한 결과는 true다.)
 * ===: == 와 마찬가지로 값을 비교하는 연산자이나, 변수 타입 및 여려가지를 고려한 연산자로 위의 1 == "1"의 결과인 true와 달리 false를 리턴한다.
 *
 * !=: ==의 부정
 * !==: ===의 부정
 * >, >=, <, <= 등 연산자 설명 생략.
 *
 * NaN: 0/0같은 잘못된 연산의 결과로 만들어지는 특수한 데이터 형인데, 숫자가 아니라는 뜻이다. (또한 조건문에서 한쪽이 NaN이면 결과는 무조건 false다.)
 *      ex) NaN == NaN = false
 *      ex) 10 + "1s"
 */

var unDefinedValue;
var intValue = 1;
var strValue = "1";


console.log("1 == \"1\" = " + (intValue == strValue));
console.log("1 === \"1\" = " + (intValue === "1"));

console.log("unDefindeValue == null = " + (unDefinedValue == null));       // 빈 값이라는 점에서는 서로 동등하기에 true
console.log("unDefindeValue === null = " + (unDefinedValue === null));     // 같은 빈 값이라도 undefined와 null은 서로 다른 객체(undefined는 객체가 아님)기 때문에 false