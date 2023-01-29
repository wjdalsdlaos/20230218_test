import { useState } from "react";

function InputText() {
  const [inputs, setInputs] = useState({
    name: "이름을 입력해주세요.",
    email: "이메일",
  });
  const { name, email } = inputs;

  const handleText = (event) => {
    const { name, value } = event.target;

    if (name === "") setInputs({ name: "입력해주세요." });
    else
      setInputs({
        //기존의 inputs 값을 펼치고, 일부분만 수정.
        //상태 업데이트를 할 때는 기존 객체를 변경하면 안 된다 => 불변성 지켜져야 함
        ...inputs,
        [event.target.name]: value,
      });
  };
  return (
    <div>
      <p>
        {name} [{email}]
      </p>
      <label>이름 : </label>
      <input type="text" onChange={handleText} name="name" />
      <br />
      <label>이메일 : </label>
      <input type="text" onChange={handleText} name="email" />
    </div>
  );
}
//이벤트가 발생한(e) 의 대상(target)을 찍어 value 가져오기
//onChange 는 이벤트를 자동으로 전달해준다.
export default InputText;
