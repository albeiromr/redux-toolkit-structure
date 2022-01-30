import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestStateInterface } from "../interfaces/test-state.interface";
import { testAsyncThunk } from "../thunks/test-async.thunk";

const initialState: TestStateInterface = {
  productsInCar: 2,
  todo: {
    status: "loading",
    value: {
      userId: 0,
      id: 0,
      title: "",
      completed: false,
    },
  },
};

export const testSlice = createSlice({
  name: "test-slice",
  initialState: initialState,
  reducers: {
    addProduct: (state) => {
      state.productsInCar += 1;
    },
    removeProduct: (state) => {
      state.productsInCar -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(testAsyncThunk.fulfilled, (state, action) => {
      state.todo.value = action.payload;
      state.todo.status = "completed";
    })
    .addCase(testAsyncThunk.pending, (state) => {
        state.todo.status = "loading";
    })
    .addCase(testAsyncThunk.rejected, (state) => {
        state.todo.status = "rejected";
      });
  },
});

export const { addProduct, removeProduct } = testSlice.actions;

export default testSlice.reducer;