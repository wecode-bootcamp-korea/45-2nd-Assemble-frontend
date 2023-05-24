import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import styled from "styled-components";

export default NiceModal.create(CourtHost => {
  const {
    CourtHost: { host },
  } = CourtHost;
  const {
    CourtHost: { guest },
  } = CourtHost;
  const modal = useModal();

  const closedModal = () => {
    modal.remove();
    document.body.style.overflow = "unset";
  };
  const currentHost = host?.level ? host : guest;
  return (
    <Container>
      <Content>
        <CloseBtn onClick={closedModal}>X</CloseBtn>
        <ProfileBox>
          <ProfileLeft>
            <LevelImg
              src={`/images/Level${currentHost.level}.png`}
              alt="실력을 나타내는 이미지"
            />
            <Name>{currentHost.name}</Name>
          </ProfileLeft>
          <ProfileRight>
            <FirstInfoKeyValue>{currentHost.gender}</FirstInfoKeyValue>
            <InfoKeyName>성별</InfoKeyName>
            <SecondInfoKeyValue>LV.{currentHost.level}</SecondInfoKeyValue>
            <InfoKeyName>실력</InfoKeyName>
          </ProfileRight>
        </ProfileBox>
      </Content>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(40, 40, 40, 0.8);
  transition: all 0.5s ease;
`;
const Content = styled.div`
  position: absolute;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 14px 24px 24px 24px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 5%;
  background-color: ${props => props.theme.lightGray};
`;

const CloseBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  &:hover {
    background-color: white;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  margin-top: 14px;
  padding: 32px 24px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 5%;
  background-color: white;
  box-shadow: 0 0 20px gray;
`;

const ProfileLeft = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 176px;
  margin-right: 24px;
`;

const LevelImg = styled.img`
  width: 104px;
  height: 104px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 50%;
`;

const Name = styled.div`
  width: 104px;
  text-align: center;
  margin-top: 15px;
  font-size: 32px;
`;

const ProfileRight = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 96px;
  height: 176px;
`;

const FirstInfoKeyValue = styled.div`
  font-size: 22px;
`;

const InfoKeyName = styled.div`
  font-size: 10px;
`;

const SecondInfoKeyValue = styled(FirstInfoKeyValue)`
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid ${props => props.theme.lightGray};
`;
