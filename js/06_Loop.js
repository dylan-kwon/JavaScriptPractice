// for
for (var i = 0; i < 5; i++) {
    if (i === 1) {
        continue;   // 반복문 스킵
    }
    if (i % 2 === 1) {
        console.log("for " + i + "회 반복");
    }
}

console.log();

// while
var whileLoop = 0;

while (whileLoop < 5) {
    if (whileLoop % 2 === 0) {
        console.log("while " + (whileLoop) + "회 반복");
    }
    if (whileLoop === 2) {
        break;  // 반복문 탈출
    }
    whileLoop++;
}