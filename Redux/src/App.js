import React from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const MOCK_DATA = [
  new Todo("redux 복습하기"),
  new Todo("velog 작성하기"),
  new Todo("TypeScript 공부하기"),
];

const App = () => {
  return (
    <div>
      <NewTodo />
      <Todos items={MOCK_DATA} />
    </div>
  );
};

export default App;
