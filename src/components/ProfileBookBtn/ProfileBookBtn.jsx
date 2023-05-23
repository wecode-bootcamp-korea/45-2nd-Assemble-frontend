import React from "react";
import styled from "styled-components";

const ProfileBookBtn = () => {
  return (
    <BtnWrapper>
      <BookBtn />
      <TipText>상대방을 확인하세요.</TipText>
    </BtnWrapper>
  );
};

export default ProfileBookBtn;

const BookBtn = styled.button`
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: 30px;
  left: 15px;
  background-image: url(/images/puzzleOne.png);
  background-size: cover;
  &:hover {
    background-image: url(/images/puzzleTwo.png);
    filter: brightness(130%);
  }
`;

const TipText = styled.div`
  color: white;
  position: absolute;
  bottom: 20px;
  left: 15px;
  font-size: 10px;
  display: none;
`;

const BtnWrapper = styled.div`
  &:hover ${TipText} {
    display: inline;
  }
`;
