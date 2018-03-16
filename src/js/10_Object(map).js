let object = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
    "show": function () {
        for (let key in this) {
            if (key === "show") {
                continue;
            }
            console.log(key + " = " + this[key]);
        }
    }
};

// item 추가
object['key4'] = "value4";
object['key5'] = "value5";
object['key6'] = "value6";

// item 삭제
delete object.key6;

// console.log("key1 = " + object.key1);
// console.log("key2 = " + object.key2);
// console.log("key3 = " + object.key3);


// for (let key in object) {
//     console.log(key + " = " + object[key]);
// }

object.show();

// console.log("object keys = " + Object.keys(object));         // keys array
// console.log("object values = " + Object.values(object));     // values array