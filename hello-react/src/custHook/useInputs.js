import { useState } from "react";

export function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const handleForm = (event) => {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return [form, handleForm, handleReset];
}
