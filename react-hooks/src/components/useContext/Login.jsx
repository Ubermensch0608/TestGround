import React, { useContext, useRef } from "react";
import { AppContext } from "./ContextAPI";

const Login = () => {
  const { setUserName } = useContext(AppContext);

  const userInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    setUserName(userInputRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>User</label>
      <input type="text" ref={userInputRef} />
      <button type="submit">제출</button>
    </form>
  );
};

export default Login;
