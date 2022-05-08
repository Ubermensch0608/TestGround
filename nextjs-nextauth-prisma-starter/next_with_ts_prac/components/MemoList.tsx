import { setMemo } from 'models/new-memo';
import { PlaceHolder } from 'pages/memo-list';
import { memo } from 'react';
import { DefaultRootState, useSelector } from 'react-redux';
import Memo from './Memo';

const MemoList: React.FC = () => {
  const memoData: PlaceHolder[] = useSelector<DefaultRootState>(
    (state) => state.memo.memoList,
  );

  return (
    <ul>
      {memoData.map((memo) => (
        <Memo
          key={memo.id}
          title={memo.title}
          body={memo.body}
          userName={memo.userId}
        />
      ))}
    </ul>
  );
};

export default memo(MemoList);
