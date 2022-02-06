import { createStore } from "redux";

const todoReducer = (state = { text: null, todoId: null }, action) => {
  if (action.type === "add") {
    return {
      text: action.payload,
    };
  }

  if (action.type === "remove") {
    return {
      todoId: action.payload,
    };
  }

  return state;
};

const store = createStore(todoReducer);

export default store;
