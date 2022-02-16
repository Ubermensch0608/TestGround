import React from 'react';
import styled from 'styled-components';
import { MemoProps } from './MemoList';

const Memo: React.FC<MemoProps> = (props) => {
  return (
    <SingleMemo>
      <div>
        <MemoTitle>{props.title}</MemoTitle>
      </div>
      <Section_SubTitle>
        <div>
          <span>작성자</span>
          <span>{props.userName}</span>
        </div>
        <div>
          <span>작성 일시</span>
          <span>{props.timeStamp}</span>
        </div>
      </Section_SubTitle>
      <div>{props.text}</div>
    </SingleMemo>
  );
};

export const SingleMemo = styled.li`
  margin: 30px 0;

  > div {
    margin-bottom: 10px;
  }
`;

export const Section_SubTitle = styled.div`
  display: flex;

  > div {
    margin-right: 10px;
  }

  & div > span {
    margin-right: 10px;
  }

  >div>span: nth-child(1) {
    font-weight: 700;
  }
`;

export const MemoTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
`;

export default Memo;
