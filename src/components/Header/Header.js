import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProfileButton from "./ProfileButton";

const Header = () => {
  const token = true;

  return (
    <HeaderFlex>
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
        <LoginButton>{!token ? "로그인 및 회원가입" : "로그아웃"}</LoginButton>
        {token && <ProfileButton></ProfileButton>}
      </CategoryFlex>
    </HeaderFlex>
  );
};

export default Header;

const HeaderFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  height: 80px;
  padding: 0 40px;
  box-sizing: border-box;
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
