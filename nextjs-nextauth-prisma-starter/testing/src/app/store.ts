import {
  configureStore,
  ThunkAction,
  Action,
  createSlice,
} from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: 1,
  reducers: {
    increment: () => {},
    decrement: () => {},
  },
});

export const store = configureStore({
  reducer: testSlice.reducer,
});

export const testActions = testSlice.actions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
