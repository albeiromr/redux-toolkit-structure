import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../Interfaces/todo.interface";
import { getTodoByIdThunk } from "./thunks/getTodoByIdyThunk";
import { AsyncStatusEnum } from "../../enums/async-status.enum";
import { ITodoReducer } from "./todo-reducer.interface";

const initialState: ITodoReducer = {
  todo: {
    status: AsyncStatusEnum.idle,
    value: {} as ITodo
  }
};

export const todoReducer = createSlice({
  name: "todo-reducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getTodoByIdThunk.fulfilled, (state, action:PayloadAction<ITodo>) => {
        state.todo.value = action.payload;
        state.todo.status = AsyncStatusEnum.completed;
    })
    .addCase(getTodoByIdThunk.pending, (state) => {
        state.todo.status = AsyncStatusEnum.loading;
    })
    .addCase(getTodoByIdThunk.rejected, (state, action) => {
        state.todo.value = {} as ITodo;
        state.todo.status = AsyncStatusEnum.rejected;
    })
  }
});

export default todoReducer.reducer;
