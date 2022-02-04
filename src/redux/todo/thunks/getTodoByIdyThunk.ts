import { createAsyncThunk } from "@reduxjs/toolkit";
import TodoService from "../../../services/todo.service";

export const getTodoByIdThunk = createAsyncThunk(
  "todo-reducer/fetchToDoById",
  async (id: number, { rejectWithValue }) => {
    const todo = await TodoService.getTodoById(id);
    if (todo) return todo;
    else return rejectWithValue(null);
  }
);
