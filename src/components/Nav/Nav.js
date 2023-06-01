import React, { useState } from "react";
import styled from "styled-components";
const Nav = () => {
  const [isBorder, setIsBorder] = useState("on");

  return (
    <NavFlex>
      <ButtonBackground>
        <NavButtonLeft
          onMouseEnter={() => setIsBorder("LeftOff")}
          onMouseLeave={() => setIsBorder("on")}
        >
          <p>장소</p>
          <p>선택한 장소</p>
        </NavButtonLeft>
        <BorderLineA border={isBorder} />
        <NavButton
          onMouseEnter={() => {
            setIsBorder("CenterOff");
          }}
          onMouseLeave={() => {
            setIsBorder("on");
          }}
        >
          <p>날짜</p>
          <p>선택한 날짜</p>
        </NavButton>
        <BorderLineB border={isBorder} />
        <NavButtonRight>
          <NavButton
            onMouseEnter={() => {
              setIsBorder("RightOff");
            }}
            onMouseLeave={() => {
              setIsBorder("on");
            }}
          >
            <p>시간</p>
            <p>선택한 시간</p>
          </NavButton>
          <SearchIcon />
        </NavButtonRight>
      </ButtonBackground>
      <Filterbutton>필터</Filterbutton>
    </NavFlex>
  );
};

export default Nav;

const NavFlex = styled.div`
  max-width: 1280px;
  height: 80px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
`;

const ButtonBackground = styled.div`
  width: 840px;
  height: 66px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavButton = styled.div`
  font-size: 12px;
  width: 280px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  position: relative;

  &:hover {
    background-color: ${props => props.theme.lightGray};
    border-radius: 40px;
  }

  p:first-child {
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

const NavButtonLeft = styled(NavButton)`
  padding-left: 30px;
`;

const NavButtonRight = styled(NavButton)`
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const BorderLineA = styled.div`
  width: 1px;
  height: 30px;
  background-color: ${({ border, theme }) =>
    border === "LeftOff" || border === "CenterOff" ? "white" : theme.lightGray};
`;

const BorderLineB = styled(BorderLineA)`
  background-color: ${({ border, theme }) =>
    border === "RightOff" || border === "CenterOff"
      ? "white"
      : theme.lightGray};
`;

const SearchIcon = styled.button`
  position: absolute;
  right: 10px;
  width: 50px;
  height: 50px;
  background-size: cover;
  background-image: url(/images/Nav/searchicon.png);
  background-repeat: space;

  &:hover {
    background-image: url(/images/Nav/searchiconhover.png);
  }
`;

const Filterbutton = styled.button`
  border: 1px solid ${props => props.theme.lightGray};
  padding: 10px 20px;
  border-radius: 30px;
  margin-left: 20px;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border-radius: 50px;
  }
`;
