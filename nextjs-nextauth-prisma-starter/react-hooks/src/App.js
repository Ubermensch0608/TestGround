import CustomHook from "./components/CustomHook/CustomHook";
import UseCallback from "./components/useCallback/UseCallback";
import ContextAPI from "./components/useContext/ContextAPI";
import UseEffect from "./components/useEffect/UseEffect";
import PracticeParent from "./components/useImperativeHandle/PracticeParent";
import UseImperativeHandle from "./components/useImperativeHandle/UseImperativeHandle";
import UseLayoutEffect from "./components/useLayoutEffect/UseLayoutEffect";
import UseMemo from "./components/useMemo/UseMemo";
import UseReducer from "./components/useReducer/UseReducer";
import UseRef from "./components/useRef/UseRef";
import UseState from "./components/useState/UseState";

const App = () => {
  return (
    <div>
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseImperativeHandle /> */}
      {/* <PracticeParent /> */}
      {/* <ContextAPI /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      <CustomHook />
    </div>
  );
};

export default App;
