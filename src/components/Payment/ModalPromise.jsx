import React, { useState, useEffect } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import JoinModal from "../../pages/Matching/JoinModal";
import { debounce } from "lodash";
import MatchingButton from "../../pages/Matching/components/MatchingButton";
import PaymentModal from "../../pages/Matching/PaymentModal";

const ModalPromise = () => {
  const joinModal = useModal(JoinModal);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => setWidth(window.innerWidth), 200);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  return (
    <>
      <MatchingButton onClick={showPromiseModal}>Show Modal</MatchingButton>
      <MatchingButton>{width}</MatchingButton>;
    </>
  );
};

export default ModalPromise;
