import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../../Interfaces/photo.interface";
import { getPhotoByIdThunk } from "../photo/thunks/getPhotoByIdThunk";
import { AsyncStatusEnum } from "../../enums/async-status.enum";
import { IPhotoReducer } from "./photo-reducer.interface";

const initialState: IPhotoReducer = {
  photo: {
    status: AsyncStatusEnum.idle,
    value: {} as IPhoto
  }
};

export const photoReducer = createSlice({
  name: "photo-reducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getPhotoByIdThunk.fulfilled, (state, action:PayloadAction<IPhoto>) => {
      state.photo.status = AsyncStatusEnum.completed;
      state.photo.value = action.payload;
    })
    .addCase(getPhotoByIdThunk.pending, (state) => {
      state.photo.status = AsyncStatusEnum.loading;
    })
    .addCase(getPhotoByIdThunk.rejected, (state, action) => {
      state.photo.value = {} as IPhoto;
      state.photo.status = AsyncStatusEnum.rejected;
    })
  },
});

export default photoReducer.reducer;
