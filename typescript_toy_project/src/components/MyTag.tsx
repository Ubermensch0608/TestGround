import React from "react";
import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const MyTag = () => {
  const [tags, setTags] = useState<string[]>([]);

  const tagInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const currentValue = tagInputRef.current!.value;

    setTags((prevTags) => {
      return [currentValue, ...prevTags];
    });
    tagInputRef.current!.value = "";
  };

  const removeHandler = () => {};
  return (
    <form onSubmit={submitHandler}>
      <h3>Tag</h3>
      <TagInput
        ref={tagInputRef}
        placeholder="Press enter to add tags"
      ></TagInput>
      {tags.map((tag) => (
        <TagBtn
          key={nanoid()}
          onClick={removeHandler}
          value={tag}
          type="button"
        />
      ))}
    </form>
  );
};

const TagInput = styled.input`
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  width: 600px;
  height: 40px;
  padding: 4px;
`;

const TagBtn = styled.input`
  position: absolute;
  background: #2196f3;
  color: #f5f5f5;
  font-size: 18px;
  border: 3px solid #bbdefb;
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
  width: auto;

  :after {
    background: pink;
    border-radius: 50%;
    width: 4px;
    height: 4px;
  }
`;
export default MyTag;
