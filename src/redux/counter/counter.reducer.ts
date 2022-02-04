import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICounterReducer } from "./counter-reducer.interface";

const initialState: ICounterReducer = {
  counter: 2
};

export const counterReducer = createSlice({
  name: "counter-reducer",
  initialState,
  reducers: {
    addCounter: (state) => {
      state.counter += 1;
    },
    restCounter: (state, action:PayloadAction<number>) => {
      state.counter -= action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { addCounter, restCounter } = counterReducer.actions;

export default counterReducer.reducer;
