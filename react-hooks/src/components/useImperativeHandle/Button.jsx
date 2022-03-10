import React, { forwardRef, useImperativeHandle, useState } from "react";

// forwardRef로 ref 속성을 전달
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  // useImperativeHandle을 통해 ref의 속성을 생성
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle((prev) => !prev);
    },
  }));
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleHandler}>Button From Child</button>
      {toggle && <div>Toggle</div>}
    </div>
  );
});

export default Button;
