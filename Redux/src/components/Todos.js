import React from "react";
import TodoText from "./TodoText";

const Todos = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoText key={item.id} id={item.id} items={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
