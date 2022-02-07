import React from "react";
import { useAtom } from "jotai";
import { removeTodoAtom } from "../store/atoms";

const TodoItem = (props) => {
  const [, setTodoItemId] = useAtom(removeTodoAtom);

  const removeHandler = (event) => {
    const ID = event.target.id;
    setTodoItemId(ID);
  };

  return (
    <li id={props.id} onClick={removeHandler}>
      {props.text}
    </li>
  );
};

export default TodoItem;
