import React from "react";
import CardList from "../../components/Card/CardList";
import MobileNav from "../../components/Nav/MobileNav";
import styled from "styled-components";

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
