import { useRecoilState } from "recoil";
import { countState } from "store";

const App = () => {
  const [{ count }, setCount] = useRecoilState(countState);
  return (
    <>
      <div>
        <button
          aria-label="increment"
          onClick={() => setCount({ count: count + 1 })}
        >
          +1
        </button>
        <button
          aria-label="decrement"
          onClick={() => setCount({ count: count - 1 })}
        >
          -1
        </button>
      </div>
      <div role="contentinfo">Count is {count}</div>
    </>
  );
};

export default App;
