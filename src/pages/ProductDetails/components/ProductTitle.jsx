import React from "react";
import styled from "styled-components";
const ProductTitle = ({ courtData }) => {
  const { exclusive, courtName, address } = courtData;

  return (
    <Flex>
      <TitleFlex>
        <Title>{courtName}</Title>
        {exclusive === 1 && <Exclusive>독점 예약</Exclusive>}
      </TitleFlex>
      <p>{address}</p>
    </Flex>
  );
};

export default ProductTitle;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  padding-left: 30px;

  p {
    margin: 5px;
    font-size: 12px;
  }

  @media screen and (max-width: 1280px) {
    width: 80%;
  }
`;

const TitleFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h2`
  margin: 5px;
  font-size: 27px;
  font-weight: 500;

  @media screen and (max-width: 360px) {
    width: 100%;
  }
`;

const Exclusive = styled.span`
  padding: 7px;
  margin: 5px;
  font-size: 12px;
  color: white;
  border-radius: 40px;
  background-color: ${props => props.theme.green};

  @media screen and (max-width: 360px) {
    width: 40px;
  }
`;
