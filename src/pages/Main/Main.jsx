import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import List from "./components/List";
import Map from "./components/Map";
import { mainCourtListAtom } from "../../recoil/mainCourtListAtom";

const Main = () => {
  const setCourtList = useSetRecoilState(mainCourtListAtom);
  const [searchParams, setSearchParams] = useSearchParams();
  const mapPage = searchParams.get(`page`) === `map`;

  const changePage = () => {
    searchParams.set(`page`, mapPage ? `list` : `map`);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/data/main-court-list.json`)
      .then(res => setCourtList(res.data));
  }, [setCourtList]);

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
