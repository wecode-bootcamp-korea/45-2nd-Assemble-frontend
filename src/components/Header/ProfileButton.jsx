import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProfileButton = ({ user }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigation = useNavigate("");

  return (
    <MenuBox>
      <ProfileMenuButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <MenuIcon
          isOpenMenu={isOpenMenu}
          src={
            !isOpenMenu ? "images/Nav/menu.png" : "images/Nav/expand_less.png"
          }
        />
        <ProfileImg
          user={user}
          src={user.level && `images/Level${user.level}.png`}
        />
      </ProfileMenuButton>
      {isOpenMenu && (
        <DropMenu>
          {DROPMENU_LIST.map(data => {
            return (
              <li>
                <PageButton
                  onClick={() => {
                    navigation(data.page);
                    setIsOpenMenu(!isOpenMenu);
                  }}
                >
                  {data.name}
                </PageButton>
              </li>
            );
          })}
        </DropMenu>
      )}
    </MenuBox>
  );
};
export default ProfileButton;

const DROPMENU_LIST = [
  { name: "프로필 페이지", page: "/profilepage" },
  { name: "예약 현황 페이지", page: "/reservationstatuspage" },
  { name: "호스트 페이지", page: "/hostpage" },
  { name: "고객센터", page: "/" },
];

const MenuBox = styled.div`
  position: relative;
`;

const ProfileMenuButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 75px;
  height: 40px;
  margin-left: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border-radius: 50px;
  }
`;

const MenuIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 5px;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1px solid ${props => props.theme.lightGray};
  background-color: ${props => !props.user && props.theme.lightGray};
`;

const DropMenu = styled.ul`
  position: absolute;
  top: 50px;
  right: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 160px;
  height: 200px;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 10px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  z-index: 1;
`;

const PageButton = styled.button`
  width: 130px;
  height: 30px;
  font-size: 12px;
  border: 1px solid ${props => props.theme.lightGray};
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.1);
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: ${props => props.theme.lightGreen};
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;
