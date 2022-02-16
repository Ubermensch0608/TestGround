import React, { useRef } from 'react';
import { setMemo } from '../models/new-memo';

import styled from 'styled-components';

const NewMemo: React.FC<{ memo: (memo: setMemo) => void }> = ({ memo }) => {
  const userRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const memoTextRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const userValue: string | number = userRef.current!.value;
    const titleValue: string = titleRef.current!.value;
    const textValue: string = memoTextRef.current!.value;

    if (!userValue || !titleValue || !textValue) {
      alert('타이틀과 메모란에 글을 작성해주세요');
      return;
    }

    memo(new setMemo(userValue, titleValue, textValue));

    userRef.current!.value = '';
    titleRef.current!.value = '';
    memoTextRef.current!.value = '';

    alert('작성이 완료 되었습니다!');
  };

  const preventSubmitHandler = (event: React.KeyboardEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">타이틀</label>
        <Input
          type="text |  number"
          id="title"
          onKeyPress={preventSubmitHandler}
          ref={titleRef}
        />
        <label htmlFor="user">작성자</label>
        <Input
          type="text |  number"
          id="user"
          onKeyPress={preventSubmitHandler}
          ref={userRef}
        />
        <SubmitButton>작성하기</SubmitButton>
      </div>
      <div>
        <label htmlFor="title">메모</label>
        <TextArea id="title" ref={memoTextRef} />
      </div>
    </form>
  );
};

export const Input = styled.input`
  width: 10%;
  border: 1px solid #000;
  border-radius: 3px;
`;

export const SubmitButton = styled.button`
  background-color: tomato;
  border-radius: 4px;
  padding: 4px 8px;
  color: #fff;
`;

export const TextArea = styled.textarea`
  width: 50%;
  height: 300px;
  border: 1px solid #000;
  border-radius: 3px;
  resize: none;
`;

export default NewMemo;
