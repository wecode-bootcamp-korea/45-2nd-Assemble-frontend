import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { navFilterAtom } from "../../../recoil/navFilterAtom";

const DetailedFilterContent = () => {
  const [navFilter, setNavFilter] = useRecoilState(navFilterAtom);
  const { parking, provide, court } = navFilter;
  const setProvide = [...provide];

  const selectParking = id => {
    setNavFilter({
      ...navFilter,
      parking: parking === id ? 0 : id,
    });
  };

  const selectProvide = id => {
    setProvide[id - 1] = !setProvide[id - 1];
    setNavFilter({
      ...navFilter,
      provide: setProvide,
    });
  };

  const selectCourt = id => {
    setNavFilter({
      ...navFilter,
      court: court === id ? 0 : id,
    });
  };

  return (
    <Warraper>
      <Title>주차장</Title>
      <SelectArea>
        {PARKING_LIST.map(item => (
          <SelectBox key={item.id} onClick={() => selectParking(item.id)}>
            <SelectButton primary={item.id === parking}>
              <Icon>{item.icon}</Icon>
              <Title primary={item.id === parking}>{item.name}</Title>
            </SelectButton>
          </SelectBox>
        ))}
      </SelectArea>

      <Title>제공</Title>
      <SelectArea>
        {PROVIDE_LIST.map(item => (
          <SelectBox key={item.id} onClick={() => selectProvide(item.id)}>
            <SelectButton primary={provide[item.id - 1]}>
              <Icon>{item.icon}</Icon>
              <Title primary={provide[item.id - 1]}>{item.name}</Title>
            </SelectButton>
          </SelectBox>
        ))}
      </SelectArea>

      <Title>코트 종류</Title>
      <CourtArea>
        {COURT_LIST.map(item => (
          <CourtCheckBox key={item.id} onClick={() => selectCourt(item.id)}>
            <input type="checkbox" checked={item.id === court} readOnly />
            {item.name}
          </CourtCheckBox>
        ))}
      </CourtArea>
    </Warraper>
  );
};

export default DetailedFilterContent;

const PARKING_LIST = [
  { id: 1, name: `공용`, icon: <i class="fas fa-car-alt" /> },
  { id: 2, name: `개인`, icon: <i class="fas fa-key" /> },
];

const PROVIDE_LIST = [
  {
    id: 1,
    name: `장비 대여`,
    icon: <i class="fas fa-baseball-ball" />,
  },
  {
    id: 2,
    name: `샤워실`,
    icon: <i class="fa-solid fa-shower" />,
  },
  { id: 3, name: `편의 시설`, icon: <i class="fas fa-coffee" /> },
];

const COURT_LIST = [
  { id: 1, name: `클레이 코트` },
  { id: 2, name: `하드 코트` },
  { id: 3, name: `잔디 코트` },
  { id: 4, name: `카펫 코트` },
  { id: 5, name: `고무  코트` },
  { id: 6, name: `우드  코트` },
];

const Warraper = styled.div`
  position: relative;
  top: 10px;
  height: 580px;
  border-top: 1px solid ${props => props.theme.green};
  border-bottom: 1px solid ${props => props.theme.green};
`;

const SelectArea = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  text-align: center;
`;

const SelectBox = styled.li`
  border-radius: 15px;
  width: 150px;
  height: 150px;
`;

const SelectButton = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid ${props => props.primary || props.theme.gray};
  border-radius: 15px;
  background-color: ${props => props.primary && props.theme.lightGreen};
  color: ${props => (props.primary ? "white" : props.theme.gray)};
  box-shadow: ${props => props.primary && "0 0 11px rgba(33, 33, 33, 0.2)"};
  &:hover {
    border: 1px solid
      ${props =>
        props.primary ? props.theme.lightGray : props.theme.lightGreen};
    color: ${props => (props.primary ? "white" : props.theme.lightGreen)};
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 60px;
  &:hover {
  }
`;

const Title = styled.div`
  padding: 20px 0px;
  color: ${props => props.primary && props.theme.lightGreen};
`;

const CourtArea = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, 30px);
  grid-gap: 0px 70px;
  padding: 0px 30px;
`;

const CourtCheckBox = styled.li`
  color: ${props => props.theme.gray};
  cursor: pointer;
`;
