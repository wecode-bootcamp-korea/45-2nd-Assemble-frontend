import React, { useState } from "react";
import styled from "styled-components";
import NavModal from "./NavModal";

const Nav = () => {
  const [isBorder, setIsBorder] = useState("on");
  const [showModal, setShowModal] = useState(false);
  const [buttonOn, setButtonOn] = useState(false);
  return (
    <NavFlex>
      <ButtonBackground>
        <NavButtonBox>
          <NavButtonLeft
            buttonOn={buttonOn}
            onClick={() => {
              setShowModal("showLocationModal");
              setButtonOn("leftButton");
            }}
            onMouseEnter={() => setIsBorder("LeftOff")}
            onMouseLeave={() => setIsBorder("on")}
          >
            <p>장소</p>
            <p>선택한 장소</p>
          </NavButtonLeft>
          <NavModalWrapper>
            {showModal === "showLocationModal" && <NavModal />}
          </NavModalWrapper>
        </NavButtonBox>
        <BorderLineA border={isBorder} />
        <NavButtonBox>
          <NavButton
            buttonOn={buttonOn}
            onClick={() => {
              setShowModal("showDateModal");
              setButtonOn("centerButton");
            }}
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
          {showModal === "showDateModal" && <div>calendar</div>}
        </NavButtonBox>
        <BorderLineB border={isBorder} />
        <NavButtonBox>
          <NavButtonRight>
            <NavButton
              buttonOn={buttonOn}
              onClick={() => {
                setShowModal("showTimeModal");
                setButtonOn("rightButton");
              }}
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
          {showModal === "showTimeModal" && <div>timeslot</div>}
        </NavButtonBox>
      </ButtonBackground>
      <Filterbutton>필터</Filterbutton>
    </NavFlex>
  );
};

export default Nav;

const NavFlex = styled.div`
  width: 1280px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  background-color: white;
`;

const NavButton = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 280px;
  height: 64px;
  padding: 20px;
  border-radius: 40px;
  font-size: 12px;

  &:hover {
    background-color: ${props => props.theme.lightGray};
    background-color: ${props => props.buttonOn && "white"};
  }

  p:first-child {
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

const NavButtonBox = styled.div`
  position: relative;
`;
const NavButtonLeft = styled(NavButton)`
  padding-left: 30px;
`;

const NavModalWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 0px;
  width: 100%;
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
