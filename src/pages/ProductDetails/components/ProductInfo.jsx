import React, { useEffect } from "react";
import styled from "styled-components";
const ProductInfo = ({ courtData }) => {
  const {
    courtName,
    parking,
    rentalEquip,
    showerFacility,
    amenities,
    type,
    description,
    isIndoor,
  } = courtData;

  const arr = [];
  if (rentalEquip === 1) arr.push(1);
  if (showerFacility === 1) arr.push(2);
  if (amenities === 1) arr.push(3);

  const infoMessage = {
    1: { img: "장비 대여", msg: "장비 대여 서비스를 이용하실 수 있습니다." },
    2: { img: "샤워실", msg: "샤워실을 이용하실 수 있습니다." },
    3: { img: "편의 시설", msg: "시설 내에 기타 편의시설이 있습니다." },
  };

  return (
    <Flex>
      <CheckPoint>
        <Title>
          <span>{courtName}의 </span>
          <span>체크 포인트</span>
        </Title>
        <BoxFlex>
          <Point>
            <img src="/images/ProductDetail/실외 코트.png" />
            <span>{isIndoor === 1 ? "실내" : "실외"} 코트</span>
          </Point>
          <Point>
            <img src="/images/ProductDetail/클레이 코트.png" />
            <span>{type}</span>
          </Point>
          {parking !== 3 && (
            <Point>
              <img src="/images/ProductDetail/주차장.png" />
              <span>{parking}</span>
            </Point>
          )}
        </BoxFlex>
      </CheckPoint>
      <Details>
        {arr.map(id => {
          return (
            <Detail>
              <img src={`/images/ProductDetail/${infoMessage[id].img}.png`} />
              <span>{infoMessage[id].msg}</span>
            </Detail>
          );
        })}
      </Details>
      <Description>
        <DescriptionTitle>자세한 정보</DescriptionTitle>
        <p>{description}</p>
      </Description>
    </Flex>
  );
};

export default ProductInfo;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px;

  @media screen and (max-width: 1280px) {
    width: 50%;
    padding: 10px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 20px;
  }
`;

const CheckPoint = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;

  @media screen and (max-width: 1280px) {
    width: 100%;
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin: 25px 0;
  font-size: 23px;
  font-weight: 500;

  @media screen and (max-width: 1280px) {
    margin: 10px;
  }

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }

  @media screen and (max-width: 360px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const BoxFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1280px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Point = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 50px;
  margin-right: 20px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-right: 10px;
  }

  span {
    margin-top: 2px;
    margin-left: 5px;
    font-size: 14px;
    font-weight: 500;

    @media screen and (max-width: 800px) {
      width: 35px;
      font-size: 12px;
      text-align: center;
    }
  }
`;

const Details = styled.div`
  width: 650px;
  margin-left: 20px;
  padding: 20px 10px;
  border-top: 1px solid ${props => props.theme.lightGray};
  border-bottom: 1px solid ${props => props.theme.lightGray};

  @media screen and (max-width: 1280px) {
    width: 100%;
    margin-left: 0;
    padding: 20px 20px;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 20px;
  }

  span {
    margin: 15px;
    font-size: 15px;

    @media screen and (max-width: 1280px) {
      margin: 10px;
    }
  }
`;

const Description = styled.div`
  padding: 30px;

  p {
    width: 90%;
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.gray};
  }

  @media screen and (max-width: 1280px) {
    width: 100%;
    padding: 20px 20px;
  }
`;

const DescriptionTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
