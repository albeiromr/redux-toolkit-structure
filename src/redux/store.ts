import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appSlice from './slices/app.slice';

export const store = configureStore({
  reducer: {
    testState: appSlice,
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
