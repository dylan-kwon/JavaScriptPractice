// @flow

/**
 * ES6에 추가된 class keyword
 **/


/**
 * 부모 클래스
 */
class ParentClass {

    /**
     * 생성자
     */
    constructor(intValue) {
        this.intValue = intValue;
    }


    /**
     * 일반 메소드
     */
    method(): void {
        console.log("ParentClass.intValue = " + this.intValue)
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
     * 생성자 오버라이드
     */
    constructor(intValue, strValue) {
        super(intValue);
        this.strValue = strValue;
    }

    /**
     * 매소드 오버라이드
     */
    method() {
        super.method();
        console.log("ParentClass.strValue = " + this.strValue)
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