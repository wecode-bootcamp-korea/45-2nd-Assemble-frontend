import React from "react";
import styled from "styled-components";

const MatchingButton = ({ children, onClick, color }) => {
  return <Button color={color}>{children}</Button>;
};

export default MatchingButton;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 10%;
  font-size: 12px;
  color: white;
  background-color: ${props => props.color};
  &:hover {
    background-color: ${props => (props.color === "#89B922" ? "#A1DB26" : "")};
  }

  @media screen and (max-width: 950px) {
    max-width: 80px;
  }
  @media screen and (max-width: 550px) {
    max-width: 100px;
    padding: 16px;
  }
`;
