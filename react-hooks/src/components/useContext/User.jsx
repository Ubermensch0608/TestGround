import React, { useContext } from "react";
import { AppContext } from "./ContextAPI";

const User = () => {
  const { userName } = useContext(AppContext);

  return (
    <div>
      <h2>{userName}</h2>
    </div>
  );
};

export default User;
