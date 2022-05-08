import { createStore } from "redux";

const todoReducer = (state = { todoId: null }, action) => {
  if (action.type === "remove") {
    return {
      todoId: action.id,
    };
  }

  return state;
};

const store = createStore(todoReducer);

export default store;
