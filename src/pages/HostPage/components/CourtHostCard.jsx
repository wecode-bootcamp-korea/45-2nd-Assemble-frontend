import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ExpireReservationCard = ({
  courtId,
  courtName,
  address,
  price,
  courtImage,
}) => {
  const navigate = useNavigate();

  const goToCourt = () => {
    navigate(`/court/courtId${courtId}`);
  };

  return (
    <Container onClick={goToCourt}>
      <CardImgWrapper>
        <CardImg src={courtImage} alt="테니스장사진" />
      </CardImgWrapper>
      <CardInfo>
        <CardTitle>{courtName}</CardTitle>
        <CardLocation>{address}</CardLocation>
      </CardInfo>
      <CardDescription>
        <CardTimeInfo>
          <CardPrice>{price} 원/시간</CardPrice>
        </CardTimeInfo>
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
  padding: 16px;
  filter: brightness(0.8);
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    ${CardImg} {
      filter: brightness(150%);
    }
  }
`;

const CardImgWrapper = styled.div`
  width: 100%;
  flex: 1.2;
  padding-bottom: 16px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const CardDescription = styled.div`
  flex: 1;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
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

const CardTimeInfo = styled.div`
  flex: 1;
`;

const CardPrice = styled.p`
  font-size: ${props => props.theme.base.fontSize};
  line-height: ${props => props.theme.base.lineHeight};
  font-weight: 700;
`;
