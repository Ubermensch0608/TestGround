import { createStore } from "redux";

export type ToggleType = {
  type?: string;
  isToggled?: boolean;
};

const toggleReducer = (
  state: ToggleType = { isToggled: false },
  action: ToggleType
) => {
  switch (action.type) {
    case "toggle":
      return {
        isToggled: !state.isToggled,
      };

    case "UN_TOGGLE":
      return {
        isToggled: !state.isToggled,
      };

    default:
      return state;
  }
};

const testReducer = (
  state: ToggleType = { isToggled: false },
  action: ToggleType
) => {
  if (action.type === "toggle") {
    return (state.isToggled = !state.isToggled);
  }

  if (action.type === "UN_TOGGLE") {
    return (state.isToggled = !state.isToggled);
  }

  return state;
};

const store = createStore(toggleReducer);

export default store;
