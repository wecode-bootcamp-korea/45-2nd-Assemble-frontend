import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { navFilterAtom } from "../../../recoil/navFilterAtom";
import District from "./SelectDistrict";
import Date from "./SelectDate";
import Time from "./SelectTime";

const ModalOfNav = () => {
  const { position } = useRecoilValue(navFilterAtom);
  return <Wrapper>{MODAL_LIST[position]}</Wrapper>;
};

const MODAL_LIST = [<District key={0} />, <Date key={1} />, <Time key={2} />];

export default ModalOfNav;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  border: 1px solid lightgray;
  padding: 0 10px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  z-index: 2;
`;
