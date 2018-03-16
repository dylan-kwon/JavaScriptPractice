/**
 * -복제
 *  1. 원시 데이터에 해당한다.
 *
 *  let str = "string"
 *  let strCopy = str
 *
 *  strCopy = "stringCopy"
 *
 *  console.log(str = "string");
 *  console.log(strCopy = "stringCopy");
 *
 *  복제된 값을 변경해도 원본 데이터가 변경되지 않는다.
 *
 *
 * -참조
 *  1. 객체에 해당한다.
 *
 *  let a = {"id": 1};
 *  let b = a;
 *
 *  b.id = 2;
 *
 *  console.log("a.id = " + a.id)
 *
 * 참조 객체를 변경하면 원본 객체도 변경된다.
 *
 **/


/**
 * 원시 데이터 복사
 */
let str = "string";
let strCopy = str;

strCopy = "stringCopy";

console.log("str = " + str);
console.log("strCopy = " + strCopy);


console.log("");


/**
 * 객체 데이터 참조
 **/
let a = {
    'id': 1
};

let b = a;

b.id = 2;
console.log(a.id);
