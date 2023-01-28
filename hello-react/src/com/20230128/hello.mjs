import { PI } from "./math.mjs";
import testSum from "./math.mjs";

//import 가져오기 export 내보내기
//import된 default는 변수명을 붙여 사용. export된 값은 import된 스코프에서 제어 불가능(상수 취급)
console.log(PI);
console.log(testSum(11, 32));
