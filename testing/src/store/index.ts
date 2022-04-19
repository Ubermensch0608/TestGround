import { atom } from "recoil";

export const countState = atom({
  key: "count",
  default: {
    count: 0,
  },
});
