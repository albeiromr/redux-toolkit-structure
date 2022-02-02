import { createAsyncThunk } from "@reduxjs/toolkit";
import TodoService from "../../services/todo.service";

export const testAsyncThunk = createAsyncThunk(
  "test-state/fetchToDoById",
  async (id: number, { rejectWithValue }) => {
    const todo = await TodoService.getTodoById(id);
    if (todo) return todo;
    else return rejectWithValue(null);
  }
);
