import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataState } from "../interface";

const initialState: dataState = {
  text: "",
  result: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    change_text(state, action: PayloadAction<string>) {},
    change_result(state, action: PayloadAction<string>) {},
  },
});

export default dataSlice;
