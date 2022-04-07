import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const CustomHook = () => {
  const [color, setColor] = useState();

  const changeColorHandler = () => {
    setColor("#" + Math.random().toLocaleString(4) * 1000);
  };

  console.log(color);
  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={changeColorHandler}>change body color</button>
    </div>
  );
};

export default CustomHook;
