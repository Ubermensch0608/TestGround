import React, { useRef } from "react";

const Login = (props) => {
  const userInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveUser(userInputRef.current.value);
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
