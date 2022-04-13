import { atom, selector } from "recoil";

export const inputState = atom({
  key: "input",
  default: "",
});

export const charCountState = selector({
  key: "charCount",
  get: ({ get }) => {
    const text = get(inputState);

    return text.length;
  },
});
