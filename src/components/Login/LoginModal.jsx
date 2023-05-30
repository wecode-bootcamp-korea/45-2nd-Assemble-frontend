import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import useBodyOverflow from "../../hooks/useBodyOverflow";
import { kakaoLogin } from "./kakaoLogin";
import { fadeIn, fadeOut } from "../../pages/Matching/components/animation";
import UserInfoModal from "./UserInfoModal";

export default NiceModal.create(({ reserveData, matching }) => {
  useBodyOverflow("hidden");
  const modal = useModal();

  const userInfoModal = useModal(UserInfoModal);
  const { isAuthenticated, user } = useAuth();
  const checkUserInfo = () => {
    const { gender, name, level } = user;

    if (!gender || !name || !level) {
      return false;
    } else {
      return true;
    }
  };
  const closedModal = () => {
    modal.remove();
  };
  const goTologin = () => {
    kakaoLogin();
  };
  const handleResolve = () => {
    if (matching) {
      if (checkUserInfo()) {
        modal.resolve();
      } else {
        userInfoModal.show({ reserveData: reserveData });
      }
    } else {
      modal.resolve();
    }
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
              <KaKaoImg onClick={goTologin} src="/images/kakaologin.png" />
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
  z-index: 9999;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 400px;
  height: 500px;
  background-color: #f1f1f1;
  padding: 40px;
  border-radius: 16px;

  @media screen and (max-width: 550px) {
    width: 400px;
    height: 500px;
  }

  @media screen and (max-width: 440px) {
    width: 330px;
    height: 400px;
    gap: 0;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.div`
  font-size: 24px;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 24px;
  font-weight: 700;

  @media screen and (max-width: 550px) {
    font-size: 24px;
    padding-bottom: 12px;
  }
`;

const Location = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const KaKaoBtnWrapper = styled.div`
  width: 260px;
  height: 70px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 550px) {
    width: 260px;
    height: 70px;
  }
  @media screen and (max-width: 440px) {
    width: 220px;
    height: 60px;
    gap: 0;
  }
`;
const LoginSuccessWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 70px;
  background-color: #fee500;
  border-radius: 12px;
  padding-right: 20px;
  @media screen and (max-width: 550px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 440px) {
    padding-right: 12px;
    width: 220px;
    height: 60px;
  }
`;
const KaKaoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;
const LoginSuccess = styled.div`
  color: #000000;
  font-size: 18px;
  @media screen and (max-width: 440px) {
    font-size: 16px;
  }
`;
const LoginImg = styled.img`
  @media screen and (max-width: 440px) {
    width: 50px;
    height: 50px;
  }
`;
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
  @media screen and (max-width: 550px) {
    flex: 0.4;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  max-width: 240px;
  padding: 16px;
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
  }
  @media screen and (max-width: 440px) {
    padding: 12px;
  }
`;
