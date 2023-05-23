import React from "react";
import styled from "styled-components";

const ProfileInfoCard = ({ title, value }) => {
  return (
    <InfoCard>
      <InfoCardTopArea>
        <TitleText>{title}</TitleText>
        <ModifyBtn>수정</ModifyBtn>
      </InfoCardTopArea>
      <InfoCardBottomArea>
        {title === "실력" && (
          <LevelImg
            src={`/images/Level${value}.png`}
            alt="실력을 나타내는 이미지"
          />
        )}
        {title === "실력" ? (
          <ValueText>LV.{value}</ValueText>
        ) : (
          <ValueText>{value}</ValueText>
        )}
      </InfoCardBottomArea>
    </InfoCard>
  );
};

export default ProfileInfoCard;

const InfoCard = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 16px;
`;

const InfoCardTopArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.div`
  font-size: 20px;
`;

const ModifyBtn = styled.button`
  width: 50px;
  border-radius: 30px;
  background-color: #89b922;
  color: white;
  font-size: 12px;
  &:hover {
    background-color: #a1db26;
  }
`;

const InfoCardBottomArea = styled.div`
  height: 96px;
  display: flex;
  align-items: flex-end;
`;

const LevelImg = styled.img`
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  width: 64px;
  height: 64px;
`;

const ValueText = styled.div`
  font-size: 28px;
`;
