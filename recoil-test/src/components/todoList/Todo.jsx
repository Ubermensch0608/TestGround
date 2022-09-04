import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../store';
import { removeItemAtIndex, replaceItemAtIndex } from '../common/handlers';

const Todo = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === todo);

  const editTextHandler = (e) => {
    const newInputValue = e.target.value;
    const newList = replaceItemAtIndex(todoList, index, {
      ...todo,
      text: newInputValue,
    });

    setTodoList(newList);
  };

  const switchCheckHandler = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todo,
      isComplete: !todo.isComplete,
    });

    setTodoList(newList);
  };

  const removeTodoHandler = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <li>
      <input type="text" value={todo.text} onChange={editTextHandler} />
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={switchCheckHandler}
      />
      <button onClick={removeTodoHandler}>X</button>
    </li>
  );
};

export default Todo;
