import React from "react";
import styled from "styled-components";
import CardOfMain from "./CardOfMain";
import { useRecoilValue } from "recoil";
import { mainCourtListAtom } from "../../../../recoil/mainCourtListAtom";

const CardList = () => {
  const courtList = useRecoilValue(mainCourtListAtom);

  return (
    <Wrapper>
      {courtList.map(item => (
        <CardOfMain key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};

export default CardList;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(0, calc((100vw- 48px) / 4 * 4 / 3));
  grid-row-gap: 36px;
  grid-column-gap: 0px;
  place-items: center;
  padding: 0px;
  @media screen and (max-width: 1126px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 100%;
  }
`;
