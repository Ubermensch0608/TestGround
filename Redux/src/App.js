import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoId = useSelector((state) => state.todoId);

  const saveTodoHandler = (newTodoText) => {
    setTodos((prevTodos) => {
      return [new Todo(newTodoText), ...prevTodos];
    });
  };

  useEffect(() => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }, [todoId]);

  return (
    <div>
      <NewTodo onAddTodo={saveTodoHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default App;
