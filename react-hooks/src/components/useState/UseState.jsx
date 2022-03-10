import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  // let counter = 0;

  const incrementHandler = () => {
    // counter = counter + 1;
    // 버튼에 이벤트리스너가 생성되었기 때문에
    // 함수가 실행되어 counter는 계속 올라가는 것이 확인된다
    // 하지만 counter 라는 변수가 바뀐다고 해서 이 컴포넌트 전체가
    // 다시 랜더링(re-render)되는 것은 아니기 때문에
    // 실질적으로 렌더링 되는 counter는
    // 업데이트가 반영이 되지 않은 0을 나타낸다.

    setCounter((prevNumber) => prevNumber + 1);
  };
  // state가 업데이트 될때 컴포넌트 전체가 re-render된다.
  // 업데이트된 state가 제대로 적용
  console.log(counter);

  return (
    <div>
      {counter}
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
};

export default UseState;
