import { useReducer } from "react";

function Counter_reducer(state, action) {
  const { type, amount } = action;
  if (type === "increase")
    return { ...state, count: state.count + action.amount };
  else if (type === "decrease")
    return { ...state, count: state.count - action.amount };
  else if (action.type === "change_amount") return { ...state, amount };
  else return state;
}

function Counter() {
  const [state, dispatch] = useReducer(Counter_reducer, {
    count: 0,
    amount: 1,
  });
  const handleAmount = (e) =>
    dispatch({ type: "change_amount", amount: parseInt(e.target.value) });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>
        {"+" + state.amount}
      </button>
      <button onClick={() => dispatch({ type: "decrease" })}>
        {"-" + state.amount}
      </button>
      <input type="number" onChange={handleAmount} />
    </div>
  );
}

export default Counter;
