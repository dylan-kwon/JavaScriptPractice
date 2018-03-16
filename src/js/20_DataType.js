/**
 * - 원시 데이터 타입 (객체가 아닌 데이터 타입)
 *  1. Number
 *  2. String
 *  3. Boolean
 *  4. null
 *  5. undefined
 *  특징: JavaScript는 임시로 객체를 만들과 사용이 끝나면 제거한다.
 *      "string".charAt(0)을 실행하면 new String("string").charAt(0);를 실행한 후 결과값 s만 저장한 뒤 String 객체를 제거한다.
 *      위의 원시 데이터 타입을 객체처럼 사용할 수 있지만 객체가 아닌 이유이다.
 *      이때 자동으로 만들어진 객체는 레퍼 객체(wrapper object)라고 한다.
 *
 *
 * - 참조 데이터 타입 (객체)
 *
 **/



let strValue = "string";

strValue.subValue = "subValue";                             // 여기서 subValue를 추가했지만. (1)

// let wrapperString =  new String("string");               (1)과 (2) 사이에 왼쪽의 3줄이 생략되었다.
// wrapperString.subValue = "subValue";                     마지막줄 = null은 정확하진 않다.
// wrapperString = null;                                    다만 랩퍼 객체가 삭제 된다는 것을 뜻함.

console.log("strValue.charAt(0) = " + strValue.subValue);   // 객체로써의 String은 제거되었기 때문에 undefined가 리턴된다. (2)

