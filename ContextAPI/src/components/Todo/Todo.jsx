import React, { useState, useContext } from "react";
import Form from "../../layout/Form";
import Input from "../../layout/Input";
import Button from "../../layout/Button";

import styles from "./Todo.module.css";
import { CalcContext } from "../../App";

const Todo = () => {
  const [todoText, setTodoText] = useState();
  const [saveTodo, setSaveTodo] = useState([]);
  const { calcNumber } = useContext(CalcContext);

  const submitHandler = (event) => {
    event.preventDefault();
    if (todoText !== "") {
      if (calcNumber !== undefined) {
        setSaveTodo([`${todoText}: ${calcNumber} `, ...saveTodo]);
      } else {
        setSaveTodo([todoText, ...saveTodo]);
      }
    } else {
      return;
    }

    setTodoText("");
  };

  const getTextHandler = (event) => {
    const newValue = event.target.value;
    setTodoText(newValue);
  };

  const deleteHandler = () => {
    // list.parentElement = "";
  };

  const todoMemo = saveTodo.map((list, i) => {
    return (
      <li key={i}>
        {list}
        <Button onClick={deleteHandler}>
          <span role="img">❌</span>
        </Button>
      </li>
    );
  });

  return (
    <div className={styles.todo}>
      <h3>todo-list 입력</h3>
      <Form onSubmit={submitHandler}>
        <Input onChange={getTextHandler} value={todoText} />
        <Button type="submit">등록</Button>
      </Form>
      <div>
        <h3>todo-list 메모장</h3>
        <ul className={styles.lists}>{todoMemo}</ul>
      </div>
      <p>여기로 보냅니다</p>
    </div>
  );
};

export default Todo;
