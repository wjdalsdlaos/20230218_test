import { useRef, useState } from "react";
import { useTodoDispatch } from "../../custHook/todos";
//import { TodoDispastchContext } from "./Todos";

function TodoCreate() {
  const dispatch = useTodoDispatch(); //useContext(TodoDispastchContext);
  const [text, setText] = useState("");

  const nextId = useRef(4);

  const handleText = (e) => setText(e.target.value);

  //userCallback => 함수 재생성 방지
  //React.memo => 프로퍼티 변경 이외의 재랜더링 방지
  //      => ex) 하위 컴포넌트에 함수를 전달하고 있다면 함수의 불필요한 재생성을 막아주어야 react.memo가 제대로 작동
  const handleSubmit = //useCallback(
    (e) => {
      e.preventDefault();
      dispatch({ type: "create", id: nextId.current++, text });
      //text : text 같은 이름(key와 value가 같을 때) 생략 가능
      setText(() => "");
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleText} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoCreate;
