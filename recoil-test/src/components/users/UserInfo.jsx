import React from 'react';
import { useRecoilValue } from 'recoil';
import { userNameQuery } from '../../store';

const UserInfo = ({ userId }) => {
  const userName = useRecoilValue(userNameQuery(userId));
  return <div>User Name: {userName}</div>;
};

export default UserInfo;
