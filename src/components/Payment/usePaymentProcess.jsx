import { useModal } from "@ebay/nice-modal-react";
import JoinModal from "../../pages/Matching/JoinModal";
import PaymentModal from "../../pages/Matching/PaymentModal";
import LoginModal from "../Login/LoginModal";
import UserInfoModal from "../Login/UserInfoModal";
import { useAuth } from "../../hooks/useAuth";

export const usePaymentProcess = () => {
  const { isAuthenticated, user } = useAuth();
  const joinModal = useModal(JoinModal);
  const paymentModal = useModal(PaymentModal);
  const loginModal = useModal(LoginModal);
  const userInfoModal = useModal(UserInfoModal);

  const checkUserInfo = () => {
    const { gender, name, level } = user;

    if (!gender || !name || !level) {
      return false;
    } else {
      return true;
    }
  };

  const paymentProcess = async data => {
    try {
      if (!isAuthenticated) {
        await loginModal.show();
        await joinModal.show({ data: data });
        await joinModal.remove();
        await paymentModal.show({ data: data });
      } else {
        if (checkUserInfo()) {
          await joinModal.show({ data: data });
          await joinModal.remove();
          await paymentModal.show({ data: data });
        } else {
          await userInfoModal.show();
          await joinModal.show({ data: data });
          await userInfoModal.remove();
          await joinModal.remove();
          await paymentModal.show({ data: data });
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return { paymentProcess };
};
