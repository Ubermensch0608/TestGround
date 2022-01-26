import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const calcInitialState = { calcNumber: 0 };

const calcSlice = createSlice({
  name: "calculator",
  initialState: calcInitialState,
  reducers: {
    calc(state, action) {
      state.calcNumber = state.calcNumber + action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    calc: calcSlice.reducer
  }
});

export const calcAtions = calcSlice.actions;

export default store;
