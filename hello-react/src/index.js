import React from "react";
import ReactDOM from "react-dom/client";
import Effect from "./com/20230204/Effect";
//import Inputs from "./com/20230129/Inputs";
//import TodoList from "./com/20230129/TodoList";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import Hello from "./com/20230129/Hello";
//import Counter from "./com/20230129/Counter";
//import InputText from "./com/20230129/InputText";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      //<TodoList></TodoList>
    }
    {
      //<Inputs></Inputs>
    }
    <Effect></Effect>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
