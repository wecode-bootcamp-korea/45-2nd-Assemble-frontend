import React from "react";
import NiceModal from "@ebay/nice-modal-react";
import ProfileBook from "../ProfileBook/ProfileBook";
import styled from "styled-components";

const ProfileBookBtn = CourtHost => {
  const openProfileBook = e => {
    e.stopPropagation();
    NiceModal.show(ProfileBook, { CourtHost });
    document.body.style.overflow = "hidden";
  };
  return (
    <BtnWrapper onClick={e => openProfileBook(e)}>
      <BookBtn />
      <TipText>상대방을 확인하세요.</TipText>
    </BtnWrapper>
  );
};

export default ProfileBookBtn;

const BookBtn = styled.button`
  height: 50px;
  width: 50px;
  background-image: url(/images/puzzleOne.png);
  background-size: 55px;
  background-repeat: no-repeat;
  &:hover {
    background-image: url(/images/puzzleTwo.png);
    background-size: 55px;
    background-repeat: no-repeat;
    filter: brightness(130%);
  }
`;

const TipText = styled.div`
  color: white;
  font-size: 10px;
  display: none;
`;

const BtnWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: 5px;
  &:hover ${TipText} {
    display: flex;
  }
`;
