import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import kakaoLogin from "../Login/kakaoLogin";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../pages/Recoil/loginAtom";

const Header = () => {
  // const [token, setToken] = useState(localStorage.getItem(`TOKEN`));
  const [token, setToken] = useRecoilState(loginAtom);
  console.log(`token1`, token);

  const logout = () => {
    setToken(localStorage.removeItem(`TOKEN`));
    alert(`로그아웃 되었습니다.`);
  };

  useEffect(() => {
    window.addEventListener(
      "message",
      e => {
        if (e.origin !== window.location.origin) {
          return;
        }
        const { code } = e.data;
        setToken(code);
      },
      false
    );
  }, [setToken]);

  return (
    <HeaderFlex>
      <div id="hi" />
      <Link to="/">LOGO</Link>
      <CategoryFlex>
        <CategoryName>
          <Link to="/">예약하기</Link>
        </CategoryName>
        <CategoryName>
          <Link to="Matching">매칭하기</Link>
        </CategoryName>
      </CategoryFlex>
      <CategoryFlex>
        {!token ? (
          <>
            <LoginButton onClick={() => kakaoLogin()}>
              로그인 및 회원가입
            </LoginButton>
            <ProfileButton>
              <MenuIcon src="images/Nav/menu_FILL0_wght400_GRAD0_opsz48.png" />
              <ProfileImg />
            </ProfileButton>
          </>
        ) : (
          <LoginButton onClick={() => logout()}>로그아웃</LoginButton>
        )}
      </CategoryFlex>
    </HeaderFlex>
  );
};

export default Header;

const HeaderFlex = styled.div`
  padding: 0 40px;
  width: 1280px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const CategoryFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryName = styled.span`
  font-size: 16px;
  padding: 10px;
  position: relative;

  &:hover:after {
    content: "";
    width: 64px;
    height: 2px;
    background-color: black;
    position: absolute;
    left: 10px;
    bottom: 0;
  }
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border-radius: 50px;
  }
`;

const ProfileButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 75px;
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  box-sizing: border-box;
  margin-left: 20px;

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

const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  background-color: burlywood;
  border-radius: 100%;
`;
