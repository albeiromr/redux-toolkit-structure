import { createAsyncThunk } from "@reduxjs/toolkit";
import PhotoService from "../../services/photo.service";

export const getPhotoByIdThunk = createAsyncThunk(
  "app-slice/getPhotoById",
  async (id: number, { rejectWithValue }) => {
    const photo = await PhotoService.getPhotoById(id);
    if (photo) return photo;
    else return rejectWithValue(null);
  }
);