import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const MOCK_DATA = [
  new Todo("안녕하세요"),
  new Todo("감사해요"),
  new Todo("잘있어요"),
];

const App = () => {
  return (
    <div>
      <Todos items={MOCK_DATA} />
    </div>
  );
};

export default App;
