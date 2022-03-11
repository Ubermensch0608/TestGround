import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

const ContextAPI = () => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <Login onSaveUser={setUserName} />
      <User user={userName} />
    </div>
  );
};

export default ContextAPI;
