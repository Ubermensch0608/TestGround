import React, { useRef } from "react";

const NewTodo = (props) => {
  const inputTextRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const currentInputValue = inputTextRef.current.value;
    if (currentInputValue.trim().length === 0) {
      return;
    }

    props.onAddTodo(currentInputValue);
    inputTextRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo List</label>
      <input type="text" id="todo" ref={inputTextRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
