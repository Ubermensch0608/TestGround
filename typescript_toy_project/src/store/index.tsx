import { createStore } from "redux";

export type ToggleType = {
  type?: string;
  isToggled?: boolean;
};

const toggleReducer = (
  state: ToggleType = { isToggled: false },
  action: ToggleType
) => {
  if (action.type === "toggle") {
    return {
      isToggled: !state.isToggled,
    };
  }

  return state;
};

const store = createStore(toggleReducer);

export default store;
