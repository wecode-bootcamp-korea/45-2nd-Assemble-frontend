import React from "react";
import styled from "styled-components";
import Card from "./CardOfMain";

const CardList = () => {
  return (
    <Wrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Wrapper>
  );
};

export default CardList;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(0, calc((100vw- 48px) / 4 * 4 / 3));
  grid-row-gap: 36px;
  grid-column-gap: 24px;
  padding: 40px;

  @media screen and (max-width: 1126px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 100%;
    padding: 24px;
  }
`;
