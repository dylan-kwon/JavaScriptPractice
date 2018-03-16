const array = [1, 10, 2, 20, 3, 40, 6, 7, 5];

array.sort((a, b) => {
    return a - b;
});

console.log("array sort result = " + array);
