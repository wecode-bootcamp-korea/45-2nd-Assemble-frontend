import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DistrictBox from "./DistrictBox";

const NavModal = () => {
  const [buttonClick, setButtonClick] = useState("");
  const [showModal, setShowModal] = useState("");
  useEffect(() => {
    setShowModal(<DistrictBox DistrictName={buttonClick} />);
  }, [buttonClick]);

  return (
    <ModalBox>
      <LargeDistrict onClick={() => setButtonClick("GANG BUCK")}>
        강북
      </LargeDistrict>
      <LargeDistrict onClick={() => setButtonClick("GANG NAM")}>
        강남
      </LargeDistrict>
    </ModalBox>
  );
};

export default NavModal;

const ModalBox = styled.div`
  width: 100%;
  height: 280px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 20% 10px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
`;

const LargeDistrict = styled.button`
  color: ${props => props.theme.gray};
  width: 70%;
  padding: 20px 20px;
  font-size: 17px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 10px;

  &:hover {
    color: white;
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    background-color: ${props => props.theme.lightGreen};
  }
`;
