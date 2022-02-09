import { useState } from "react";

import Toggle from "../layout/Toggle";

const MyToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const changeHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <h3>Toggle</h3>
      <Toggle
        htmlFor="myToggle"
        id="myToggle"
        onChange={changeHandler}
        isToggled={isToggled}
      />
      <div>Toggle Switch {isToggled ? <span>ON</span> : <span>OFF</span>} </div>
    </div>
  );
};

export default MyToggle;
