import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [toggel, setToggle] = useState(false);
  const [data, setData] = useState("Hello World!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  // 값을 담을 때는 useMemo
  // 함수를 담을 때는 useCallback

  return (
    <div>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle((prev) => !prev)}>토글 버튼</button>
      {toggel && <h1>Toggle</h1>}
    </div>
  );
};

export default UseCallback;
