import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../Store/store";

const Input: React.FC = () => {
  const { text, result } = useSelector(selectData);
  return (
    <div>
      <input type="text" value={text} />
      <input type="text" value={result} />
    </div>
  );
};

export default Input;
