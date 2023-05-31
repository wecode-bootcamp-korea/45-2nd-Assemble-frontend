import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { navFilterAtom } from "../../../recoil/navFilterAtom";

const DetailedFilterHeader = () => {
  const [navFilter, setNavFilter] = useRecoilState(navFilterAtom);
  return (
    <Warraper>
      <Title>필터</Title>
      <CloseModal onClick={() => setNavFilter({ ...navFilter, position: -1 })}>
        X
      </CloseModal>
    </Warraper>
  );
};

export default DetailedFilterHeader;

const Warraper = styled.div`
  position: relative;
`;

const Title = styled.div`
  font-weight: ${props => props.theme.xl};
  text-align: center;
`;

const CloseModal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  right: 0px;
  width: 28px;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.lightGray};
    border-radius: 50%;
  }
`;
