import React from "react";
import styled from "styled-components";

const FilterMatching = ({ paymentStatus, guest }) => {
  return (
    <div>
      {paymentStatus === "complete" ? (
        <Label matching={paymentStatus}>
          {guest === undefined ? "조인완료" : "매칭완료"}
        </Label>
      ) : (
        <Label>매칭대기</Label>
      )}
    </div>
  );
};

export default FilterMatching;

const Label = styled.div`
  z-index: 9999;
  font-size: 20px;
  width: 100px;
  height: 40px;
  border: 1px solid black;
  color: white;
  position: absolute;
  top: 10px;
  left: -15px;
  padding: 10px;
  text-align: center;
  background-color: ${props =>
    props.matching === "complete" ? "black" : props.theme.gray};
`;
