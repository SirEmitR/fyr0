import { useState } from "react";

export default function useToggle(initialValue = false, callback = () => {}) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prev) => !prev);
    callback(!value);
  };

  const setTrue = () => {
    setValue(true);
    callback(true);
  }
  const setFalse = () => {
    setValue(false);
    callback(false);
  }

  return [value, toggle, setTrue, setFalse];
}