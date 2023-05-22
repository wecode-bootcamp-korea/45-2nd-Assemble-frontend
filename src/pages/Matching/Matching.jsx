import React from "react";
import CardList from "../../components/Card/CardList";
import styled from "styled-components";
import MobileNav from "../../components/Nav/MobileNav";

const Matching = () => {
  return (
    <MatchingContents>
      <MobileNav />
      <CardList />
    </MatchingContents>
  );
};
export default Matching;

const MatchingContents = styled.div`
  max-width: 1280px;
  margin: auto;
  @media screen and (min-width: 550px) {
    > :first-child {
      display: none;
    }
  }
`;
