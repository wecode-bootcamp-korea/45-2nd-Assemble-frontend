import React from "react";
import { Link } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import styled from "styled-components";
import { kakaoLogin } from "../Login/kakaoLogin";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { user, clearUser, isInitialized, isAuthenticated } = useAuth();
  const logout = () => {
    clearUser();
    alert(`로그아웃 되었습니다.`);
  };

  return (
    <HeaderFlex>
      {isInitialized && (
        <>
          <Link to="/">
            <Logo src="/images/logo2.png" />
          </Link>
          <CategoryFlex>
            <CategoryName>
              <Link to="/">예약하기</Link>
            </CategoryName>
            <CategoryName>
              <Link to="Matching">매칭하기</Link>
            </CategoryName>
          </CategoryFlex>
          <CategoryFlex>
            {!isAuthenticated ? (
              <LoginButton onClick={kakaoLogin}>로그인 및 회원가입</LoginButton>
            ) : (
              <>
                <LoginButton onClick={logout}>로그아웃</LoginButton>
                <ProfileButton user={user} />
              </>
            )}
          </CategoryFlex>
        </>
      )}
    </HeaderFlex>
  );
};

export default Header;

const HeaderFlex = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1280px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  margin: auto;
`;

const CategoryFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryName = styled.span`
  position: relative;
  padding: 10px;
  font-size: 16px;

  &:hover:after {
    position: absolute;
    left: 7px;
    bottom: 0;
    content: "";
    width: 64px;
    height: 2px;
    background-color: black;
  }
`;

const LoginButton = styled.button`
  padding: 10px 20px;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border-radius: 50px;
  }
`;

const Logo = styled.img`
  width: 80px;
`;
