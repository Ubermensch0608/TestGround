import React from "react";
import TodoText from "./TodoText";

const Todos = (props) => {
  const todoIdHandler = (todoId) => {
    props.onRemove(todoId);
  };

  return (
    <ul>
      {props.items.map((item) => (
        <TodoText
          key={item.id}
          id={item.id}
          items={item.text}
          onRemove={todoIdHandler}
        />
      ))}
    </ul>
  );
};

export default Todos;
