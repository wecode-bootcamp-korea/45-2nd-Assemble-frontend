import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { navFilterAtom } from "../../../recoil/navFilterAtom";
import District from "./SelectDistrict";
import Date from "./SelectDate";
import Time from "./SelectTime";

const ModalOfNav = () => {
  const el = useRef();
  const [navFilter, setNavFilter] = useRecoilState(navFilterAtom);
  const { position } = navFilter;

  const handleCloseModal = e => {
    if (!el.current || !el.current.contains(e.target)) {
      setNavFilter({ ...navFilter, position: -1 });
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleCloseModal);
    return () => {
      document.removeEventListener("mouseup", handleCloseModal);
    };
  }, []);

  return <Wrapper ref={el}>{MODAL_LIST[position]}</Wrapper>;
};

export default ModalOfNav;

const MODAL_LIST = [<District key={0} />, <Date key={1} />, <Time key={2} />];

const Wrapper = styled.div`
  position: relative;
  width: 280px;
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
