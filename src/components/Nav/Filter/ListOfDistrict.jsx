import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { navFilterAtom } from "../../../recoil/navFilterAtom";
import { DISTRICT_LIST } from "../Data/local-data";

const ListOfDistrict = ({ selectedArea }) => {
  const [navFilter, setNavFilter] = useRecoilState(navFilterAtom);

  return (
    <Wrapper>
      <DistrictBox>
        {DISTRICT_LIST.filter(item => item.area_id === selectedArea).map(
          item => (
            <District
              key={item.id}
              primary={navFilter.district === item.id}
              onClick={() =>
                setNavFilter({
                  ...navFilter,
                  district: item.id === navFilter.district ? 0 : item.id,
                })
              }
            >
              {item.district}
            </District>
          )
        )}
      </DistrictBox>
    </Wrapper>
  );
};

export default ListOfDistrict;

const Wrapper = styled.div`
  position: absolute;
  left: 283px;
  top: -1px;
  width: 100%;
  background-color: white;
  display: flex;
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 10% 10px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  z-index: 2;
`;

const DistrictBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
`;

const District = styled.button`
  color: ${props => (props.primary ? "white" : props.theme.gray)};
  width: 60px;
  height: 30px;
  font-size: 13px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${props =>
    props.primary ? props.theme.lightGreen : "white"};
  box-shadow: ${props => props.primary && `5px 5px 11px rgba(33, 33, 33, 0.2)`};
  border: 1px solid lightGray;
  &:hover {
    border: 1px solid
      ${props =>
        props.primary ? props.theme.lightGray : props.theme.lightGreen};
  }
`;
