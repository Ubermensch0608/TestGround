import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../../store';
import Todo from './Todo';

const Todos = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
