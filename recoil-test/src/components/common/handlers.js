import axios from 'axios';

export const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const myDBQuery = async (userID) => {
  return await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );
};
