import { FC, useEffect, useState } from "react";

const APIComponent: FC = () => {
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
  return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>;
};

export default APIComponent;
