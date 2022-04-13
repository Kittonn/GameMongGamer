import { data } from "./Data/data";

export const change = (str) => {
  return str
    .split("")
    .map((item) => {
      if (data[item]) {
        return data[item];
      } else {
        return item;
      }
    })
    .join("");
};
