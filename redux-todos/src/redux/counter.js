//액션의 타입 정의
const plus = "plus";
const minus = "minus";

//액션 생성 함수
export const PLUS = (amount) => {
  return {
    type: plus,
    amount,
  };
};

export const MINUS = (amount) => {
  return {
    type: minus,
    amount,
  };
};

//상태값 0, 더하기, 빼기 리듀서 함수 작성해보기
export function counterReducer(state = 0, action) {
  switch (action.type) {
    case plus:
      return state + action.amount;
    case minus:
      return state - action.amount;
    default:
      return state;
  }
}
