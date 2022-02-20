import { setMemo } from 'models/new-memo';
import { memo } from 'react';
import Memo from './Memo';

const MemoList: React.FC<{ memoList: setMemo[] }> = ({ memoList }) => {
  return (
    <ul>
      {memoList.map((memo) => (
        <Memo
          key={memo.id}
          title={memo.title}
          body={memo.body}
          userName={memo.userName}
          timeStamp={memo.timeStamp}
        />
      ))}
    </ul>
  );
};

export default memo(MemoList);
