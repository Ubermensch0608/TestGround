import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      if (url) {
        const { data } = await axios.get(url);
        setData(data);
      }
    })();
  }, []);

  if (!data) {
    return;
  }

  return [data, setData];
};

export default useFetch;
