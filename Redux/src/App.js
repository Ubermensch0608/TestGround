import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const saveTodoHandler = (newTodoText) => {
    setTodos((prevTodos) => {
      return [new Todo(newTodoText), ...prevTodos];
    });
  };

  const removeTodoHandler = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <NewTodo onAddTodo={saveTodoHandler} />
      <Todos items={todos} onRemove={removeTodoHandler} />
    </div>
  );
};

export default App;
