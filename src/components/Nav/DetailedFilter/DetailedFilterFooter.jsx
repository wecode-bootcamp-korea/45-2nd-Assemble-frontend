import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { navFilterAtom, querySelector } from "../../../recoil/navFilterAtom";
import { mainCourtListAtom } from "../../../recoil/mainCourtListAtom";

const DetailedFilterFooter = () => {
  const navigate = useNavigate();
  const [navFilter, setNavFilter] = useRecoilState(navFilterAtom);
  const setCourtList = useSetRecoilState(mainCourtListAtom);
  const queries = useRecoilValue(querySelector);

  const clearAll = () => {
    setNavFilter({
      ...navFilter,
      parking: 0,
      provide: [false, false, false],
      court: 0,
    });
  };

  const search = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/courts?${queries}`)
      .then(res => {
        setCourtList(res.data);
        setNavFilter({
          ...navFilter,
          position: -1,
        });
      });
    navigate(`/`);
  };

  return (
    <Wrappaer>
      <ClearAll onClick={clearAll}>전체 해제</ClearAll>
      <ShowPlaces onClick={search}>테니스장 보기</ShowPlaces>
    </Wrappaer>
  );
};

const Wrappaer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  min-width: 530px;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-between;
`;

const ClearAll = styled.div`
  cursor: pointer;
  text-decoration: underline;
  padding: 10px;
  &:hover {
    background-color: ${props => props.theme.lightGray};
    border-radius: 10px;
  }
`;

const ShowPlaces = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: ${props => props.theme.green};
  color: white;
  border-radius: 10px;
  &:hover {
    background-color: ${props => props.theme.lightGreen};
  }
`;

export default DetailedFilterFooter;
