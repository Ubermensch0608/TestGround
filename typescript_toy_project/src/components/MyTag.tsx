import React from "react";
import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { TagsProps } from "models/model";

const MyTag = () => {
  const [tags, setTags] = useState<TagsProps[]>([]);
  console.log(tags);
  const tagInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const currentValue = tagInputRef.current!.value;

    setTags((prevTags) => {
      return [new TagsProps(currentValue), ...prevTags];
    });
    tagInputRef.current!.value = "";
  };

  const removeHandler = (event: React.MouseEvent) => {
    const clickedId = event.currentTarget.id;
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== clickedId));
  };
  return (
    <form onSubmit={submitHandler}>
      <h3>Tag</h3>
      <InputWithButton>
        <TagInput
          type="text"
          ref={tagInputRef}
          placeholder="Press enter to add tags"
        />
        {tags.map((tag, index) => (
          <TagBtn key={nanoid()} id={index.toString()} onClick={removeHandler}>
            {tag.text}
          </TagBtn>
        ))}
      </InputWithButton>
    </form>
  );
};

const InputWithButton = styled.div`
  position: relative;
  width: 700px;
  height: 50px;
`;

const TagInput = styled.input`
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  width: 100%;
  height: 40px;
  padding: 4px;
`;

const TagBtn = styled.button<{
  id: string;
  onClick: React.MouseEventHandler;
}>`
  position: absolute;
  right: 0;
  top: 5px;
  background: #2196f3;
  color: #f5f5f5;
  font-size: 18px;
  border: 3px solid #bbdefb;
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
`;

export default MyTag;
