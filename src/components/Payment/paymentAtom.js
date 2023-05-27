import { atom } from "recoil";

export const paymentAtom = atom({
  key: "paymentAtom",
  default: {
    amount: 15000,
    orderId: "123456789",
    orderName: "테스트 상품",
    customerName: "김희연",
    flowMode: "DIRECT",
    easyPay: "",
  },
});
