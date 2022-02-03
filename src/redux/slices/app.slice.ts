import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppInitialStateModel } from "../../models/app-initial-state.model";
import { TodoModel } from "../../models/todo.model";
import { PhotoModel } from "../../models/photo.model";
import { getPhotoByIdThunk } from "../thunks/getPhotoByIdThunk";
import { getTodoByIdThunk } from "../thunks/getTodoByIdyThunk";
import { AsyncStatusEnum } from "../../enums/async-status.enum";

const AppInitialState: AppInitialStateModel = {
  productsInCar: 2,
  todo: {
    status: AsyncStatusEnum.idle,
    value: new TodoModel()
  },
  photo: {
    status: AsyncStatusEnum.idle,
    value: new PhotoModel()
  }
};

export const appSlice = createSlice({
  name: "app-slice",
  initialState: AppInitialState,
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
    .addCase(getTodoByIdThunk.fulfilled, (state, action) => {
      state.todo.value = action.payload;
      state.todo.status = AsyncStatusEnum.completed;
    })
    .addCase(getTodoByIdThunk.pending, (state) => {
        state.todo.status = AsyncStatusEnum.loading;
    })
    .addCase(getTodoByIdThunk.rejected, (state, action) => {
        state.todo.value = new TodoModel();
        state.todo.status = AsyncStatusEnum.rejected;
    })
    .addCase(getPhotoByIdThunk.fulfilled, (state, action) => {
      state.photo.status = AsyncStatusEnum.completed;
      state.photo.value = action.payload;
    })
    .addCase(getPhotoByIdThunk.pending, (state) => {
      state.photo.status = AsyncStatusEnum.loading;
    })
    .addCase(getPhotoByIdThunk.rejected, (state, action) => {
      state.photo.value = new PhotoModel();
      state.photo.status = AsyncStatusEnum.rejected;
    })
  },
});

export const { addProduct, removeProduct } = appSlice.actions;

export default appSlice.reducer;
