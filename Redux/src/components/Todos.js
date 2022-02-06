import React from "react";

const Todos = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
