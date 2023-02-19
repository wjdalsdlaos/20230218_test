import { useDispatch, useSelector } from "react-redux";
import { PLUS } from "../redux/counter";

function Counter() {
  // 관리되고 있는 여러 상태 중에 선택한다.
  //  => 상태값을 선택하는 콜백함수를 전달한다.
  //  => selector 함수로는 순수함수가 전달되어야 한다.
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch(); //dispatch함수 받아오기
  const amount = 10;

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(PLUS(amount))}>{amount}</button>
        <button onClick={() => dispatch({ type: "minus", amount })}>
          {amount}
        </button>
      </div>
    </div>
  );
}

export default Counter;
