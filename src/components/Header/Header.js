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
              <Link to="/matching">매칭하기</Link>
            </CategoryName>
          </CategoryFlex>
          <Authorization>
            {!isAuthenticated ? (
              <LoginButton onClick={kakaoLogin}>
                <button className="login-button">로그인 및 회원가입</button>
              </LoginButton>
            ) : (
              <>
                <LogOutButton onClick={logout}>
                  <button className="login-button">로그아웃</button>
                </LogOutButton>
                <ProfileButton user={user} />
              </>
            )}
          </Authorization>
        </>
      )}
    </HeaderFlex>
  );
};

export default Header;

const HeaderFlex = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  max-width: 1280px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px 0 40px;
  box-sizing: border-box;
  margin: auto;
  @media screen and (max-width: 660px) {
    padding: 16px 20px 0 20px;
  }
`;

const CategoryFlex = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 90px;
  @media screen and (max-width: 660px) {
    padding-left: 0px;
  }
`;

const Authorization = styled.div`
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
  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`;

const LoginButton = styled.div`
  padding: 10px 20px;
  .login-button {
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    font-size: 13px;
  }

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border-radius: 50px;
  }
  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;
const LogOutButton = styled.div`
  padding: 10px 20px;
  .login-button {
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    font-size: 13px;
  }

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border-radius: 50px;
  }
  @media screen and (max-width: 660px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 80px;
  @media screen and (max-width: 400px) {
    width: 60px;
  }
`;
