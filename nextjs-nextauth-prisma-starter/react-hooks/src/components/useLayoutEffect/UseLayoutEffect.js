import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const inputRef = useRef(null);

  // 코드 위치에 관계 없이 useLayoutEffect는
  // 페이지 렌더링 전에 실행
  // -> useEffect보다 먼저 실행

  // 사용자에게 렌더링되는 정보 전에 관여
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "두 번째";
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        value="Hi there! Hi there! Hi there! Hi there!"
        style={{
          width: "200px",
          height: "40px",
        }}
      />
    </div>
  );
};

export default UseLayoutEffect;
