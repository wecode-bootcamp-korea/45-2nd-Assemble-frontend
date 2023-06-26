import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { TIME_SLOT } from "../Data/local-data";
import { navFilterAtom } from "../../../recoil/navFilterAtom";

const SelectTime = () => {
  const [navFilter, setNavFilter] = useRecoilState(navFilterAtom);

  return (
    <Wrapper>
      <TimeTableBox>
        {TIME_SLOT.map(item => (
          <TimeButton
            key={item.id}
            primary={navFilter.time === item.format}
            onClick={() =>
              setNavFilter({
                ...navFilter,
                time: item.format === navFilter.time ? `` : item.format,
                position: -1,
              })
            }
          >
            {item.timeSlot}
          </TimeButton>
        ))}
      </TimeTableBox>
    </Wrapper>
  );
};

export default SelectTime;

const Wrapper = styled.div`
  width: 280px;
  height: 317px;
  position: absolute;
  padding: 15px;
  box-sizing: border-box;
  z-index: 1;
  background-color: white;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 20px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  cursor: default;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.lightGray};
    border-radius: 6px;
  }
`;

const TimeTableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeButton = styled.button`
  color: ${props => (props.primary ? "white" : props.theme.gray)};
  box-shadow: ${props => props.primary && "5px 5px 11px rgba(33, 33, 33, 0.2)"};
  width: 120px;
  padding: 7px 10px;
  background-color: ${props =>
    props.primary ? props.theme.lightGreen : "white"};
  border: 1px solid lightGray;
  border-radius: 15px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.3);
  }
`;
