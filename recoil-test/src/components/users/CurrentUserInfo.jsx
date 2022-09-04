import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
  currentUserIDState,
  currentUserInfoQuery,
  friendInfoQuery,
} from '../../store/index-2';

const CurrentUserInfo = () => {
  const currentUser = useRecoilValue(currentUserInfoQuery);
  const friends = useRecoilValue(friendInfoQuery);
  const setCurrentID = useSetRecoilState(currentUserIDState);

  return (
    <div>
      <h1>{currentUser.name}</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} onClick={() => setCurrentID(friend.id)}>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentUserInfo;
