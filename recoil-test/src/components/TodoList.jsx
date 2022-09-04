import React from 'react';

import NewTodo from './newTodo/NewTodo';
import Todos from './todoList/Todos';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

const TodoList = () => {
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <NewTodo />

      <Todos />
    </div>
  );
};

export default TodoList;
