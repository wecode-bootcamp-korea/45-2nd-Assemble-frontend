import React from "react";
import styled from "styled-components";

const ExpireReservationCard = ({ courtName, address, price, courtImage }) => {
  return (
    <Container>
      <CardImgWrapper>
        <CardImg src={courtImage} alt="테니스장사진" />
      </CardImgWrapper>
      <CardInfo>
        <CardTitle>{courtName}</CardTitle>
        <CardLocation>{address}</CardLocation>
      </CardInfo>
      <CardDescription>
        <CardPrice>{Math.floor(price).toLocaleString()} 원/시간</CardPrice>
      </CardDescription>
    </Container>
  );
};

export default ExpireReservationCard;

const CardImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  padding: 16px;
  &:hover {
    cursor: pointer;
    ${CardImg} {
      filter: brightness(70%);
    }
  }
`;

const CardImgWrapper = styled.div`
  flex: 1;
  width: 100%;
  padding-bottom: 16px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const CardDescription = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

const CardLocation = styled.p`
  font-size: ${props => props.theme.sm.fontSize};
  line-height: ${props => props.theme.sm.lineHeight};
`;

const CardTitle = styled.p`
  font-size: ${props => props.theme.xl.fontSize};
  line-height: ${props => props.theme.xl.lineHeight};
  font-weight: 900;
`;

const CardPrice = styled.p`
  font-size: ${props => props.theme.base.fontSize};
  line-height: ${props => props.theme.base.lineHeight};
  font-weight: 700;
`;
