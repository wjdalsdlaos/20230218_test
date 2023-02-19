import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const getTodos = (state) => state.todos;

//첫번째 인자로 전달받은 상태가 변하지 않으면 리렌더링이 일어나도 계산x
//useMemo와 비슷함
const getUndoneCount = createSelector(getTodos, (state) => {
  return state.filter((todo) => !todo.done).length;
});

function TodoHeader() {
  const count = useSelector(getUndoneCount);
  return (
    <div>
      <h1>해야할 일</h1>
      <h3>남은 해야할 일 : {count}</h3>
    </div>
  );
}

export default TodoHeader;
