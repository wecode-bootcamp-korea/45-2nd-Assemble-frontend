import { atom } from "recoil";

export const paymentAtom = atom({
  key: "paymentAtom",
  default: { easyPay: "" },
});
