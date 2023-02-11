import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({
    isLoading: true,
    data: null,
    isError: false,
  });

  const fetchData = async () => {
    // await : Promise 가 resolve 되기 전까지 다음 코드가 실행되지 않는다.
    const res = await fetch("http://localhost:5000/todos"); //fetch()는 기본적으로 get요청 한다.
    const data = await res.json();
    setTodos({
      isLoading: false,
      data,
      isEroor: false,
    });
  };

  const handleSubmit = async () => {
    try {
      /*
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        body: JSON.stringify({
          text,
          done: false,
        }),
        headers: {
          "context-Type": "application/json",
        },
      });
        await res.json();
    */
      //등록 버튼 누르면 loagnind 중으로 바꾸기

      const res = await axios.post("http://localhost:5000/todos", {
        text,
        done: false,
      });
      console.log(res);
      await fetchData();
    } catch (e) {
      alert("ERROR! rs:" + e);
    }

    //setTodos([...todos, data]);
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete("http://localhost:5000/todos/" + id);
      await fetchData();
    } catch (e) {
      setTodos({
        isLoading: false,
        data: todos.data,
        isError: true,
      });
    }
  };

  const handleToggle = async (id, done) => {
    try {
      await axios.patch("http://localhost:5000/todos/" + id, {
        done,
      });
      await fetchData();
    } catch (e) {
      alert("ERROR! LOG : " + e);
    }
  };
  useEffect(() => {
    fetchData();
    //.then((res) => res.json())
    //.then((data) => console.log(data));
  }, []);
  if (todos.isLoading) return <div>로딩중...</div>;
  if (todos.isError) return <div>에러 발생!</div>;
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)}></input>
        <button onClick={handleSubmit}>등록</button>
      </div>
      <ul>
        {todos.data.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done && "line-through" }}
              onClick={() => handleToggle(todo.id, !todo.done)}
            >
              {todo.text}{" "}
            </span>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
