import React from "react";
import Todos from "./components/Todos";

const MOCK_DATA = ["redux 복습하기", "velog 작성하기", "TypeScript 공부하기"];

const App = () => {
  return (
    <div>
      <Todos items={MOCK_DATA} />
    </div>
  );
};

export default App;
