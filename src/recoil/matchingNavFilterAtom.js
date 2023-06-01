import { atom, selector } from "recoil";

export const matchingNavFilterAtom = atom({
  key: `matchingNavFilterAtom`,
  default: "",
});

export const navSearchFilterAtom = atom({
  key: "navSearchFilterAtom",
  default: "",
});
