import React, { Fragment, useState, createContext } from "react";
import Calc from "./components/Calculator/Calc";
import Todo from "./components/Todo/Todo";

import styles from "./App.module.css";

export const CalcContext = createContext({
  calcNumber: 0
});

function App() {
  const [savedNumber, setSavedNumber] = useState();

  const saveNumberHandler = (givenNumber) => {
    setSavedNumber(givenNumber);
  };

  return (
    <CalcContext.Provider
      value={{
        calcNumber: savedNumber
      }}
    >
      <h1>계산한 결과를 todo-list에 보내기</h1>
      <div className={styles.body}>
        <Calc onAddNumber={saveNumberHandler} />
        <Todo />
      </div>
    </CalcContext.Provider>
  );
}

export default App;
