import React from 'react';
import { useRecoilState } from 'recoil';
import {
  SHOW_ALL,
  SHOW_COMPLETE,
  SHOW_UNCOMPLETE,
  todoListFilterState,
} from '../store';

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilterHandler = (e) => {
    const checkValue = e.target.value;
    setFilter(checkValue);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilterHandler}>
        <option value={SHOW_ALL}>All</option>
        <option value={SHOW_COMPLETE}>Completed</option>
        <option value={SHOW_UNCOMPLETE}>Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
