import MemoList from 'components/MemoList';
import NewMemo from 'components/NewMemo';

import { setMemo } from 'models/new-memo';

import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';

const MemoListPage: NextPage = () => {
  const [newMemo, setNewMemo] = useState<setMemo[]>([]);

  const saveMemoHandler = (newMemo: setMemo) => {
    setNewMemo((prevMemos) => {
      return [newMemo, ...prevMemos];
    });
  };

  return (
    <Fragment>
      <MemoList memoList={newMemo} />
      <NewMemo memo={saveMemoHandler} />
    </Fragment>
  );
};

export default MemoListPage;
