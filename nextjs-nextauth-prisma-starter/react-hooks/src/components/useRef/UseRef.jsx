import React, { useRef, useState } from "react";

const UseRef = () => {
  const [text, setText] = useState("Hello World!");
  const inputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const current = inputRef.current;

    if (current.value.trim().length === 0) {
      current.focus();
      return;
    }

    setText(current.value);
    current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>{text}</h1>
      <input ref={inputRef} type="text" placeholder="아무거나 써 넣으세요" />
      <button type="submit">Change Text</button>
    </form>
  );
};

export default UseRef;
