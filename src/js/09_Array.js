let arrays1 = ['A', 'B', 'C'];
let arrays2 = ['D', 'E'];

// console.log("members[0] = " + members[0]);
// console.log("members[1] = " + members[1]);
// console.log("members[2] = " + members[2]);
// console.log("members[3] = " + members[3]);
// console.log("members[4] = " + members[4]);


let concatArrays = arrays1.concat(arrays2);                                             // 원본 배열의 값을 변경하지 않고 결합된 배열을 리턴한다.

console.log("concatArray.join\(\" \"\) = " + concatArrays.join(" "));                   // .join(param) join()의 인자값으로 배열의 값들을 하나의 문자열로 만든다.
console.log("concatArray.pop() = " + concatArrays.pop());                               // 마지막 원소를 제거한 뒤 리턴
console.log("concatArray.shift() = " + concatArrays.shift());                           // 첫번째 원소를 제거한 뒤 리턴
console.log("concatArray.push() = " + concatArrays.push("F"));                          // 마지막 인덱스에 원소 추가
console.log("concatArray.unshift() = " + concatArrays.unshift("A"));                    // 첫번째 인덱스에 원소 추가
console.log("concatArray.reverse() = " + concatArrays.reverse());                       // 배열의 순서를 뒤집는다.
console.log("concatArray.slice() = " + concatArrays.slice(1, 3));                       // startIndex 부터 endIndex 까지의 원소를 가진 배열을 리턴한다.
console.log("concatArray.sort() = " + concatArrays.sort());                             // 배열을 정렬한다.
console.log("concatArray.splice() = " + concatArrays.splice(0, 4, '1', '2', '3'));      // startIndex 부터 삭제한 후 값을 추가.
console.log("concatArray.toString() = " + concatArrays.toString());                     // 배열의 원소를 ,로 구분한 문자열을 리턴

console.log();

// 일반적인 for
for (let i = 0; i < concatArrays.length; i++) {
    console.log("concatArrays index" + i + " = " + concatArrays[i])
}

console.log();

// for in (꺼내는 값은
for (let index in concatArrays) {
    console.log("concatArrays index" + index + " = " + concatArrays[index]);
}

console.log();

// for-each: index, value, array를 꺼내며 반복
concatArrays.forEach((value, index) => {
    console.log("concatArrays index" + index + " = " + value);
});


