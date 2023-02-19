import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";
//import produce from "immer";

export const createTodo = createAction("todos/create", function (text) {
  return {
    payload: {
      id: nanoid(),
      text,
      done: false,
    },
  };
});

export const removeTodo = createAction("todos/remove");

export const toggleTodo = createAction("todos/togle");

export const todoReducer = createReducer([], (builder) => {
  builder
    .addCase(createTodo, (state, action) => {
      //immer가 자동으로 적용되어 있다.
      state.push(action.payload);
    })
    .addCase(removeTodo, (state, action) => {
      //해당 아이디의 todo의 index갑 ㅅ구해서 splice로 원본에서 추출
      //const index = state.findIndex((todo)=> todo.id===action.payload);
      //state.splice(index,1)   //index번호부터 1개;
      return state.filter((todo) => todo.id !== action.payload);
    })
    .addCase(toggleTodo, (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    });
});

// createAction : 액션의 타입과 액션 생성 함수를 동시에 만든다.
//  => 함수를 실행하면 인자는 payload라는 값으로, 타입은 자동으로 지정된다.
//  => 첫번째 인자는 고유한 키값(타입 값)
//  => 두번째 전달받은 payload값을 통해 새로운 객체를 생성할 수 있는 prepare함수 전달.
/* export function todoToolkitReducer(state = [], action) {
  switch (action.type) {
    case createTodo.type:
      //immer에서 제공하는 produce 함수를 사용하면 불변성을 신경쓰지 않아도 된다.
      return produce(state, (draft) => {
        draft.push(action.payload);
      });
    case removeTodo.type:
      //객체 하나만 지우는 경우 원본을 변경하는 방식보다 filter가 간단하다.
      return state.filter((todo) => todo.id !== action.payload);

    case toggleTodo.type:
      return produce(state, (draft) => {
        //불변성 신경 쓸 필요 없으므로 찾아서 done 직접변경
        const todo = draft.find((todo) => todo.id === action.payload);
        todo.done = !todo.done;
      });
    default:
      return state;
  }
}
*/
