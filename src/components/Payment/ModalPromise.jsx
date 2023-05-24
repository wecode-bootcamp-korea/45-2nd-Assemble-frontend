import React from "react";
import NiceModal, { useModal, antdModal } from "@ebay/nice-modal-react";
import JoinModal from "../../pages/Matching/JoinModal";
import MobileNavModal from "../Nav/MobileNavModal";
import MatchingButton from "../../pages/Matching/components/MatchingButton";
import PaymentModal from "../../pages/Matching/PaymentModal";

const ModalPromise = () => {
  const joinModal = useModal(JoinModal);

  const showPromiseModal = () => {
    joinModal
      .show({ name: "nate" })
      .then(res => {
        NiceModal.show(PaymentModal, { name: "nate2" });
      })
      .catch(err => {
        console.log("Rejected: ", err);
      });
  };

  return <MatchingButton onClick={showPromiseModal}>Show Modal</MatchingButton>;
};

export default ModalPromise;
