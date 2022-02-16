import { MemoProps } from 'models/memo';
import React from 'react';

import Memo from './Memo';

const MemoList: React.FC<{ memoData: MemoProps[] }> = (props) => {
  return (
    <ul>
      {props.memoData.map((memo) => (
        <Memo
          key={memo.id}
          title={memo.title}
          userName={memo.userName}
          timeStamp={memo.timeStamp}
          text={memo.text}
        />
      ))}
    </ul>
  );
};

export default MemoList;
