import { loadTossPayments } from "@tosspayments/payment-sdk";
import { useModal } from "@ebay/nice-modal-react";
import JoinModal from "../../pages/Matching/JoinModal";
import PaymentModal from "../../pages/Matching/PaymentModal";
const clientKey = process.env.REACT_APP_CLIENTKEY;

export const usePaymentProcess = () => {
  const joinModal = useModal(JoinModal);
  const paymentModal = useModal(PaymentModal);

  const paymentProcess = async () => {
    try {
      await joinModal.show();
      await joinModal.remove();
      await paymentModal.show();
    } catch (e) {
      console.error(e);
    }

    await loadTossPayments(clientKey).then(tossPayments => {
      tossPayments
        .requestPayment("카드", {
          amount: 15000,
          orderId: "ZCTNklr4W7gWvaxV6pEy5",
          orderName: "토스 티셔츠 외 2건",
          customerName: "박토스",
          successUrl: "http://localhost:8080/success",
          failUrl: "http://localhost:8080/fail",
          flowMode: "DIRECT",
          easyPay: "토스페이",
        })
        .catch(function (error) {
          if (error.code === "USER_CANCEL") {
          } else if (error.code === "INVALID_CARD_COMPANY") {
          }
        });
    });
  };

  return { paymentProcess };
};
