import React from "react";
import { useSearchParams } from "react-router-dom";
import List from "./components/List";
import Map from "./components/Map";
import styled from "styled-components";

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mapPage = searchParams.get(`page`) === `map`;

  const changePage = () => {
    searchParams.set(`page`, mapPage ? `list` : `map`);
    setSearchParams(searchParams);
  };

  return (
    <div>
      {mapPage ? <Map /> : <List />}

      <ChangeScreenBuuton onClick={() => changePage()}>
        {mapPage ? `목록 보기` : `지도 표시하기`}
      </ChangeScreenBuuton>
    </div>
  );
};

export default Main;

const ChangeScreenBuuton = styled.div`
  position: fixed;
  bottom: 150px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: black;
  color: white;
  text-align: center;
  width: 170px;
  padding: 14px 19px;
  border-radius: 24px;
  &:hover {
    cursor: pointer;
  }
`;
