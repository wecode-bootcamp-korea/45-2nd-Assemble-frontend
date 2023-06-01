import { useModal } from "@ebay/nice-modal-react";
import JoinModal from "../../pages/Matching/JoinModal";
import PaymentModal from "../../pages/Matching/PaymentModal";
import MatchingLoginModal from "../Login/MatchingLoginModal";
import LoginModal from "../Login/LoginModal";
import MatchingUserInfoModal from "../Login/MatchingUserInfoModal";
import { useAuth } from "../../hooks/useAuth";

export const usePaymentProcess = () => {
  const { isAuthenticated, user } = useAuth();
  const joinModal = useModal(JoinModal);
  const paymentModal = useModal(PaymentModal);
  const loginModal = useModal(MatchingLoginModal);
  const userInfoModal = useModal(MatchingUserInfoModal);

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
        await loginModal.show({ data });
      } else {
        await joinModal.show({ data: data });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return { paymentProcess };
};
