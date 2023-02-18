import { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const [name, setName] = useState("");
  const [state, setState] = useState("로그아웃");
  const [users, setUsers] = useState({
    isLoading: true,
    data: null,
    Error: false,
  });

  const fetchData = async () => {
    const res = await fetch("http://localhost:9090/users");
    const data = await res.json();
    setUsers({
      isLoading: false,
      data,
      Error: false,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:9090/Users", {
        name,
        state,
      });
      await fetchData();
    } catch (e) {
      alert("ERROR! rs: " + e);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete("http://localhost:9090/Users/" + id);
      await fetchData();
    } catch (e) {
      setUsers({
        isLoading: false,
        data: users.data,
        Error: true,
      });
    }
  };

  const handleState = async (id, state) => {
    try {
      await axios.patch("http://localhost:9090/Users/" + id, {
        state,
      });
      await fetchData();
    } catch (e) {
      alert("ERROR! rs: " + e);
    }
  };
  const handleToggle = async (id, done) => {
    try {
      await axios.patch("http://localhost:9090/Users/" + id, {
        done,
      });
      await fetchData();
    } catch (e) {
      alert("ERROR! rs: " + e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (users.isLoading) return <div>로딩중...</div>;
  if (users.Error) return <div>에러 발생!</div>;
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <select onChange={(e) => setState(e.target.value)}>
          <option key="로그인" value="로그인">
            로그인
          </option>
          <option key="로그아웃" value="로그아웃">
            로그아웃
          </option>
          <option key="업무중" value="업무중">
            업무중
          </option>
          <option key="자리비움" value="자리비움">
            자리비움
          </option>
        </select>
        <button onClick={handleSubmit}>등록</button>
      </div>
      <div>
        <h2>유저 수 : {users.data.length}</h2>
      </div>
      <ul>
        {users.data.map((user) => (
          <li key={user.id}>
            <span
              style={{ textDecoration: user.done && "line-through" }}
              onClick={() => handleToggle(user.id, !user.done)}
            >
              {user.name}
            </span>
            <button onClick={() => handleRemove(user.id)}>삭제</button>
            <select
              onChange={(e) => handleState(user.id, e.target.value)}
              defaultValue={user.state}
            >
              <option key="로그인" value="로그인">
                로그인
              </option>
              <option key="로그아웃" value="로그아웃">
                로그아웃
              </option>
              <option key="업무중" value="업무중">
                업무중
              </option>
              <option key="자리비움" value="자리비움">
                자리비움
              </option>
            </select>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
