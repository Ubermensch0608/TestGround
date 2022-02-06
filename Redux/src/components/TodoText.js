import React from "react";

const TodoText = (props) => {
  const removeHandler = (e) => {
    const todoItemId = e.target.id;

    props.onRemove(todoItemId);
  };

  return (
    <li id={props.id} onClick={removeHandler}>
      {props.items}
    </li>
  );
};

export default TodoText;
