import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import MatchingButton from "../../pages/Matching/components/MatchingButton";
import useBodyOverflow from "../../hooks/useBodyOverflow";
import { kakaoLogin } from "./kakaoLogin";
import { fadeIn, fadeOut } from "../../pages/Matching/components/animation";

export default NiceModal.create(() => {
  useBodyOverflow("hidden");
  const { isAuthenticated } = useAuth();

  const modal = useModal();

  const closedModal = () => {
    modal.remove();
  };
  const goTologin = () => {
    kakaoLogin();
  };
  const handleResolve = () => {
    modal.resolve();
    modal.remove();
  };

  return (
    <Container visible={modal.visible}>
      <Content>
        <ButtonWrapper>
          {/* <ClosedButton onClick={closedModal}>X</ClosedButton> */}
        </ButtonWrapper>
        <Title>로그인 및 회원가입</Title>
        <Location>
          <KaKaoBtnWrapper>
            {!isAuthenticated ? (
              <KaKaoImg onClick={goTologin} src="/images/kakaoLogin.png" />
            ) : (
              <LoginSuccessWrapper>
                <LoginImg src="/images/kakaosimbol.png" />
                <LoginSuccess>카카오 로그인 완료</LoginSuccess>
              </LoginSuccessWrapper>
            )}
          </KaKaoBtnWrapper>
        </Location>
        <ButtonArea>
          <ConfirmButtons>
            <LoginBtn onClick={closedModal} color="white">
              취소
            </LoginBtn>
            {isAuthenticated && (
              <LoginBtn onClick={handleResolve} color="#89B922">
                완료
              </LoginBtn>
            )}
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
  padding: 40px;
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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.div`
  font-size: 36px;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 24px;
  font-weight: 700;

  @media screen and (max-width: 550px) {
    font-size: 24px;
  }
`;

const Location = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const KaKaoBtnWrapper = styled.div`
  width: 380px;
  height: 100px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 550px) {
    width: 320px;
    height: 80px;
  }
`;
const LoginSuccessWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 100px;
  background-color: #fee500;
  border-radius: 12px;
  @media screen and (max-width: 550px) {
    width: 320px;
    height: 80px;
    gap: 12px;
    padding-right: 20px;
  }
`;
const KaKaoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;
const LoginSuccess = styled.div`
  color: #000000;
  font-size: 24px;
  @media screen and (max-width: 550px) {
    font-size: ${props => props.theme.xl.fontSize};
  }
`;
const LoginImg = styled.img``;
const ConfirmButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  gap: 20px;
`;

const ButtonArea = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled.button`
  width: 100%;
  max-width: 280px;
  padding: 20px;
  border-radius: 8px;
  font-size: 12px;
  color: ${props => (props.color === "#89B922" ? "white" : "black")};
  background-color: ${props => props.color};
  &:hover {
    background-color: ${props =>
      props.color === "#89B922" ? "#A1DB26" : "#e1dfdf"};
  }

  @media screen and (max-width: 550px) {
    max-width: 200px;
    padding: 16px;
  }
`;
