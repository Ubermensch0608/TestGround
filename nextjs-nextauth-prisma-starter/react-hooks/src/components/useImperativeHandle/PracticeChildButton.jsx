import React, { forwardRef, useImperativeHandle, useReducer } from "react";

const buttonReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, isShow: state.isShow };
    case "DECREMENT":
      return { counter: state.counter - 1, isShow: state.isShow };
    case "TOGGLE":
      return { counter: state.counter, isShow: !state.isShow };
    default:
      return state;
  }
};

const PracticeChildButton = forwardRef((props, ref) => {
  const [state, dispatch] = useReducer(buttonReducer, {
    counter: 0,
    isShow: false,
  });

  useImperativeHandle(ref, () => ({
    incrementHandler() {
      dispatch({ type: "INCREMENT" });
    },
    decrementHandler() {
      dispatch({ type: "DECREMENT" });
    },
    toggleHandler() {
      dispatch({ type: "TOGGLE" });
    },
  }));

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Button From Child - Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Button From Child - Decrement
      </button>
      <button onClick={() => dispatch({ type: "TOGGLE" })}>
        Button From Child - Toggle
      </button>
      {state.isShow && <div>{state.counter}</div>}
    </div>
  );
});

export default PracticeChildButton;
