/*
    var 키워드를 사용하지 않는 이유.
        1) 중복 선언이 허용된다 => 예기치 못 한 오류 발생(이미 사용중인 변수를 초기화하여 잘못된 값이 들어가거나)
        2) hoisting 호이스팅이 일어난다.(선언하기 전에 변수 사용 시 undefined)
        3) 함수 레벨 스코프(유효범위)만 지원한다. => 블록 레벨 스코프는 지원하지 않는다.
*/
//console.log(num); //undefined(호이스팅)

//var num = 20;

//console.log(lnum); //호이스팅은 발생하지만 TDZ때문에 오류 발생(컴파일 불가)

//let lnum = 20;

//console.log("lnum : " + lnum);

//컴파일 불가 오류 팝업 이미 있는 변수
//let lnum = 20;

//console.log("num : " + num);

//for (var num = 0; num < 10; num++) {}

//console.log("num 2 : " + num);

//for (let lnum = 0; lnum < 10; lnum++) {}

//console.log("lnum 2 : " + lnum);

/*
    화살표 함수(Arrow Function)
        - 화살표를 사용해서 함수를 간결하게 표현할 수 있다.
        - return 생략할 수 있다.
        - 함수 호이스팅이 일어나지 않는다.(변수 호이스팅으로 오류 남)
*/
// sum(); 함수 호이스팅이 일어나지 않기 때문에 오류 발생
//const sum = (a, b) => a + b; //코드 블록과 return을 생략하면 표현식의 결과가 return 된다.
//const getObj = (name, age) => ({ name: name, age: age }); // return 시 {} 는 코드 블록으로도 인지되기 때문에 객체로 인지시키기 위해 ()로 감싸준다.

/*
    매개변수 rest
        - 매개변수가 정해지지 않았을 때 사용.
        - 매개변수 앞의 ...을 붙이면 인자가 몇개든 배열로 생성해 모아준다.
        - 매개변수의 마지막에 위치해야 한다.
*/

function getTotal(...numbers) {
  // ...함수명   함수명 으로 배열 생성
  // Array.prototype.reduce : 누산 함수
  console.log(numbers);
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

getTotal(2, 4, 10, 15);

/*
    spread 스프레드(펼침) 연산자
        - 배열이나 객체를 펼치는 효과.
        - 배열이나 객체를 복사할 때 편하다.
*/
let arr = [1, 2, 3, 4, 5];

console.log(getTotal(...arr)); //getTotall(1,2,3,4,5)

let user = { name: "seok", age: 40 };
//let copy02 = { ...user };

//user 의 프로퍼티 값들을 같은 이름의 변수로 담기

/*
    비구조화 할당
        - 배열이나 객체의 값을 변수로 간단하게 할당할 수 있다.
        - 객체는 가져오고 싶은 프로퍼티명으로 가져온다.
            => 객체는 가져오고 싶은 프로퍼티명을 알아야 한다.
        - 배열은 인덱스의 순서대로 변수에 할당된다.
            => 변수명은 자유롭게 지을 수 있다.
*/

//let age = user.age;
//let name = user.name;

//let { age, name } = user;
let fruits = ["apple", "orange", "grape"];
let [aa, bb, cc] = fruits;
console.log("aabbcc : " + aa + " | " + bb + " | " + cc);

/*
    삼항 연산자
        - 조건식 ? 참일경우 : 거짓일 경우
        - 조건에 따라 다른 값을 할당해야할 때 유용하다.
*/
//user.name이 40보다 작으면 "red" 그게 아니면 "green"

const result = () => (user.age < 40 ? "red" : "green");

console.log("result : " + result());

/*
    단축 평가
    &&(and) : 앞의 값이 true일 때 뒤의 값 평가
    ||(or)  : 앞의 값이 false일 대 뒤의 값 평가
*/
let student = [
  { name: "alex", age: "28" },
  { name: "tachanka", age: 50 },
];

const setRS = (age) => age >= 30;

const print30 = (TF30arr) => setRS() && console.log("30세 이상입니다.");

print30();

/*
    null 병합 연산자
        - 
*/
0 ?? console.log("0 실행"); //0은 falsy한 값이지만 null이나 undefined가 아니기 때문에 0이 반환되어 뒷열 실행 X

/*
    옵셔널 체이닝
        - 객체의 프로퍼티를 참조할 때 참조하는 객체가 undefined인 경우 참조하지 않는다.
*/
let obj = {
  age: 31,
  height: 173,
};

console.log(obj.weight?.num.age.name);

/*
    템플릿 리터럴
        - 문자열 안에 JS 표현식(값)을 포함시킬 수 있다.
        - `(백틱) 안에서 다시 ${} 안에 JS 표현식(값)을 작성하면 된다.
*/

console.log(`STUDENT 1 : ${student[0].name} \nSTUDENT 2 : ${student[1].name}`);

/*
    배열의 고차함수
        - 배열을 순회하면서 각 요소에 대한 함수를 실행한다.
        - 배열의 요소의 개수만큼 반복하는 함수.
*/

let rottoNum = [12, 5, 1, 45, 21, 7];

//forEach : 배열의 각 요소를 인자로 전달받는 콜백함수를 실행.
//          => 콜백함수의 첫번째 매개변수에 각 요소가 전달.
//          => 콜백함수의 두번째 매개변수에 각 요소의 인덱스가 전달.

rottoNum.forEach((rtn, idx) => console.log("[ ", idx, " ", rtn, " ]"));

/*
    Array.prototype.filter() : 콜백함수의 return true인 요소만 모아서 새로운 배열로 반환.
        - return 값이 boolean 값이어야 한다.
*/
rottoNum.filter(function (num) {
  return num % 2 === 0;
});

//짝수만 반환
let evenrottos = rottoNum.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenrottos);

//홀수만 반환
let oddrottos = rottoNum.filter(function (num) {
  return num % 2 !== 0;
});

console.log(oddrottos);

/*
    Array.prototype.map() : 각 요소를 이용해서 새로운 값을 만들어내어 새로운 배열로 반환.
*/

//2배로 불리기
//let doubleNumbers = rottoNum.map(function (num) {
//  return num * 2;
//});

//console.log(doubleNumbers);

const doublechk = (num, idx) => (idx % 2 === 0 ? num * 2 : num);

//짝수번째만 두배 곱하고, 나머지는 그냥 반환(예제 만들어보기)
let expNumbers = rottoNum.map(function (num, idx) {
  return doublechk(num, idx);
});

console.log("expNumbers :" + expNumbers);

//삼항함수로 코드 직관성 강화
let resultArr = rottoNum.map((num, idx) => (idx % 2 !== 0 ? num * 2 : num));
console.log("resultArr : " + resultArr);

let resultexp = rottoNum.map((num) => {
  return num % 2 !== 0 && num % 3 !== 0 ? num : null;
});

console.log("resultexp" + resultexp);

// age 30 이상인 객체의 이름 값만 배열로 모으기
let studentList = [
  { name: "kim", age: 33, grade: "B+" },
  { name: "alex", age: 28, grade: "B" },
  { name: "tachanka", age: 50, grade: "A-" },
  { name: "kinda", age: 23, grade: "C+" },
];

//메서드 체이닝 => 메서드 반환값에 따라 연결되는 메서드를 연결실행
//아래 화살표함수는 원본배열(원본값)을 그대로 보존한다.
let filterList = studentList
  .filter((std) => std.age >= 30)
  .map((std) => std.name);

console.log("filterList : " + filterList);
