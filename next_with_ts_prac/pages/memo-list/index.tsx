import MemoList from 'components/MemoList';
import NewMemo from 'components/NewMemo';
import { MemoProps } from 'models/memo';
import { setMemo } from 'models/new-memo';

import { nanoid } from 'nanoid';
import { NextPage } from 'next';
import { Fragment, useState } from 'react';

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
