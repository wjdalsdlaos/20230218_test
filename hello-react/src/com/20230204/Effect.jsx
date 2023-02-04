import { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [input, setInput] = useState();
  // useEffect() : 생명주기에 따라 실행될 사이드 이펙트(부수효과)를 콜백함수로 전달한다.
  // 디펜던시 배열이 비어있을 때(의존성 배열을 전달하지 않았을 때) : 렌더링 이후에 실행된다.
  useEffect(() => {
    console.log("렌더링");
  });

  //의존성 배열이 비었을 때 : 화면에 처음 나타날 때 한번만 실행된다.
  //  => 초기값 설정할 때, 라이브러리 연동, setTimeout 등
  useEffect(() => {
    console.log("마운트");

    //뒷정리(cleanup) 함수 : 라이브러리 연동 해제, 스케줄 취소 등
    return () => {
      console.log("언마운트");
    };
  }, []);
  console.log("render");

  //의존성 배열에 전달된 값이 변경되었을 때만 실행
  useEffect(() => {
    console.log(count);
    return () => console.log(count);
  }, [count]);

  return (
    <>
      <div>
        <h1>useEffect</h1>
        <h2>{"COUNT : " + count}</h2>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
      <button onClick={() => setShow(!show)}>
        {show ? "언마운트" : "마운트"}
      </button>
      <div>
        <h2>{input}</h2>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
    </>
  );
}

export default Effect;
