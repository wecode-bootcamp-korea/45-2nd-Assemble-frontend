import React from "react";
import styled from "styled-components";
const ProductImages = ({ courtData }) => {
  const { courtImage } = courtData;
  if (!courtImage) return;
  return (
    <Flex>
      <BigImage src={courtImage[0]} />
      <Images>
        <DetailImage src={courtImage[1]} />
        <DetailImage src={courtImage[2]} radius="right-top" />
        <DetailImage src={courtImage[3]} />
        <DetailImage src={courtImage[4]} radius="bottom-right" />
      </Images>
    </Flex>
  );
};

export default ProductImages;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1280px) {
    width: 80%;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const BigImage = styled.img`
  width: 640px;
  height: 550px;
  margin-right: 20px;
  border-radius: 40px 0 0 40px;

  @media screen and (max-width: 1280px) {
    width: 560px;
    height: 420px;
    margin-right: 10px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    border-radius: 40px;
  }

  @media screen and (max-width: 360px) {
    height: 280px;
  }
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  width: 620px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const DetailImage = styled.img`
  width: 300px;
  height: 265px;
  object-fit: cover;
  ${props => {
    switch (props.radius) {
      case "right-top":
        return `
          border-top-right-radius: 40px;
        `;
      case "bottom-right":
        return `
          border-bottom-right-radius: 40px;
        `;
      default:
        return `
          border-radius: none;
        `;
    }
  }}

  @media screen and (max-width: 1280px) {
    width: 49%;
    height: 205px;
  }

  @media screen and (max-width: 800px) {
    width: 24%;
    margin-top: 10px;
    border-radius: 20px;
  }
`;
