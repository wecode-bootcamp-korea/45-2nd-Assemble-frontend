import { useModal } from "@ebay/nice-modal-react";
import JoinModal from "../../pages/Matching/JoinModal";
import MatchingLoginModal from "../Login/MatchingLoginModal";
import { useAuth } from "../../hooks/useAuth";

export const usePaymentProcess = () => {
  const { isAuthenticated } = useAuth();
  const joinModal = useModal(JoinModal);
  const loginModal = useModal(MatchingLoginModal);

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
