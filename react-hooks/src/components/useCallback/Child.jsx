import React, { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("함수 실행!");
  }, [returnComment]);

  return <h1>{returnComment("종원")}</h1>;
};

export default Child;
