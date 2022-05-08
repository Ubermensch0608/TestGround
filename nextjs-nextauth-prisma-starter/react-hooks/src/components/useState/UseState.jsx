import React, { Fragment, useState } from "react";

const UseState = () => {
  const [inputValue, setInputValue] = useState("우종원");

  const currentInputHandler = (event) => {
    const currentValue = event.target.value;
    setInputValue(currentValue);
  };

  return (
    <Fragment>
      <input
        placeholder="아무거나 써보세요"
        onChange={currentInputHandler}
        value={inputValue}
      />
      <div>{inputValue}</div>
    </Fragment>
  );
};
export default UseState;
