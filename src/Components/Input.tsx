import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectData } from "../Store/store";
import { change_text } from "../Store/dataSlice";

const Input: React.FC = () => {
  const { text, result } = useSelector(selectData);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col">
      <input
        className="focus:border-black shadow my-3 text-lg font-bold appearance-none mx-auto w-[300px] md:w-[500px] border-2 rounded-lg py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={text}
        onChange={(e) => dispatch(change_text(e.target.value))}
      />
      <input
        className="focus:border-black shadow my-3 text-lg font-bold appearance-none mx-auto w-[300px] md:w-[500px] border-2 rounded-lg py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={result}
      />
    </div>
  );
};

export default Input;
