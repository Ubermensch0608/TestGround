import React from "react";
import TodoText from "./TodoText";

const Todos = (props) => {
  const removeHandler = (todoId) => {
    props.onRemove(todoId);
  };
  return (
    <ul>
      {props.items.map((item) => (
        <TodoText
          key={item.id}
          id={item.id}
          text={item.text}
          onRemove={removeHandler}
        />
      ))}
    </ul>
  );
};

export default Todos;
