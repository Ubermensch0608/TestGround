import React, { useState } from "react";
import axios from "axios";
import NewTodo from "components/NewTodo";

const URL = "http://hn.algolia.com/api/v1/search";

function App() {
  const [hitsData, setHitsData] = useState([]);

  const fetchDataHandler = async () => {
    try {
      const { data } = await axios.get(URL);
      const fetchedHits = data.hits;
      setHitsData(fetchedHits);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={fetchDataHandler}>fetch</button>
      <ul>
        {hitsData.map((hit) => (
          <li key={hit.objectID}>
            <span>Title: </span>
            <span>{hit.title ? hit.title : "----------------"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
