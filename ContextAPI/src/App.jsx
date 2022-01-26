import React, { useState, createContext, Fragment } from "react";
import Calc from "./components/Calculator/Calc";
import Todo from "./components/Todo/Todo";

import styles from "./App.module.css";

function App() {
  return (
    <Fragment>
      <h1>계산한 결과를 todo-list에 보내기</h1>
      <div className={styles.body}>
        <Calc />
        <Todo />
      </div>
    </Fragment>
  );
}

export default App;
