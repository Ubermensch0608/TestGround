import React, { useState } from "react";

const UseReducer = () => {
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(true);

  const incrementHandler = () => {
    setCounter((prevNumber) => prevNumber + 1);
    setShowText(!showText);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incrementHandler}>Click Here!</button>
      {showText && <div>This is a text</div>}
    </div>
  );
};

export default UseReducer;
