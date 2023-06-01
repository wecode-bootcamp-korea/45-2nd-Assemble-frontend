import React, { useState } from "react";
import styled from "styled-components";
import UserInfoForm from "./UserInfoForm";
import { apiClient } from "../../../utils";
import { API } from "../../../config";

const ProfileInfoCard = props => {
  const { title, value, name, profileValue, setProfileValue, setTest } = props;
  const [modifyBtnState, setModifyBtnState] = useState(true);

  const userInfoList = {
    이름: (
      <UserInfoForm
        type="text"
        name={name}
        profileValue={profileValue}
        setProfileValue={setProfileValue}
      />
    ),
    성별: (
      <UserInfoForm
        type="radio"
        title={title}
        name={name}
        profileValue={profileValue}
        setProfileValue={setProfileValue}
      />
    ),
    실력: (
      <UserInfoForm
        type="radio"
        title={title}
        name={name}
        profileValue={profileValue}
        setProfileValue={setProfileValue}
      />
    ),
  };

  const handleModifyBtn = async () => {
    if (!modifyBtnState) {
      try {
        await apiClient.patch(`${API.GET_USER_API}`, {
          name: profileValue.nameValue,
          gender: profileValue.genderValue,
          level: LEVEL_RELAY_DATA[profileValue.levelValue],
        });
        setModifyBtnState(prev => !prev);
        setTest(true);
      } catch (error) {
        console.error("PATCH 요청 실패:", error);
      }
    } else {
      setModifyBtnState(prev => !prev);
    }
  };

  return (
    <InfoCard>
      <InfoCardTopArea>
        <TitleText>{title}</TitleText>
        <ModifyBtn onClick={handleModifyBtn}>
          {modifyBtnState ? "수정" : "등록"}
        </ModifyBtn>
      </InfoCardTopArea>
      <InfoCardBottomArea>
        {title === "실력" && modifyBtnState && (
          <LevelBox>
            <LevelImg
              src={`/images/Level${value}.png`}
              alt="실력을 나타내는 이미지"
            />
            <ValueText>LV.</ValueText>
          </LevelBox>
        )}
        {modifyBtnState ? <ValueText>{value}</ValueText> : userInfoList[title]}
      </InfoCardBottomArea>
    </InfoCard>
  );
};

export default ProfileInfoCard;

const LEVEL_RELAY_DATA = {
  1: "ONE",
  2: "TWO",
  3: "THREE",
};

const InfoCard = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 16px;
  @media screen and (max-width: 750px) {
    width: 450px;
  }
  @media screen and (max-width: 480px) {
    width: 340px;
  }
`;

const InfoCardTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.div`
  font-size: 20px;
`;

const ModifyBtn = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 30px;
  background-color: ${props => props.theme.green};
  color: white;
  font-size: 18px;
  &:hover {
    background-color: ${props => props.theme.lightGreen};
  }
`;

const InfoCardBottomArea = styled.div`
  height: 76px;
  display: flex;
  align-items: flex-end;
`;

const LevelBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const LevelImg = styled.img`
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 50%;
  width: 64px;
  height: 64px;
`;

const ValueText = styled.div`
  font-size: 28px;
`;
