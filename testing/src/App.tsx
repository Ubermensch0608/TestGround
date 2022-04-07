import NewTodo from "components/NewTodo";
import Search from "components/Search";
import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;

    setSearch(currentValue);
  };
  return (
    <div>
      <Search value={search} onChange={changeHandler}>
        Search:
      </Search>

      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
};

export default App;
