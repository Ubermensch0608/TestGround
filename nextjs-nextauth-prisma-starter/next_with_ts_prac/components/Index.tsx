import { setMemo } from 'models/new-memo';
import React, { useState } from 'react';
import MemoList from './MemoList';
import NewMemo from './NewMemo';

const Index = () => {
  const [newMemo, setNewMemo] = useState<setMemo[]>([]);

  const saveMemoHandler = (newMemo: setMemo) => {
    setNewMemo((prevMemos) => {
      return [newMemo, ...prevMemos];
    });
  };

  return (
    <div>
      <MemoList memoList={newMemo} />
      <NewMemo memo={saveMemoHandler} />
    </div>
  );
};

export default Index;
