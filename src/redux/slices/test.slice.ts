import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestStateInterface } from "../interfaces/test-state.interface";
import { getPhotoByIdThunk } from "../thunks/getPhotoByIdThunk";
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
  photo: {
    status: "loading",
    value: {
      albumId: null,
      id: null,
      title: "",
      url: "",
      thumbnailUrl: ""
    }
  }
};

export const testSlice = createSlice({
  name: "test-slice",
  initialState: initialState,
  reducers: {
    addProduct: (state) => {
      state.productsInCar += 1;
    },
    removeProduct: (state, action:PayloadAction<number>) => {
      state.productsInCar -= action.payload;
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
    .addCase(testAsyncThunk.rejected, (state, action) => {
        //state.todo.value = {};
        state.todo.status = "rejected";
    })
    .addCase(getPhotoByIdThunk.fulfilled, (state, action) => {
      state.photo.status = "completed";
      state.photo.value = action.payload;
    })
    .addCase(getPhotoByIdThunk.pending, (state) => {
      state.photo.status = "loading";
    })
    .addCase(getPhotoByIdThunk.rejected, (state, action) => {
      //state.todo.value = {};
      state.photo.status = "rejected";
    })
  },
});

export const { addProduct, removeProduct } = testSlice.actions;

export default testSlice.reducer;
