"use strict";

/**
 * JavaScript의 모든 변수와 함수는 전역 객체에 포함된다.
 * 기본적인 전역 객체명은 window지만 node.js는 global이라 한다.
 * {아래 예제는 동작하지 않으니, 이론만 알아두자} (왜 안되는지는 모르겠음)
 **/

var object = {
    "print": function print(_print) {
        console.log(_print);
    }
};

object.print("r");
// window.object.print("r");
//# sourceMappingURL=15_GlobalObject.js.map