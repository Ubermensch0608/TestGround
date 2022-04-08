import NewTodo from "components/NewTodo";
import Search from "components/Search";
import React, { useEffect, useState } from "react";

const getUser = () => {
  return Promise.resolve({
    id: "1",
    name: "Robin",
  });
};

interface User {
  id: string;
  name: string;
}

const App = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;

    setSearch(currentValue);
  };

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}
      <Search value={search} onChange={changeHandler}>
        Search:
      </Search>

      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
};

export default App;
