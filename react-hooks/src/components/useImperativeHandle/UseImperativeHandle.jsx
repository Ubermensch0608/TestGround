import React, { useRef } from "react";
import Button from "./Button";

const UseImperativeHandle = () => {
  const buttonRef = useRef(null);

  const toggleHandler = () => {
    buttonRef.current.alterToggle();
  };

  return (
    <>
      {/* child 컴포넌트의 state를 바꿀 때 사용 */}
      <button onClick={toggleHandler}>Button From Parent</button>
      <Button ref={buttonRef} />
    </>
  );
};

export default UseImperativeHandle;
