import React from "react";
import styled from "styled-components";
import MobileNav from "../../../components/Nav/MobileNav";
import CardListOfMain from "./Card/CardListOfMain";
import MainLayout from "../../../components/Layout/MainLayout";

const List = () => {
  return (
    <MainList>
      <MobileNav />
      <CardListOfMain />
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
