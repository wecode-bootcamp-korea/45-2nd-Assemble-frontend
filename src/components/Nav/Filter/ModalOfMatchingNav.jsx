import React from "react";
import styled from "styled-components";
import Date from "./SelectDateForMatching";

const ModalOfMatchingNav = () => {
  return (
    <Wrapper>
      <div style={{ width: "280px" }}>
        <Date key={1} />
      </div>
    </Wrapper>
  );
};

export default ModalOfMatchingNav;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 0 10px;
  z-index: 2;
`;
