import { useRef, useState } from "react";
const todoList = [
  { id: 1, name: "울랄라", text: "TEXT 1 입니다.", done: false },
];
function TodoList() {
  const [todos, setTodos] = useState(todoList);
  const [input, setInput] = useState();

  const nextId = useRef(2); // 렌더링과 별개로 기억되는 변수.
  const inputRef = useRef();
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  //input 상태값 + 업데이트 함수 만들기
  const handleSubmit = (e) => {
    e.preventDefault(); //태그의 기본 기능을 막는다.

    if (input === "") return; // input이 빈 문자일 때 함수 종료.
    //기존의 todos 배열을 새로운 배열에 복사하고, 마지막에 새로운 요소 추가.
    //      => 기존 배열과 다른 새로운 배열을 만들어서 불변성 유지.
    //setTodos([...todos,{id : 4, text: input, done : false}]);
    setTodos(todos.concat({ id: nextId.current++, text: input, done: false }));

    setInput("");
    inputRef.current.focus();
  };

  const handleRemove = (chkid) => {
    //선택한 id가 아닌 요소들만 모으기
    if (window.confirm("삭제하시겠습니까?"))
      // 확실히 삭제할 것인지
      setTodos(todos.filter((todo) => todo.id !== chkid));
  };

  const handleToggle = (id) => {
    {
      console.log("확인");
    }
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>이름 : </label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            value={input}
            ref={inputRef}
          />
          <button>등록</button>
        </form>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                texDecoration: todo.done && "line-through",
                userSelect: "none",
              }}
            >
              {todo.text}
              <button
                onClick={(e) => {
                  e.stopPropagation(); //이벤트 전파를 더 이상 하지 않는다.
                  handleRemove(todo.id);
                }}
              >
                삭제
              </button>
              <button onClick={() => handleToggle(todo.id)}>밑줄</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
