let city = "new york city";
console.log(city.toUppercase());

// city변수가 문자열이라고 명시하지 않아도 TS는 초기값으로 타입을 추론한다.
// 타입 추론은 TS에서 중요한 부분이다.

// 타입 시스템의 목표 중 하나는 런타임에 오류를 발생시킬 코드를 "미리" 찾아보는 것입니다.
// 타입스크립트가 "정적타입"이라고 소개하는 것도 이런 특징에서 말하는 것이다.

// 그러나 타입체커가 모든 오류를 찾아주진 않습니다.
