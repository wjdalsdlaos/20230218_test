import { useInputs } from "../../custHook/useInputs.js";

function Inputs() {
  const [inputs, handleInputs, reset] = useInputs({
    name: "",
    email: "",
  });
  return (
    <div>
      <p>
        {inputs.name}({inputs.email})
      </p>
      <input type="text" onChange={handleInputs} name="name" />
      <input type="text" onChange={handleInputs} name="email" />
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default Inputs;
