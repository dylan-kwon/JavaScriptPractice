var string = "string String";

// 문자열
console.log("string.value = " + string);
console.log("string.value.concat = " + string.concat(" STRING"));    // 문자열 이어붙이기
console.log("string.charAt = " + string.charAt(3));                  // 3번째로 위치한 문자
console.log("string.indexOf = " + string.indexOf("g"));              // 처음으로 발견되는 "g"의 인덱스
console.log("string.lastIndexOf = " + string.lastIndexOf("g"));      // 마지막으로 발견되는 "g"의 인덱스
console.log("string.value.split = " + string.split(" "));            // 문자열을 " " 기준으로 나눔(리턴된 값은 String[])
console.log("string.value.slice = " + string.slice(0, 3));           // startIndex, endIndex
console.log("string.value.subStr = " + string.substr(1, 3));         // startIndex, count
console.log("string.value.subString = " + string.substring(0, 3));   // index1, index2 (작은 숫자가 startIndex, 큰 숫자가 endIndex)
console.log("string.value.toLowerCase = " + string.toLowerCase());   // 문자열을 소문자로 치환
console.log("string.value.toUpperCase = " + string.toUpperCase());   // 문자열을 대문자로 치환