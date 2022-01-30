import { createAsyncThunk } from "@reduxjs/toolkit";

export const testAsyncThunk = createAsyncThunk(
    'test-state/fetchToDoById',
    async (id: number) => {
        const request = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await request.json();
        return data;
    }
)