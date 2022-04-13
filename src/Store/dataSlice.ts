import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataState } from "../interface";

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const initialState: dataState = {
  text: "sad",
  result: reverseString("sad"),
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    change_text(state, action: PayloadAction<string>) {
      state.text = action.payload;
      state.result = reverseString(action.payload);
    },
  },
});

export const { change_text } = dataSlice.actions;

export default dataSlice;
