import { setMemo } from 'models/new-memo';

import Memo from './Memo';

const MemoList: React.FC<{ memoList: setMemo[] }> = ({ memoList }) => {
  return (
    <ul>
      {memoList.map((memo) => (
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
