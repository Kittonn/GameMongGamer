import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataState } from "../interface";
import { change } from "../textFunction";

const initialState: dataState = {
  text: "เทพต้น",
  result: change("เทพต้น"),
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    change_text(state, action: PayloadAction<string>) {
      state.text = action.payload;
      state.result = change(action.payload);
    },
  },
});

export const { change_text } = dataSlice.actions;

export default dataSlice;
