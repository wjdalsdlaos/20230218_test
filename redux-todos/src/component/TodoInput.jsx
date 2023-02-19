import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";

//import { createTodo } from "../redux/todos_toolkit";

function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(text));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoInput;
