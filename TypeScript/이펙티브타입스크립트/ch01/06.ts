const x = 2 + "3"; // type is string
const y = "2" + 3; // type is string

// 위 코드는 다른 언어였다면 런타임 오류이다.
// 하지만 타입스크립트의 타입체커는 정상적인 동작을 합니다.
// 타입스크립트는 정상적 동작에서도 오류를 판명한다.
