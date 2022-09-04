import axios from 'axios';
import { atom, selector, selectorFamily, waitForAll } from 'recoil';
import { myDBQuery } from '../components/common/handlers';

export const currentUserIDState = atom({
  key: 'CurrentUserID-2',
  default: null,
});

export const userInfoQuery = selectorFamily({
  key: 'UserInfoQuery-2',

  get: (userID) => async () => {
    try {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/users/${userID}`
      );
      return response.data;
    } catch (error) {
      throw new Error();
    }
  },
});

export const currentUserInfoQuery = selector({
  key: 'CurrentUserInfoQuery-2',
  get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

export const friendInfoQuery = selector({
  key: 'FriendsInfoQuery-2',
  get: ({ get }) => {
    const { frinedList } = get(currentUserInfoQuery);

    return frinedList.map((friendID) => get(userInfoQuery(friendID)));
  },
});
