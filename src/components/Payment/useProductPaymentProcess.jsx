import { useModal } from "@ebay/nice-modal-react";
import ProductDetailPaymentModal from "../../pages/ProductDetails/components/ProductDetailPaymentModal";
import LoginModal from "../Login/LoginModal";
import UserInfoModal from "../Login/UserInfoModal";
import { useAuth } from "../../hooks/useAuth";

export const useProductPaymentProcess = () => {
  const { isAuthenticated, user } = useAuth();
  const paymentModal = useModal(ProductDetailPaymentModal);
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

  const detailPaymentProcess = async (matching, reserveData, courtData) => {
    try {
      if (!isAuthenticated) {
        //로그인 안했을 때
        await loginModal.show({
          reserveData: reserveData,
          matching: matching,
          courtData: courtData,
        });
        await paymentModal.show({
          reserveData: reserveData,
          courtData: courtData,
        });
          userInfoModal.remove();
        // }
      } else {
        //로그인 했을 때
        if (!matching) {
          //매칭 미선택
          await paymentModal.show({
            reserveData: reserveData,
            courtData: courtData,
          });
        } else {
          //매칭 선택
          if (checkUserInfo()) {
            // 회원정보 있을 때
            await paymentModal.show({
              reserveData: reserveData,
              courtData: courtData,
            });
          } else {
            //회원정보 없을 때
            await userInfoModal.show({
              courtData: courtData,
              reserveData: reserveData,
            });
              userInfoModal.remove();
            await paymentModal.show({
              reserveData: reserveData,
              courtData: courtData,
            });
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return { detailPaymentProcess };
};
