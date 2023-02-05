//import { createContext, useReducer } from "react";
//import Counter from "./Counter";
import TodoCreate from "./TodoCreate";
import TodoList from "./TotoList";

/*
// reducer 함수의 return값이 상태로 업데이트된다.
function todos_reducer(state, action) {
  //console.log(state, action);
  //return [...state, { id: 4, text: "테스트", done: false }];
  switch (action.type) {
    case "create":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

const initialState = [
  { id: 1, text: "useEffect 배우기", done: true },
  { id: 2, text: "useReducer 배우기", done: false },
  { id: 3, text: "useCallback 배우기", done: false },
];

export const TodoStateContext = createContext(null);
export const TodoDispastchContext = createContext(null);
*/
function Todos() {
  // useReducer(리듀서함수, 초기값) => 상태값, 디스패치 함수 반환
  //const [todos, dispatch] = useReducer(todos_reducer, initialState);

  return (
    <div>
      <TodoCreate />
      <TodoList />
      {/*<Counter />*/}
      <br />
    </div>
  );
}

export default Todos;
