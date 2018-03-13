let value = 10;

switch (value % 2) {
    case 0:
        console.log(value + "는 짝수다.");
        break;

    case 1:
        console.log(value + "는 홀수다.");
        break;

    default:
        console.log(value + "는 홀수도 짝수도 아니다.");
        break;
}