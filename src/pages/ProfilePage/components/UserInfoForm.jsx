import React from "react";
import styled from "styled-components";
import FilterGender from "./FilterGender";

const UserInfoForm = ({ type, title, name, profileValue, setProfileValue }) => {
  const changeUserInfo = e => {
    const { name, value } = e.target;
    if (value.length < 11) {
      setProfileValue({ ...profileValue, [name]: value });
    }
  };

  const filterGenderList = {
    성별: (
      <FilterGender title={title} name={name} changeUserInfo={changeUserInfo} />
    ),
    실력: (
      <FilterGender title={title} name={name} changeUserInfo={changeUserInfo} />
    ),
  };

  return (
    <div>
      {type === "text" ? (
        <InfoInput
          name={name}
          type="text"
          placeholder="10자까지 등록됩니다."
          onChange={changeUserInfo}
        />
      ) : (
        filterGenderList[title]
      )}
    </div>
  );
};

export default UserInfoForm;

const InfoInput = styled.input`
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 10px;
  height: 30px;
  padding: 0 5px;
`;
