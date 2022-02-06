import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const NewTodo = () => {
  const dispatch = useDispatch();
  const todoTextRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const newTodoText = todoTextRef.current.value;
    if (newTodoText.trim().length === 0) {
      return;
    }

    dispatch({
      type: "add",
      payload: newTodoText,
    });

    todoTextRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo List</label>
      <input id="todo" type="text" ref={todoTextRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
