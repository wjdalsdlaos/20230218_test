import { useMemo } from "react";
import React from "react";

function countUndoneTodo(todos) {
  return todos.filter((todo) => !todo.done).length;
}

function TotoList({ todos, dispatch }) {
  //의존성 배열이 있는 값이 변했을 대만 다시 연산(렌더링) 한다. usememo
  const underCount = useMemo(() => {
    return countUndoneTodo(todos);
  }, [todos]);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} dispatch={dispatch} />
        ))}
      </ul>
      <h2>하지 못 한 업무 개수 : {underCount}</h2>
    </div>
  );
}

function TodoItem({ todo, dispatch }) {
  const handleRemove = (id) => {
    if (window.confirm("삭제하시겠습니까?"))
      dispatch({ type: "remove", id: id });
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.done && "line-through" }}
        onClick={() => dispatch({ type: "toggle", id: todo.id })}
      >
        {todo.text}
      </span>
      <button onClick={() => handleRemove(todo.id)}>삭제</button>
    </li>
  );
}
//React.memo : 컴포넌트가 받는 props가 변경되었을 때만 렌더링이 다시 일어난다.
export default React.memo(TotoList);
