import { createAsyncThunk } from "@reduxjs/toolkit";
import PhotoService from "../../services/photo.service";

export const getPhotoByIdThunk = createAsyncThunk(
    "test-slice/getPhotoById",
    async (id: number,  {rejectWithValue}) => {
        const photo = await PhotoService.getPhotoById(id);
        if(photo !== false) return photo;
        else return rejectWithValue(new Error());
    }
)