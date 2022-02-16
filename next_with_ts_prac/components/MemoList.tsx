import React, { TimeHTMLAttributes } from 'react';
import styled from 'styled-components';
import Wrapper from './Layout/BodyWrapper';
import Memo from './Memo';

export interface MemoProps {
  id?: string;
  userName: string;
  title: string;
  text: string;
  timeStamp: string;
}

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
