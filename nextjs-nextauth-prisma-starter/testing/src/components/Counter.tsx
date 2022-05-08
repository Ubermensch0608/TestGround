import { FC, useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Add One</button>
      <div role="contentinfo">Count is {count}</div>
    </div>
  );
};

export default Counter;
