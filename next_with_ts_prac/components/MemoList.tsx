import React, { TimeHTMLAttributes } from 'react';

export interface MemoProps {
  id: string;
  userName: string;
  title: string;
  text: string;
  timeStamp: string;
}

const MemoList: React.FC<{ memoData: MemoProps[] }> = (props) => {
  return (
    <ul>
      {props.memoData.map((memo) => (
        <li key={memo.id}>
          <div>
            <h3>{memo.title}</h3>
          </div>
          <div>
            <div>
              <span>작성자</span>
              <span>{memo.userName}</span>
            </div>
            <div>
              <span>작성 일시</span>
              <span>{memo.timeStamp}</span>
            </div>
          </div>
          <div>{memo.text}</div>
        </li>
      ))}
    </ul>
  );
};

export default MemoList;
