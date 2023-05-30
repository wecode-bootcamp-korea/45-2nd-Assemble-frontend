import React, { useEffect } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import MatchingButton from "./components/MatchingButton";
import ProfileBox from "../../components/ProfileBook/ProfileBox";
import CardForModal from "../../components/Card/CardForModal";
import useBodyOverflow from "../../hooks/useBodyOverflow";
import { fadeIn, fadeOut } from "./components/animation";
import { matchingAtom } from "../Matching/matchingAtom";

export default NiceModal.create(({ data }) => {
  useBodyOverflow("hidden");

  const { courtInfo, hostInfo, timeSlot } = data;

  console.log(data);
  const modal = useModal();

  const closedModal = () => {
    modal.remove();
  };
  const handleResolve = async () => {
    modal.resolve();
  };

  return (
    <Container visible={modal.visible}>
      <Content>
        <ClosedButton onClick={closedModal}>X</ClosedButton>
        <Title>조인하기</Title>
        <UserInfo>
          <UserBook>
            <ProfileBox hostInfo={hostInfo} />
          </UserBook>
        </UserInfo>
        <Location>
          <CardForModal courtInfo={courtInfo} timeSlot={timeSlot} />
        </Location>
        <ButtonArea>
          <ConfirmButtons>
            <MatchingButton onClick={closedModal} color="white">
              취소
            </MatchingButton>
            <MatchingButton onClick={handleResolve} color="#89B922">
              확인
            </MatchingButton>
          </ConfirmButtons>
        </ButtonArea>
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
  display: ${props => (props.visible ? "flex" : "none")};
  opacity: ${props => (props.visible ? 1 : 0)};

  background-color: rgba(40, 40, 40, 0.8);
  transition: opacity 0.5s ease;
  animation: ${props => (props.visible ? fadeIn : fadeOut)} 0.5s ease;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  height: 700px;
  background-color: #f1f1f1;
  padding: 24px;
  border-radius: 16px;

  @media screen and (max-width: 550px) {
    width: 400px;
    height: 570px;
    padding: 16px;
  }

  @media screen and (max-width: 440px) {
    width: 380px;
    height: 480px;
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
  font-weight: 900;

  @media screen and (max-width: 550px) {
    font-size: ${props => props.theme.xl.fontSize};
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
  align-items: center;
  gap: 16px;
  flex: 1;
`;

const ButtonArea = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
