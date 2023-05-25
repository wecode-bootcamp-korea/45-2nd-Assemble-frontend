import React from "react";
import styled from "styled-components";

const MatchingButton = ({ children, onClick, color }) => {
  return (
    <Button onClick={onClick} color={color}>
      {children}
    </Button>
  );
};

export default MatchingButton;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-size: 12px;
  color: ${props => (props.color === "#89B922" ? "white" : "black")};
  background-color: ${props => props.color};
  &:hover {
    background-color: ${props =>
      props.color === "#89B922" ? "#A1DB26" : "#e1dfdf"};
  }

  @media screen and (max-width: 550px) {
    max-width: 100px;
    padding: 16px;
  }
`;
