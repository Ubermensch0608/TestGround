import React, { useReducer } from "react";

// state: 어떠한 state값을 가지는지(값)
// action: 어떻게 state를 업데이트 시킬지(함수)
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "DECREMENT":
      return { count: state.count - 1, showText: state.showText };
    case "TOGGLE":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducer = () => {
  // 한 가지 state를 객체로 하여 세분화
  // dispatch로 원하는 setState함수를 선택가능

  // useReducer(`리듀서`, {객체로 사용하는 state})
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    showText: true,
  });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "TOGGLE" })}>Toggle Text</button>
      {state.showText && <div>This is a text</div>}
    </div>
  );
};

export default UseReducer;
