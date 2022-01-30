import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import testSlice from './slices/test.slice';

export const store = configureStore({
  reducer: {
    testState: testSlice,
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
