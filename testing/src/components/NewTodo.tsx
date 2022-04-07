import React, { FC, useRef, useState } from "react";

const NewTodo: FC = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const submitTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodoValue = todoInputRef.current!.value;

    setInputValue(newTodoValue);
  };

  return (
    <div>
      <form onSubmit={submitTodoHandler}>
        <label htmlFor="new-todo">할 일을 추가하세요!</label>
        <input id="new-todo" type="text" ref={todoInputRef} />
        <button>추가하기</button>
      </form>
      <p>{inputValue}</p>
    </div>
  );
};

export default NewTodo;
