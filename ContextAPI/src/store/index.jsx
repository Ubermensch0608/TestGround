import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const todoInitialState = { todoList: "", todoLists: [] };
const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    todo(state, action) {
      state.todoList = action.payload;
    },
    todos(state, action) {
      state.todoLists = [action.payload, ...state.todoLists];
    }
  }
});

const store = configureStore({
  reducer: {
    calc: calcSlice.reducer,
    todo: todoSlice.reducer
  }
});

export const calcActions = calcSlice.actions;
export const todoActions = todoSlice.actions;
export default store;
