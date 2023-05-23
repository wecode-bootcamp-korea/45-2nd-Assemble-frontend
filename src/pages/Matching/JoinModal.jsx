import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import MatchingButton from "./components/MatchingButton";
import ProfileBox from "../../components/ProfileBook/ProfileBox";
import CardForModal from "../../components/Card/CardForModal";
import styled from "styled-components";

export default NiceModal.create(() => {
  const modal = useModal();
  const closedModal = () => {
    modal.remove();
    document.body.style.overflow = "unset";
  };
  return (
    <Container>
      <Content>
        <ClosedButton onClick={closedModal}>X</ClosedButton>
        <Title>조인하기</Title>
        <UserInfo>
          <UserBook>
            <ProfileBox />
          </UserBook>
        </UserInfo>
        <Location>
          <CardForModal />
        </Location>

        <ConfirmButtons>
          <MatchingButton color="white">취소</MatchingButton>
          <MatchingButton color="#89B922">확인</MatchingButton>
        </ConfirmButtons>
      </Content>
    </Container>
  );
});

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* transform: translate(0, 10%); */
  background-color: rgba(40, 40, 40, 0.8);
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  height: 650px;
  background-color: #f1f1f1;
  padding: 24px;
  border-radius: 16px;

  @media screen and (max-width: 550px) {
    width: 400px;
    height: 500px;
    padding: 16px;
  }

  @media screen and (max-width: 440px) {
    width: 300px;
    height: 460px;
    gap: 0;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  flex: 1;
`;
const ClosedButton = styled.button`
  padding: 5px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  width: 30px;
  font-size: ${props => props.theme.sm.fontSize};
  background-color: white;
`;
const Title = styled.div`
  font-size: ${props => props.theme["2xl"].fontSize};
  text-align: center;
  padding-bottom: 24px;

  @media screen and (max-width: 550px) {
    font-size: ${props => props.theme.xl.fontSize};
    padding-bottom: 8px;
  }
`;

const UserBook = styled.div`
  width: 100%;
  height: 100%;
`;

const Location = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ConfirmButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
