import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import List from "./components/List";
import Map from "./components/Map";
import { useRecoilState, useRecoilValue } from "recoil";
import { mainCourtListAtom } from "../../recoil/mainCourtListAtom";
import { querySelector } from "../../recoil/navFilterAtom";

const Main = () => {
  const [courtList, setCourtList] = useRecoilState(mainCourtListAtom);
  const [searchParams, setSearchParams] = useSearchParams();
  const mapPage = searchParams.get(`page`) === `map`;
  const queries = useRecoilValue(querySelector);

  const changePage = () => {
    searchParams.set(`page`, mapPage ? `list` : `map`);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/courts?${queries}`)
      .then(res => {
        setCourtList(res.data);
      });
  }, []);

  return (
    <div>
      {mapPage ? <Map courtList={courtList} /> : <List courtList={courtList} />}

      <ChangeScreenButton onClick={changePage}>
        {mapPage ? `목록 보기` : `지도 표시하기`}
      </ChangeScreenButton>
    </div>
  );
};

export default Main;

const ChangeScreenButton = styled.div`
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
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;
