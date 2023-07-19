import React from "react";
import styled from "styled-components";
import KakaoMap from "./KakaoMap";

const ProductLocation = ({ courtData }) => {
  const { address } = courtData[0];
  console.log(address);
  return (
    <Flex>
      <Title>지도보기</Title>
      <KakaoMap courtData={courtData} />
      <Location>{address}</Location>
    </Flex>
  );
};

export default ProductLocation;

const Flex = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;

  @media screen and (max-width: 1280px) {
    width: 70%;
    padding-left: 0;
  }

  @media screen and (max-width: 360px) {
    width: 80%;
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: 500;
`;

const Map = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid black;

  @media screen and (max-width: 1280px) {
    height: 250px;
  }

  @media screen and (max-width: 360px) {
    height: 200px;
  }
`;

const Location = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;
