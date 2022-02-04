import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import photoReducer from './photo/photo.reducer';
import appReducer from './counter/counter.reducer';
import todoReducer from './todo/todo.reducer';
import counterReducer from './counter/counter.reducer';

export const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    todoReducer: todoReducer,
    photoReducer: photoReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
