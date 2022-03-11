import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const ContextAPI = () => {
  const [userName, setUserName] = useState("");

  console.log({ userName });
  console.log({ setUserName });

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default ContextAPI;
