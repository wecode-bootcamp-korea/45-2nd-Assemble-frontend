import React from "react";
import styled from "styled-components";

const FilterGender = ({ title, name, changeUserInfo }) => {
  return (
    <div>
      {title === "성별" ? (
        <FlexBox>
          {GENDER_DATA.map(({ id, inputId, value }) => {
            return (
              <Box key={id}>
                <input
                  id={inputId}
                  value={value}
                  type="radio"
                  name={name}
                  onChange={changeUserInfo}
                />
                <label htmlFor={inputId}>{value}</label>
              </Box>
            );
          })}
        </FlexBox>
      ) : (
        <FlexBox>
          {LEVEL_DATA.map(({ id }) => {
            return (
              <Box key={id}>
                <input
                  id={id}
                  value={id}
                  type="radio"
                  name={name}
                  onChange={changeUserInfo}
                />
                <label htmlFor={id}>LV.{id}</label>
              </Box>
            );
          })}
        </FlexBox>
      )}
    </div>
  );
};

export default FilterGender;

const GENDER_DATA = [
  { id: 1, inputId: "male", value: "male" },
  { id: 2, inputId: "female", value: "female" },
];

const LEVEL_DATA = [{ id: 1 }, { id: 2 }, { id: 3 }];

const FlexBox = styled.div`
  display: flex;
`;

const Box = styled.div`
  display: flex;
  align-items: center;

  [type="radio"] {
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background-image: url("/images/CheckBox/unChecked.png");
    cursor: pointer;
    &:checked {
      background-image: url("/images/CheckBox/checked.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  label {
    margin-top: 3px;
    margin-left: 5px;
    font-size: 28px;
    cursor: pointer;
  }
`;
