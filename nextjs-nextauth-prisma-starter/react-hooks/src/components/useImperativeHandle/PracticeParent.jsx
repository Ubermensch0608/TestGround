import React, { useRef } from "react";
import PracticeButton from "./PracticeChildButton";

const PracticeParent = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <button onClick={() => buttonRef.current.incrementHandler()}>
        Button From Parent - Increment
      </button>
      <button onClick={() => buttonRef.current.decrementHandler()}>
        Button From Parent - Decrement
      </button>
      <button onClick={() => buttonRef.current.toggleHandler()}>
        Button From Parent - Toggle
      </button>
      <PracticeButton ref={buttonRef} />
    </div>
  );
};

export default PracticeParent;
