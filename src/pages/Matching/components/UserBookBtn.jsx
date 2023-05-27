import React from "react";
import styled from "styled-components";

const UserBookBtn = () => {
  return (
    <ButtonContainer>
      <BookBtn />
    </ButtonContainer>
  );
};

export default UserBookBtn;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BookBtn = styled.button`
  width: 100%;
  height: 100%;

  background-image: url(/images/puzzleOne.png);
  background-size: cover;
  &:hover {
    background-image: url(/images/puzzleTwo.png);
    filter: brightness(130%);
  }
`;
