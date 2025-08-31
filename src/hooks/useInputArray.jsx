import { useState, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    //if文で文字数制御を行う
    if (e.target.value.length >= 5) {
      alert("5文字以内にしてください");
      return;
    }
    //trim()で空白の入力制限をかける
    setText(e.target.value.trim());
  }, []);
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ文字は追加できません");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
