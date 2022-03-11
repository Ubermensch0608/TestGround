import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [data, setData] = useState(null);
  const [toggel, setToggle] = useState(false);

  useEffect(() => {
    const fetchHandler = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(data);
    };

    fetchHandler();
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("함수 동작");
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      <div>{getLongestName}</div>
      <button onClick={() => setToggle((prev) => !prev)}>토글 버튼</button>
      {toggel && <h1>Toggle</h1>}
    </div>
  );
};

export default UseMemo;
