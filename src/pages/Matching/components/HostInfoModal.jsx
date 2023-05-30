import React, { useEffect, useRef } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import styled from "styled-components";
import useBodyOverflow from "../../../hooks/useBodyOverflow";
import { fadeIn, fadeOut } from "./animation";

const CONVERT_LEVEL = { 1: "LV.1", 2: "LV.2", 3: "LV.3" };
const CONVERT_GENDER = { male: "남성", female: "여성" };

export default NiceModal.create(({ data }) => {
  useBodyOverflow("hidden");
  const modalRef = useRef();
  const { hostInfo } = data;
  const modal = useModal();
  const closedModal = () => {
    modal.remove();
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickModalOutside);

    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  }, []);

  const clickModalOutside = event => {
    if (!modal.visible && !modalRef.current.contains(event.target)) {
      modal.remove();
    }
  };

  return (
    <Container visible={modal.visible}>
      <Content ref={modalRef}>
        <ButtonArea>
          <ClosedButton onClick={closedModal}>X</ClosedButton>
        </ButtonArea>
        <UserWrapper>
          <ProfileRight>
            <ProfileInfo>
              <ImgWrapper>
                <LevelImg
                  src="/images/Level2.png"
                  alt="실력을 나타내는 이미지"
                />
              </ImgWrapper>
              <Name>{hostInfo.name}</Name>
            </ProfileInfo>
          </ProfileRight>
          <ProfileLeft>
            <Filter>
              <FirstInfoKeyValue>
                {CONVERT_GENDER[hostInfo.gender]}
              </FirstInfoKeyValue>
              <InfoKeyName>성별</InfoKeyName>
            </Filter>
            <Filter>
              <SecondInfoKeyValue>
                {CONVERT_LEVEL[hostInfo.levelId]}
              </SecondInfoKeyValue>
              <InfoKeyNameSecond>실력</InfoKeyNameSecond>
            </Filter>
          </ProfileLeft>
        </UserWrapper>
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

  background-color: rgba(40, 40, 40, 0.6);
  transition: opacity 0.5s ease;
  animation: ${props => (props.visible ? fadeIn : fadeOut)} 0.5s ease;
  justify-content: center;
  align-items: center;
`;
const UserWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: white;
  width: 100%;
  height: 100%;
`;
const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const ClosedButton = styled.button`
  padding: 5px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  width: 30px;
  font-size: ${props => props.theme.sm.fontSize};
  background-color: white;
  @media screen and (max-width: 440px) {
    width: 24px;
    font-size: ${props => props.theme.xs.fontSize};
  }
`;
const Content = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: white;
  flex-direction: column;
  width: 400px;
  height: 260px;
  padding: 16px;

  @media screen and (max-width: 440px) {
    width: 320px;
  }
`;

const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 0.4;

  @media screen and (max-width: 440px) {
    padding: 9px 30px 0 16px;
  }
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  gap: 20px;
  @media screen and (max-width: 440px) {
    padding: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 120px;
  flex: 1;
`;

const LevelImg = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 50%;
`;

const Name = styled.div`
  width: 100%;
  flex: 0.5;
  font-size: ${props => props.theme.xl.fontSize};
  line-height: ${props => props.theme.xl.lineHeight};
  font-weight: 900;
  text-align: center;
  @media screen and (max-width: 550px) {
    font-size: ${props => props.theme.base.fontSize};
    line-height: ${props => props.theme.base.lineHeight};
  }
`;

const ProfileLeft = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 550px) {
    padding: 12px 0;
  }
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FirstInfoKeyValue = styled.div`
  font-size: ${props => props.theme["2xl"].fontSize};
  line-height: ${props => props.theme["2xl"].lineHeight};
`;

const InfoKeyName = styled.div`
  font-size: ${props => props.theme.xs.fontSize};
  line-height: ${props => props.theme.xs.lineHeight};
  padding-left: 4px;
  padding-bottom: 20px;
  @media screen and (max-width: 550px) {
    padding-bottom: 8px;
  }
`;
const InfoKeyNameSecond = styled.div`
  font-size: ${props => props.theme.xs.fontSize};
  line-height: ${props => props.theme.xs.lineHeight};
  padding-left: 4px;
`;
const SecondInfoKeyValue = styled.div`
  line-height: normal;
  padding-top: 20px;
  font-size: ${props => props.theme["2xl"].fontSize};
  line-height: ${props => props.theme["2xl"].lineHeight};
  border-top: 1px solid ${props => props.theme.lightGray};

  @media screen and (max-width: 550px) {
    padding-top: 10px;
  }
`;
