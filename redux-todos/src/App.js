import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Todos from "./component/Todos";
import { todoReducer } from "./redux/todoSlice";
//import { todoReducer } from "./redux/todos";
//import { todoToolkitReducer } from "./redux/todos_toolkit";
//import { todoReducer } from "./redux/todos_toolkit";

const store = configureStore({
  //속성 이름이 상태값의 이름이 된다.
  reducer: {
    //    todos: todoReducer,
    todos: todoReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default App;
