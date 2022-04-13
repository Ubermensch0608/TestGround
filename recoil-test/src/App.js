import { useRecoilState } from "recoil";
import { countState } from "./store";

const App = () => {
  const [count, setCount] = useRecoilState(countState);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={incrementHandler}>+1</button>
      <button onClick={decrementHandler}>-1</button>
    </div>
  );
};

export default App;
