import React from "react";
import { useDispatch } from "react-redux";

const TodoText = (props) => {
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    const todoItemId = e.target.id;

    dispatch({
      type: "remove",
      id: todoItemId,
    });
  };

  return (
    <li id={props.id} onClick={removeHandler}>
      {props.items}
    </li>
  );
};

export default TodoText;
