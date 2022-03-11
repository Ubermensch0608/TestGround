import React, { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("함수 실행!");
  }, [returnComment]);

  return <div>{returnComment("종원")}</div>;
};

export default Child;
