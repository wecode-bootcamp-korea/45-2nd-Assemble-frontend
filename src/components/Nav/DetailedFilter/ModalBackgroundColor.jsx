import React from "react";
import styled from "styled-components";

const ModalBackgroundColor = () => {
  return <BackgroundColor />;
};

export default ModalBackgroundColor;

const BackgroundColor = styled.div`
  position: fixed;
  z-index: 100;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 75%;
  background-color: #1c1c1c;
`;
