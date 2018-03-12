/**
 *  int 1은 true와 같다.
 *  int 0은 false와 같다.
 *
 *  1 == true는 true지만, 1 === true는 false다. (0과 false도 같다)
 *
 *  null은 false와 같다.
 *  undefined는 false와 같다.
 *  NaN은 false와 같다.
 *  '' 혹은 "" (빈 문자열) 은 false와 같다.
 */

var intValue = 100;
var strValue = "string";

if (intValue !== 50) {
    console.log("intValue는 50이 아니다.");
}

if (intValue === 100) {
    console.log("intValue는 100이다.");

} else if (intValue === 200) {
    console.log("intValue는 200이다.");

} else {
    console.log("intValue는 100도 200도 아니다.");
}

if (intValue === 100 && strValue === "string") {
    console.log("intValue는 100이고 strValue는 string이다.");
}

if (intValue === 100 || strValue === "string") {
    console.log("intValue가 100이거나 strValue가 string이다.");
}

if (1 === true) {
    console.log("int 1 === true ? " + (1 === true))

} else if (1 == true) {
    console.log("int 1 === true ? " + (1 === false));
    console.log("int 1 == true ? " + (1 == true));
}

if (!null) {
    console.log("null은 false와 같다.");
}

if (!undefined) {
    console.log("undefined는 false와 같다.");
}

if (!NaN) {
    console.log("NaN은 false와 같다.");
}

if (!'') {
    console.log("공백은 false와 같다.");
}