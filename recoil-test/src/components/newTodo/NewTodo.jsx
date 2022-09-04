import React, { useId, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../store';

const NewTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const id = useId();

  const makeNewTodoHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);

    const newTodoSet = {
      id: Math.random(),
      text: inputValue,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodoSet]);

    setInputValue('');
  };

  return (
    <form onSubmit={makeNewTodoHandler}>
      <label htmlFor={id}>ADD YOUR OWN TODO!</label>
      <input
        htmlFor={id}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button>add todo</button>
    </form>
  );
};

export default NewTodo;
