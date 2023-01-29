import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Hello from "./com/20230129/Hello";
import Counter from "./com/20230129/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hello title="첫번째 컴포넌트" color={"green"} backgroundColor={"#eee"} />
    <Hello title="두번째 컴포넌트" color={"red"} backgroundColor={"#FFFF"} />
    <Hello />
    <Counter></Counter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
