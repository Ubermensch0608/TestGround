import { useRecoilState, useRecoilValue } from "recoil";
import { charCountState, inputState } from "./store";

const App = () => {
  const [count, setCount] = useRecoilState(inputState);
  const charCount = useRecoilValue(charCountState);

  const inputValueHandler = (event) => {
    const currentValue = event.target.value.trim();
    setCount(currentValue);
  };

  return (
    <div>
      <div>
        <input onChange={inputValueHandler} />

        <h2>{count}</h2>
      </div>
      <div>
        <h2>{charCount}</h2>
      </div>
    </div>
  );
};

export default App;
