// @flow

/**
 * ES6에 추가된 class keyword
 **/


/**
 * 부모 클래스
 */
class ParentClass {

    /**
     * 전역변수
     */
    mIntValue: number;
    static TAG: string = "ParentClass";

    /**
     * 생성자
     */
    constructor(intValue: number) {
        this.mIntValue = intValue;
    }


    /**
     * 일반 메소드
     */
    method(): void {
        console.log("ParentClass.intValue = " + this.mIntValue)
    }


    /**
     * static 메소드
     */
    static staticMethod() {
        console.log("ParentClass.staticMethod")
    }

}


/**
 * 자식 클래스
 */
class ChildClass extends ParentClass {

    /**
     * 전역변수
     */
    mStrValue: string;
    static TAG: string = "ChildClass";

    /**
     * 생성자 오버라이드
     */
    constructor(intValue: number, strValue: string) {
        super(intValue);
        this.mStrValue = strValue;
    }

    /**
     * 매소드 오버라이드
     */
    method() {
        super.method();
        console.log("ParentClass.strValue = " + this.mStrValue)
    }

    static staticMethod() {
        console.log("ChildClass.staticMethod()")
    }

}

let childClassInstance = new ChildClass(1, "strValue");

console.log();

ParentClass.staticMethod();
ChildClass.staticMethod();

console.log();

childClassInstance.method();

console.log("parentTag = " + ParentClass.TAG);
console.log("childTag = " + ChildClass.TAG);