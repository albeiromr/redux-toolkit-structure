import { createAsyncThunk } from "@reduxjs/toolkit";
import PhotoService from "../../../services/photo.service";

export const getPhotoByIdThunk = createAsyncThunk(
  "photo-reducer/getPhotoById",
  async (id: number, { rejectWithValue }) => {
    const photo = await PhotoService.getPhotoById(id);
    if (photo) return photo;
    else return rejectWithValue(null);
  }
);