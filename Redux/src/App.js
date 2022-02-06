import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const saveTodoHandler = (newTodoText) => {
    setTodos((prevTodo) => {
      return [new Todo(newTodoText), ...prevTodo];
    });
  };

  const removeHandler = (todoId) => {
    setTodos((prev) => prev.filter((item) => item.id !== todoId));
  };
  return (
    <div>
      <NewTodo onSaveTodo={saveTodoHandler} />
      <Todos items={todos} onRemove={removeHandler} />
    </div>
  );
};

export default App;
