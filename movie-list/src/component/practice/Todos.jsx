import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    // await : Promise 가 resolve 되기 전까지 다음 코드가 실행되지 않는다.
    const res = await fetch("http://localhost:5000/todos"); //fetch()는 기본적으로 get요청 한다.
    const data = await res.json();
    setTodos(data);
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
      const res = await axios.post("http://localhost:5000/todos", {
        text,
        done: false,
      });
      await fetchData();
    } catch (e) {
      alert("ERROR! rs:" + e);
    }

    //setTodos([...todos, data]);
  };

  const handleRemove = async (id) => {
    const res = await axios.delete("http://localhost:5000/todos/" + id);
    await fetchData();
  };
  useEffect(() => {
    fetchData();
    //.then((res) => res.json())
    //.then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)}></input>
        <button onClick={handleSubmit}>등록</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
