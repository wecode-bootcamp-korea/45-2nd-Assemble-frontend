import React from "react";
import CardList from "../../components/Card/CardList";
import MobileNav from "../../components/Nav/MobileNav.jsx";
import styled from "styled-components";
import MatchingLayout from "../../components/Layout/MatchingLayout";

const Matching = () => {
  return (
    <MatchingLayout>
      <MatchingContents>
        <MobileNav />
        <CardList />
      </MatchingContents>
    </MatchingLayout>
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
