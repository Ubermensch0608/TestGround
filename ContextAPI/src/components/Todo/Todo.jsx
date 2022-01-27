import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store";

import { nanoid } from "nanoid";

import Form from "../../layout/Form";
import Input from "../../layout/Input";
import Button from "../../layout/Button";

import styles from "./Todo.module.css";

const Todo = () => {
  const dispatch = useDispatch();
  const todoLists = useSelector((state) => state.todo.todoLists);
  const todoList = useSelector((state) => state.todo.todoList);

  const submitHandler = (event) => {
    event.preventDefault();

    if (todoList !== "") {
      dispatch(todoActions.todos(todoList));
    } else {
      return;
    }
    dispatch(todoActions.todo(""));
  };

  const getTextHandler = (event) => {
    const newValue = event.target.value;
    dispatch(todoActions.todo(newValue));
  };

  // const deleteHandler = () => {
  //   // list.parentElement = "";
  // };

  const todoMemo = todoLists.map((list, id = nanoid()) => {
    return (
      <li key={id}>
        {list}
        <Button>
          <span role="delete">❌</span>
        </Button>
      </li>
    );
  });

  return (
    <div className={styles.todo}>
      <h3>todo-list 입력</h3>
      <Form onSubmit={submitHandler}>
        <Input onChange={getTextHandler} value={todoList} />
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
