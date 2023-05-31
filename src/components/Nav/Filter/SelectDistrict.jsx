import React, { useState } from "react";
import styled from "styled-components";
import ListOfDistrict from "./ListOfDistrict";
import { DISTRICT_AREA_LIST } from "../Data/local-data";

const SelectDistrict = () => {
  const [selectedArea, setSelectedArea] = useState(-1);

  return (
    <Wrapper>
      {DISTRICT_AREA_LIST.map(item => (
        <DistrictArea
          key={item.id}
          onClick={() =>
            setSelectedArea(prev => (prev === item.id ? -1 : item.id))
          }
        >
          {item.area}
        </DistrictArea>
      ))}
      {selectedArea === -1 || <ListOfDistrict selectedArea={selectedArea} />}
    </Wrapper>
  );
};

export default SelectDistrict;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const DistrictArea = styled.button`
  color: ${props => props.theme.gray};
  width: 70%;
  padding: 20px 20px;
  margin: 18px;
  font-size: 17px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 10px;
  &:hover {
    border: 1px solid
      ${props =>
        props.primary ? props.theme.lightGray : props.theme.lightGreen};
    color: ${props => (props.primary ? "white" : props.theme.lightGreen)};
  }
`;
