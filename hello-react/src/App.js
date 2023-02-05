//import logo from "./logo.svg";
import { createContext } from "react";
import Todos from "./com/20230204/Todos";
import { TodoProvider } from "./custHook/todos";
// 전역에 공유하고 싶은 값을 전달하는 context 생성
//  => 기본값은 Provider 밖에서 useContext 했을 때 반환되는 값
export const CountContext = createContext(0);

function App() {
  //const ttd = useTodoState();
  //console.log(ttd);
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
}

export default App;
