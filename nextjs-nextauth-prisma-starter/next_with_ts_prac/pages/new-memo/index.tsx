import React from 'react';
import { NextPage } from 'next';

import NewMemo from 'components/NewMemo';
import { setMemo } from 'models/new-memo';

const NewMemoPage: NextPage = () => {
  const saveMemoHandler = (memo: setMemo) => {
    console.log(memo, 'in Page');
  };
  return <NewMemo memo={saveMemoHandler} />;
};

export default NewMemoPage;
