import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { removeTodoAtom, todosAtom } from "./store/atoms";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [todoItemId] = useAtom(removeTodoAtom);

  const saveTodoHandler = (newTodoText) => {
    setTodos((prevTodos) => {
      return [new Todo(newTodoText), ...prevTodos];
    });
  };

  useEffect(() => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoItemId));
  }, [todoItemId, setTodos]);

  return (
    <div>
      <NewTodo onAddTodo={saveTodoHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default App;
