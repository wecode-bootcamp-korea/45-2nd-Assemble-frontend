import React from "react";
import styled from "styled-components";

const SuccessPageButton = ({ isMatched, setPostButtonOn }) => {
  const matched = SUCCESS_PAGE_BUTTON[0];
  const unMatched = SUCCESS_PAGE_BUTTON[1];

  return (
    <ButtonLayout>
      <IsMatching>{isMatched ? matched.message : unMatched.message}</IsMatching>
      <GoToMain
        onClick={() => {
          setPostButtonOn(prev => !prev);
        }}
      >
        {isMatched ? matched.buttonName : unMatched.buttonName}
      </GoToMain>
    </ButtonLayout>
  );
};
export default SuccessPageButton;

const SUCCESS_PAGE_BUTTON = [
  {
    message: "파트너 매칭 서비스 이용을 선택하셨습니다.",
    buttonName: "매칭 현황 보기",
  },
  {
    message: "파트너 매칭 서비스 이용을 선택하지 않으셨습니다.",
    buttonName: "메인으로",
  },
];

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IsMatching = styled.p`
  text-align: center;
  margin: 10px;
  font-size: ${props => props.theme.xs.fontSize};
`;

const GoToMain = styled.button`
  width: 100px;
  height: 30px;
  color: white;
  font-size: 12px;
  border-radius: 20px;
  background-color: ${props => props.theme.green};
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  margin: 3%;

  &:hover {
    background-color: ${props => props.theme.lightGreen};
  }
`;
