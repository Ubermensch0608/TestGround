import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoId = useSelector((state) => state.todoId);
  const saveTodoHandler = (newTodoText) => {
    setTodos((prevTodo) => {
      return [new Todo(newTodoText), ...prevTodo];
    });
  };

  useEffect(() => {
    console.log(todoId);
    setTodos((prev) => prev.filter((item) => item.id !== todoId));
  }, [todoId]);

  return (
    <div>
      <NewTodo onSaveTodo={saveTodoHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default App;
