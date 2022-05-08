import { useEffect, useState } from "react";

const useAPI = () => {
  const [data, setData] = useState<{ name: string }>();

  useEffect(() => {
    let isMount = true;
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        if (isMount) {
          setData(data);
        }
      });

    return () => {
      isMount = false;
    };
  }, []);

  return data;
};

export default useAPI;
