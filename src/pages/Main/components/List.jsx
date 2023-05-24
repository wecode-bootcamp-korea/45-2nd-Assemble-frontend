import React from "react";
import styled from "styled-components";
import CardList from "./Card/CardListOfMain";
import MobileNav from "../../../components/Nav/MobileNav";

const List = () => {
  return (
    <MainList>
      <MobileNav />
      <CardList />
    </MainList>
  );
};

export default List;

const MainList = styled.div`
  max-width: 1280px;
  margin: auto;
  @media screen and (min-width: 550px) {
    > :first-child {
      display: none;
    }
  }
`;
