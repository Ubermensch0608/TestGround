import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';

export const SHOW_ALL = 'Show All';
export const SHOW_COMPLETE = 'Show Complete';
export const SHOW_UNCOMPLETE = 'Show Uncomplete';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: SHOW_ALL,
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case SHOW_COMPLETE:
        return list.filter((item) => item.isComplete);
      case SHOW_UNCOMPLETE:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

// ---------------------------------------------------

export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
});

export const currentUserNameQuery = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    const currentUserID = get(currentUserIDState);

    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${currentUserID}`
      );
      return data.name;
    } catch (error) {
      throw new Error(error);
    }
  },
});

export const userNameQuery = selectorFamily({
  key: 'UserName',
  get: (userID) => async () => {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );

    if (response.status !== 200) {
      throw new Error();
    }

    return response.data.name;
  },
});
