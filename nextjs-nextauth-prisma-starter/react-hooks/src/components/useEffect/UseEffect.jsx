import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((preCount) => preCount + 1);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(data[0].email);
      console.log("API WAS CALLED");
    })();
  }, []);

  return (
    <div>
      <div>{data}</div>
      <div>{count}</div>
      <button onClick={incrementHandler}>Click</button>
    </div>
  );
};

export default UseEffect;
