import { createStore } from "redux";

const todoReducer = (state = { todoId: null }, action) => {
  if (action.type === "remove") {
    return {
      todoId: action.payload,
    };
  }

  return state;
};

const store = createStore(todoReducer);

export default store;
